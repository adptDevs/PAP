var treeMOD = (function () {

    let policyTree;     // Tree
    let currentTreeID; // Current Selected file/folder
    let folderService;
    let currentFolders;
    const divisions = [9997, 9998, 9999];

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // EVENTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //_____________________________________________________________________________________________________________________________

    const _onRightClick = function () {

        policyTree.attachEvent('onRightClick', function (id, ev) {

            currentTreeID = id;

        });

    }

    //______________________________________________________________________________________________________________________________

    const _contextMenu = function () {

        policyTree.attachEvent("onBeforeContextMenu", id => {
            console.log(Home.getPermittedItems(), id);
            let items = Home.getPermittedItems();
            for (let i = 0; i < items.length; i++) {
                if (_hasPermission(items[i].ptID, id)) {
                    return true;
                }
            }
            console.log("ERROR");
            return false;
        });

        contextMenu.attachEvent('onClick', function (id, zoneId, cas) {

            switch (id) {

                case 'addItem': // Add Folder

                    //let newID = (new Date()).valueOf();
                    console.log(currentTreeID);
                    let parent = currentTreeID;
                    let newID = "New Folder_" + (new Date()).valueOf();
                    policyTree.insertNewItem(currentTreeID, newID, "New Folder");
                    currentTreeID = newID;

                    let addResult = folderService.addItem(_getFilePath());
                    addResult.then(realdata => {
                        if (!realdata) {
                            policyTree.selectItem(parent, false, false);
                            currentTreeID = parent;
                        }
                    });

                    break;

                case 'imprtFile': // Import File 

                    let fileName = 'New File';
                    //let parent = policyTree.getParentId(currentTreeID);

                    let filePath = _getFilePath();
                    events.emit("openUploader", [policyAndPro.getPaths("ext") + "upload_conf_pap.php", "Import Policies and Procedures", "?filePath=" + filePath, fileName]);

                    break;

                case 'delete': // Delete File

                    let deleteResult = folderService.deleteItem(_getFilePath());
                    deleteResult.then(realdata => {
                        if (realdata) {
                            policyTree.deleteItem(currentTreeID);
                            policyTree.saveOpenStates();
                            _populatePolicyTree();
                        } else {
                            dhtmlx.alert({
                                title: "<img src='/dhtmlx/codebase/imgs/folder_locked.png' style='position:absolute;width:54px;height:54px;left:135px;margin-bottom:80px'</img>",
                                type: "alert-error",
                                text: "<b>You Can't Delete a Permanent item!"
                            });
                        }
                    });
                    break;

                case 'reload': // Reload Tree 

                    // Call populateTree method
                    policyTree.saveOpenStates();
                    _populatePolicyTree();

                    break;

            }

        });

    }

    //______________________________________________________________________________________________________________________________

    const _onEdit = function () {

        policyTree.attachEvent("onEdit", function (state, id, tree, value) {

            if ((state == 2) && (value == "")) {
                dhtmlx.message({
                    type: "error",
                    text: "You must set a file name.",
                    expire: -1
                });
                return false;

            }

            if ((state == 2) && (value.match(/[_!@#$%^&*(),?:{}|<>0123456789]/))) {


                dhtmlx.message({
                    type: "error",
                    text: "You can not set a special " + "<b>character</b>" + " or" + " <b>number</b>" + ", in a file name",
                    expire: -1
                });

                return false;

            }

            if (state === 2) {
                folderService.renameItem(_getFilePath(), value);
                policyTree.saveOpenStates();
                _populatePolicyTree();
            }

            return true;
        });
    }

    const _onClick = function () {

        policyTree.attachEvent("onClick", function (id) {
            currentTreeID = id;
            let currentFile = _getFilePath();

            if (policyTree.hasChildren(id) === 0) {
                PDFObject.embed(folderService.getPdfFile(currentFile), "#pol");
            }
        });

    };

    //_________________________________________________________________________________

    //////////////////////////////////////////////////////////////////////////////////
    // The following functions are needed to initiate the calls
    // to the backend

    /**
     * This function will populate the tree
     * with the data that is in the portalFiles
     * server
     */
    const _populatePolicyTree = async () => {
        try {
            const result = await folderService.getFolders();
            if (currentFolders.length > 0) _removeCurrentFolders();
            currentFolders = result;
            console.log(currentFolders);
            for (let i = 0; i < currentFolders.length; i++) {
                policyTree.insertNewItem(currentFolders[i][1], currentFolders[i][0], currentFolders[i][2]);
            }
            //policyTree.parse(result, "jsarray");
            //policyTree.loadOpenStates();
        } catch (error) {
            console.log(error);
            dhtmlx.message({
                type: "error",
                text: "Unable to load files",
                expire: -1
            });
        }
    }

    /**
     * This function will delete everything within the tree.
     * DHTMLX does not provide a method within the tree obj
     * to clear items
     */
    const _removeCurrentFolders = () => {
        for (let i = 0; i < currentFolders.length; i++) {
            policyTree.deleteItem(currentFolders[i][0], false);
        }
    }

    /**
     * This function will take the currentTreeId
     * and generate the appropriate file path
     * (e.g. MIS will have this filepath: "/Central Admin/MIS/")
     */
    const _getFilePath = () => {
        // Get all parent directories
        let notDone = true;
        let current = currentTreeID;
        let parentList = [current];
        while (notDone) {
            if (policyTree.getParentId(current) === 0) {
                notDone = false;
            } else {
                parentList.push(policyTree.getParentId(current));
            }
            current = policyTree.getParentId(current);
        }
        console.log("PARENT LIST: ", parentList);
        // Generate file path
        if (parentList.length === 0) return "/"; // User is uploading to root

        let filePath = "/";
        for (let i = parentList.length - 1; i >= 0; i--) {
            filePath += parentList[i] + "/";
        }

        if (isFile(filePath)) filePath = filePath.slice(0, -1);

        // Remove any underscore followed by DHX auto-gen IDs
        // let pattern = filePath.indexOf("_");
        // filePath = filePath.substring(0, pattern != -1 ? pattern : filePath.length);

        return filePath;
    }

    const isFile = path => {
        let fileArray = path.split("/");
        let lastElement = fileArray[fileArray.length - 2]; // Skip whitespace at end
        if (lastElement.match(/.pdf/g) !== null) return true;

        return false;
    }

    const _hasPermission = (ptID, treeID) => {
        if (ptID == treeID) return true;

        // if (divisions.indexOf(treeID) > -1) return true;

        // Check if user has access to parent
        let level = policyTree.getLevel(treeID);
        let parentID;
        let current = treeID;
        for (let i = 0; i < level; i++) {
            parentID = policyTree.getParentId(current);

            if (parentID == ptID) return true;

            current = parentID;
        }

        return false;
    };


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PUBLIC METHODS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var init = function (cell) {

        // This is the JS object that will make calls to the back-end
        folderService = new Folders("policyAndPro");
        currentFolders = [];

        ////////////////////////////
        // TREE     ///////////////
        //////////////////////////

        policyTree = cell.attachTree();
        policyTree.setImagePath("/dhtmlx/codebase/imgs/dhxtree_material/");
        _populatePolicyTree();
        policyTree.enableItemEditor(true);
        policyTree.enableKeyboardNavigation(true);

        ////////////////////////////
        // CONTEXT MENU     ///////
        //////////////////////////

        contextMenu = new dhtmlXMenuObject();
        contextMenu.setIconsPath("/dhtmlx/codebase/imgs/");
        contextMenu.renderAsContextMenu();
        contextMenu.loadStruct('/beta/policyAndPro/data/folderContextMenu.xml');
        policyTree.enableContextMenu(contextMenu);

        ////////////////////////////
        // INIT EVENTS      ///////
        //////////////////////////

        _contextMenu();
        _onRightClick();
        _onEdit();
        _onClick()

    };

    return {
        init: init
    }
})();