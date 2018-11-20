// HTTP Class
class HTTP_Service {

    constructor() {
        // Creation of HTTP service
    }

    post(url, params) {
        let promise = dhx.ajax.post(url, params, (text) => { });
        return promise;
    }

    get(url) {
        let promise = dhx.ajax.get(url, (text) => { });
        return promise;
    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Folders Class
const _folderStructure = new WeakMap();
const _apiEndpoint = new WeakMap();
const _portalFilesPath = new WeakMap();
const _httpServiceObj = new WeakMap();

class Folders {

    constructor(path) {
        _portalFilesPath.set(this, path);

        _httpServiceObj.set(this, new HTTP_Service());

        _apiEndpoint.set(this, {
            "getFolders": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "folders",
                "_params": {
                    "setters": {
                        "filePath": _portalFilesPath.get(this)
                    },
                    "requests": {
                        "getFolderList": ""
                    }
                }
            },
            "addItem": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "folders",
                "_params": {
                    "setters": {},
                    "requests": {
                        "addItem": ""
                    }
                }
            },
            "deleteItem": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "folders",
                "_params": {
                    "setters": {},
                    "requests": {
                        "deleteItem": ""
                    }
                }
            },
            "renameItem": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "folders",
                "_params": {
                    "setters": {},
                    "requests": {
                        "renameItem": ""
                    }
                }
            },
            "generatePdf": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "files",
                "_params": {
                    "setters": {
                        "pdfFilePath": ""
                    },
                    "requests": {
                        "generatePdf": ""
                    }
                }
            },
            "getUsers": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {},
                    "requests": {
                        "getUsers": ""
                    }
                }
            },
            "pdfApiEndpoint": "http://www.adpt.arkgov.net/beta/policyAndPro/data/papApi/pdfFileService.php"
        });

        _folderStructure.set(this, folders => {
            let folderStructure = [];
            let currentDirectory = null;
            let currentId = null;
            let currentParent = 0;
            let currentText = null;

            for (let i = 0; i < folders.length; i++) {

                currentId = folders[i].id;
                currentDirectory = folders[i].path;
                currentText = folders[i].name;
                if (currentDirectory.length === 1) {
                    currentParent = 0;
                } else {
                    let lastIndex = currentDirectory.length - 1;
                    currentParent = currentDirectory[lastIndex - 1];
                }
                folderStructure.push([currentId, currentParent, currentText]);
            }
            return folderStructure;
        });
    }

    getApiUrl(request, isPost) {
        let endPoint = _apiEndpoint.get(this)[request];
        let url = endPoint._url;

        if (isPost) {
            return url;
        }

        let api = endPoint._api;
        let params = endPoint._params;
        return url + "?api=" + api + "&params=" + JSON.stringify(params);
    }

    getPdfFile(file) {
        // TODO

        return `${_apiEndpoint.get(this).pdfApiEndpoint}?filePath=${encodeURIComponent(file)}`;
    }

    getFolders() {
        try {
            let promise = this.get(this.getApiUrl("getFolders")).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                return _folderStructure.get(this)(jsonObj.getFolderList);
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }

    }

    addItem(filePath) {
        console.log("FILE PATH: ", filePath);
        try {
            let params = {
                "setters": {
                    "itemToBeAdded": filePath,
                    "filePath": _portalFilesPath.get(this)
                },
                "requests": {
                    "addItem": ""
                }
            }
            let urlParams = JSON.stringify(params);
            let promise = this.post(this.getApiUrl("addItem", true), "api=folders&params=" + urlParams).then(realdata => {
                return true;
            }).fail(err => {
                console.log(err);
                dhtmlx.message({
                    type: "error",
                    text: "You are unable to add this item.",
                    expire: 5000
                });
                return false;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    deleteItem(filePath) {
        try {
            let params = {
                "setters": {
                    "itemToBeDeleted": filePath,
                    "filePath": _portalFilesPath.get(this)
                },
                "requests": {
                    "deleteItem": ""
                }
            }
            let urlParams = JSON.stringify(params);
            let promise = this.post(this.getApiUrl("deleteItem", true), "api=folders&params=" + urlParams).then(realdata => {
                return true;
            }).fail(err => {
                console.log(err);
                dhtmlx.message({
                    type: "error",
                    text: "You are unable to delete this folder.",
                    expire: 5000
                });
                return false;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    renameItem(filePath, newName) {
        try {
            let params = {
                "setters": {
                    "itemToBeRenamed": filePath,
                    "newName": newName,
                    "filePath": _portalFilesPath.get(this)
                },
                "requests": {
                    "renameItem": ""
                }
            }
            let urlParams = JSON.stringify(params);
            let promise = this.post(this.getApiUrl("renameItem", true), "api=folders&params=" + urlParams).then(realdata => {
                return true;
            }).fail(err => {
                console.log(err);
                dhtmlx.message({
                    type: "error",
                    text: "You are unable to rename this folder.",
                    expire: 5000
                });
                return false;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    post(url, params) {
        let promise = _httpServiceObj.get(this).post(url, params, (text) => { });
        return promise;
    }

    get(url) {
        let promise = _httpServiceObj.get(this).get(url, (text) => { });
        return promise;
    }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Users Class
const _userAPIEndpoint = new WeakMap();
const _userHTTPServiceObj = new WeakMap();

class Users {

    constructor(pernr) {
        _userHTTPServiceObj.set(this, new HTTP_Service());

        _userAPIEndpoint.set(this, {
            "getUsers": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {},
                    "requests": {
                        "getUsers": ""
                    }
                }
            },
            "getPermittedItems": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {
                        "pernr": pernr
                    },
                    "requests": {
                        "getPermittedItems": ""
                    }
                }
            },
            "getAdminItems": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {
                        "pernr": pernr
                    },
                    "requests": {
                        "getAdminItems": ""
                    }
                }
            },
            "getPermittedUsers": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {},
                    "requests": {
                        "getPermittedUsers": ""
                    }
                }
            },
            "addUserPermission": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {},
                    "requests": {
                        "addUserPermission": ""
                    }
                }
            },
            "deleteUserPermission": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {},
                    "requests": {
                        "deleteUserPermission": ""
                    }
                }
            },
            "getAdminStatus": {
                "_url": "/beta/policyAndPro/data/papService.php",
                "_api": "users",
                "_params": {
                    "setters": {
                        "pernr": pernr
                    },
                    "requests": {
                        "getAdminStatus": ""
                    }
                }
            }
        });
    }

    getApiUrl(request, isPost) {
        let endPoint = _userAPIEndpoint.get(this)[request];
        let url = endPoint._url;

        if (isPost) {
            return url;
        }

        let api = endPoint._api;
        let params = endPoint._params;
        return url + "?api=" + api + "&params=" + JSON.stringify(params);
    }

    addUserPermission(user, folder) {
        try {
            let params = {
                "setters": {
                    "newUser": user,
                    "folder": folder,
                    "admin": 0
                },
                "requests": {
                    "addUserPermission": ""
                }
            }
            let urlParams = JSON.stringify(params);
            let promise = this.post(this.getApiUrl("addUserPermission", true), "api=users&params=" + urlParams).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                jsonObj = jsonObj.addUserPermission;

                if (jsonObj[0] === "error") {
                    dhtmlx.message({
                        type: "error",
                        text: jsonObj[1],
                        expire: -1
                    });
                    return false;
                } else {
                    dhtmlx.message("Successfully added permission!");
                    return true;
                }
            }).fail(err => {
                console.log(err);
                dhtmlx.message({
                    type: "error",
                    text: "You are unable to add this permission.",
                    expire: 5000
                });
                return false;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    deleteUserPermission(user) {
        try {
            let params = {
                "setters": {
                    "pernr": user
                },
                "requests": {
                    "deleteUserPermission": ""
                }
            }
            let urlParams = JSON.stringify(params);
            let promise = this.post(this.getApiUrl("deleteUserPermission", true), "api=users&params=" + urlParams).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                jsonObj = jsonObj.deleteUserPermission;

                if (jsonObj.length > 0) {
                    dhtmlx.message({
                        type: "error",
                        text: "You are unable to remove that permission!",
                        expire: -1
                    });
                    return false;
                } else {
                    dhtmlx.message("Successfully removed permission!");
                    return true;
                }
            }).fail(err => {
                console.log(err);
                dhtmlx.message({
                    type: "error",
                    text: "You are unable to remove this permission!",
                    expire: 5000
                });
                return false;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getUsers() {
        try {
            let promise = this.get(this.getApiUrl("getUsers")).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                return jsonObj.getUsers;
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getPermittedItems() {
        try {
            let promise = this.get(this.getApiUrl("getPermittedItems")).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                return jsonObj.getPermittedItems;
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getAdminItems() {
        try {
            let promise = this.get(this.getApiUrl("getAdminItems")).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                return jsonObj.getAdminItems;
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getPermittedUsers() {
        try {
            let promise = this.get(this.getApiUrl("getPermittedUsers")).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                return jsonObj.getPermittedUsers;
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getAdminStatus() {
        try {
            let promise = this.get(this.getApiUrl("getAdminStatus")).then(realdata => {
                let jsonObj = JSON.parse(realdata);
                return jsonObj.getAdminStatus;
            }).fail(err => {
                console.log(err);
                return null;
            });

            return promise;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    post(url, params) {
        let promise = _userHTTPServiceObj.get(this).post(url, params, (text) => { });
        return promise;
    }

    get(url) {
        let promise = _userHTTPServiceObj.get(this).get(url, (text) => { });
        return promise;
    }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////