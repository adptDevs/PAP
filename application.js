var policyAndPro = (function () {
	// Private variables
	var appName = "ADPT Policies and Procedures";
	var appDir = "policyAndPro";
	var sectionPath = "/beta/policyAndPro/js/sections/";
	var modPath = "/beta/policyAndPro/js/mods/";
	var componentPath = "/beta/policyAndPro/js/components/";
	var appPath = "/beta/policyAndPro/js/";
	var conPath = "/beta/policyAndPro/connectors/";
	var dataPath = "/beta/policyAndPro/data/";
	var extPath = "/beta/policyAndPro/ext/";
	var appLayout;
	var tabbar;
	var userInfo;
	var appSections;

	// Bind events ----------------------------------------------------------------------------------->
	events.on("setAppTab", setAppTab);

	function setAppTab(tabId) {
		tabbar.tabs(tabId).setActive();
	}
	// ------------------------------------------------------------------------------------------------>

	// Private methods
	var _initMODS = function (sec) {
		console.log(sec);
		for (var i = 0; i < sec.length; i++) {
			console.log(sec[i][0]);
			window[sec[i][0]].init(tabbar, sec[i][1]);
		}
		uploaderMOD.init();
	};

	// Public methods
	var getAppDirectory = function () {
		return appDir;
	};

	var getUserInfo = function () {
		return userInfo;
	};

	var getPaths = function (type) {
		switch (type) {
			case "apps":
				return appPath;
				break;

			case "connectors":
				return conPath;
				break;

			case "data":
				return dataPath;
				break;

			case "ext":
				return extPath
				break;

			case "sections":
				return sectionPath
				break;

			case "mods":
				return modPath;
				break;

			case "components":
				return componentPath;
				break;

			default:
				return "error";
				break;
		}
	};

	var init = function (parent, acl, sections, userData, sectionList) {
		var utilities = [
			"/ext/PDFObject/pdfobject.js",
			dataPath + "papService.js?v=" + Math.random(),
			dataPath + "locationConstants.js?v=" + Math.random(),
			dataPath + "policyz.js?v=" + Math.random(),
			dataPath + "papForms.js?v=" + Math.random(),
			"/dhtmlx/dhtmlxVault/codebase/dhtmlxvault.js?v=" + Math.random(),
			"/beta/policyAndPro/uploaderMOD.js?v=" + Math.random()

		];


		let utilitiesPromise = scriptLoader.load(utilities);
		utilitiesPromise.then(() => {
			let scriptArray = [];
			for (var i = 0; i < sectionList.length; i++) {
				scriptArray.push(sectionPath + sectionList[i][0] + ".js?=" + Math.random());
			}

			var loaderPromise = scriptLoader.load(scriptArray);
			loaderPromise.then(function () {
				console.log("Policy and Pro 'application.js' is loaded");
				// Create layout;
				appLayout = new dhtmlXLayoutObject({
					parent: parent,
					pattern: "2U",
					cells: [
						{ id: 'a', text: '', header: false },
						{ id: 'b', text: 'Documentation', collapse: true }
					]
				});
				tabbar = appLayout.cells("a").attachTabbar({
					align: "left",
					mode: "top"
				});

				// Set user data
				userInfo = userData;

				// Set app sections
				appSections = sectionList;
				console.log(appSections);
				var persNumber = getUserInfo()["persNumber"];
				console.log(getPaths("ext") + "getCurrentLocation.php?persNumber=" + persNumber);
				// dhx.ajax.get(getPaths("ext")+"getCurrentLocation.php?persNumber="+persNumber, function(text){

				// }).then(function(realdata){

				// var locationInfo = JSON.parse(realdata);
				// crConstants.currentLocation = locationInfo;

				// Initialize mods
				_initMODS(sectionList);
				// });


			}, function (err) {
				console.log("An error occurred!");
				console.log(err);

				// Throw up error page
				//errorPage.setErrorPage(parent, "load");
			});
		});
	};

	return {
		runApp: init,
		getAppDirectory: getAppDirectory,
		getUserInfo: getUserInfo,
		getPaths: getPaths
	}
})();