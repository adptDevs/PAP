var Home = (function () {

	var homeTabs;
	var layout;
	var toolbar;
	var permWindow;
	var form;
	var grid;
	var userCombo;
	var userService;
	var toolbar2;
	var currentRowID;
	var permittedItems;

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// EVENTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const getPermittedItems = () => {
		return permittedItems;
	};

	var _initMODS = function () {

		treeMOD.init(layout.cells("a"));

	};

	//__________________________________________________________________________________________________________________________

	var _managePermissions = function () {

		toolbar.attachEvent("onClick", function (id) {

			if (permWindow.window('previewWINDOW').isHidden()) {

				permWindow.window('previewWINDOW').show();
				permWindow.window('previewWINDOW').bringToTop();
				_parentDisable();
			} else {

				permWindow.window('previewWINDOW').bringToTop();

			}

		});

	};

	//__________________________________________________________________________________________________________________________

	var _parentDisable = function () {

		permWindow.window('previewWINDOW').setModal(true); // Disables Background.

	};

	//__________________________________________________________________________________________________________________________

	var _submit = function () {
		form.attachEvent("onButtonClick", function (name) {

			var nameID = form.getItemValue("_name");
			var folderID = form.getItemValue("_folder");

			if (nameID == "") {

				dhtmlx.message({
					type: "error",
					text: "You must select a User.",
					expire: -1
				});

			}

			else if (folderID == "") {

				dhtmlx.message({
					type: "error",
					text: "You must select a Folder.",
					expire: -1
				});

			}

			else {
				let user = form.getItemValue("_name");
				let folder = form.getItemValue("_folder");
				const result = userService.addUserPermission(user, folder);
				if (result) {
					_loadGrid();
				}
			}

		});
	};

	//________________________________________________________________________________________________________________________________________________________________________________      

	var _onRowSelect = function () {

		grid.attachEvent("onRowSelect", function (id, ind) {

			currentRowID = id;
			grid.selectRowById(currentRowID);

			if (currentRowID != undefined || currentRowID != null) {

				toolbar2.enableItem(1);

			}

		});

	};

	//___________________________________________________________________________________________________________________________________________________

	var _toolbar2 = function () {

		toolbar2.attachEvent("onClick", function (id) {

			switch (id) {

				case '1':

					if (currentRowID != undefined || currentRowID != null) {

						_removeUserPermision(currentRowID);

					} else {

						dhtmlx.message({
							type: "error",
							text: "Please Select a permission to delete..."
						});

					}

					break;
			}
		});
	};

	//___________________________________________________________________________________________________________________________________________________

	const _removeUserPermision = async (id) => {
		const result = await userService.deleteUserPermission(id);
		if (result) {
			grid.deleteSelectedRows();
			currentRowID = null;
		}
	}

	const _populateUserCombo = async () => {
		const result = await userService.getUsers();

		let comboList = [];
		let current;
		for (let i = 0; i < result.length; i++) {
			current = result[i];
			comboList.push([current.pernr, current.employee]);
		}

		let userCombo = form.getCombo("_name");
		userCombo.addOption(comboList);
	};

	//___________________________________________________________________________________________________________________________________________________

	const _populateFolderCombo = async () => {
		const result = await userService.getAdminItems();
		console.log("COMBO: ", result);

		let comboList = [];
		let current;
		for (let i = 0; i < result.length; i++) {
			current = result[i];
			comboList.push([current.ptID, current.loc_name]);
		}

		let userCombo = form.getCombo("_folder");
		userCombo.addOption(comboList);
	};

	const _populateToolbar = async () => {
		const result = await userService.getAdminStatus();

		if (result.length > 0) {
			toolbar.addButton(1, 1, 'Manage Permissions', '/dhtmlx/codebase/imgs/droid.png');
		}
	};

	//___________________________________________________________________________________________________________________________________________________

	const _loadGrid = async () => {
		const result = await userService.getPermittedUsers();
		grid.clearAll();
		let current;
		for (let i = 0; i < result.length; i++) {
			current = result[i];
			grid.addRow(current.pernr, [current.papUser, current.location, current.ACL]);
		}

		grid.refreshFilters();

		dhtmlx.message.hide("loadingBox");
	};

	const _setPermittedItems = async () => {
		const result = await userService.getPermittedItems();
		permittedItems = result;
	};

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var init = function (tabbar, sectionACL) {
		let pernr = policyAndPro.getUserInfo()["pernr"];
		userService = new Users(pernr);

		_setPermittedItems();

		tabbar.addTab("homeTab", "HOME");

		homeTabs = tabbar.tabs("homeTab");
		homeTabs.setActive();

		layout = homeTabs.attachLayout({
			pattern: "2U",
			cells: [
				{ id: "a", header: true },
				{ id: "b", header: true }
			]
		});

		layout.cells("a").setText("ADPT Policy Search");
		layout.cells("b").setText("ADPT Policy Preview");

		layout.cells("a").setWidth(400);

		layout.cells("b").attachHTMLString("<div id='pol' style='width: 100%; height: 100%;'></div>");

		//////////////////////////
		// TOOLBAR          /////
		////////////////////////

		toolbar = layout.attachToolbar();
		_populateToolbar();


		/////////////////////
		///   WINDOW     /// 
		///////////////////

		permWindow = new dhtmlXWindows();
		permWindow.createWindow('previewWINDOW', 350, 50, 1300, 510);
		permWindow.window('previewWINDOW').setText("<img src='/dhtmlx/codebase/imgs/droid.png' style='position:absolute;width:40px;height:40px;left:6px;top:4px;'> <span style='margin-left:10px;'></span>");
		permWindow.attachEvent("onClose", function (win) {
			win.hide();
			win.setModal(false);
			return false;
		});

		////////////////////////////////
		///   PERMISSION LAYOUT     /// 
		//////////////////////////////

		permLayout = permWindow.window('previewWINDOW').attachLayout("2U");
		permLayout.cells('a').setText("User Search");
		permLayout.cells('b').setText("Permision Grid");
		permLayout.cells("a").setWidth(360);

		//////////////////////////
		//  GRID TOOLBAR    /////
		////////////////////////

		toolbar2 = permLayout.attachToolbar();
		toolbar2.addButton(1, 1, 'Delete Permission', '/dhtmlx/codebase/imgs/x-button.png');
		toolbar2.disableItem(1);

		/////////////////////
		///   FORMS      /// 
		///////////////////

		form = permLayout.cells("a").attachForm(papForms.umaSearch);
		form.getCombo("_name").enableFilteringMode(true);

		/////////////////////
		///   GRID       /// 
		///////////////////

		permGridColumns = [

			{
				"columnName": "User",
				"filter": "#text_filter",
				"type": "ro",
				"align": "left",
				"sort": "str",
				"width": "180",
				"dbColumn": "papUser"
			},
			{
				"columnName": "Section/Location",
				"filter": "#select_filter",
				"type": "ro",
				"align": "left",
				"sort": "str",
				"width": "180",
				"dbColumn": "location"
			},
			{
				"columnName": "ACL",
				"filter": "#select_filter",
				"type": "ro",
				"align": "left",
				"sort": "str",
				"width": "420",
				"dbColumn": "isAdmin"
			},

		];

		gridCOMP.createGrid(permLayout.cells('b'), permGridColumns, true, "lineItemGrid");
		grid = gridCOMP.getGrid();

		_loadGrid();

		//////////////////////
		// COMBO'S      /////
		////////////////////

		_populateUserCombo();
		_populateFolderCombo();

		//  locCombo = form.getCombo("section");
		//  locCombo.addOption("1", "MIS");
		//  locCombo.addOption("2", "Fixed Assets");

		// locCombo = form.getCombo("_folder");
		// locCombo.addOption("1", "MIS");
		// locCombo.addOption("2", "Fixed Assets");


		//////////////////////////
		// SCRIPT ARRAY     /////
		////////////////////////	

		var scriptArray = [policyAndPro.getPaths("mods") + "treeMOD.js?v=" + Math.random()];
		var loaderPromise = scriptLoader.load(scriptArray);

		loaderPromise.then(function () {
			_initMODS();
		}, function (err) {
			console.log("An error occurred!");
			console.log(err);

		});

		permWindow.window('previewWINDOW').hide();

		//////////////////////////
		// INIT EVENTS       ////
		////////////////////////	

		_managePermissions();
		_submit();
		_onRowSelect();
		_toolbar2();
	};

	return {
		init: init,
		getPermittedItems: getPermittedItems
	}
})();