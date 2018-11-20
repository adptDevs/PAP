var uploaderMOD = (function () {
    var win;
    var vault;

    events.on("openUploader", openUploader);

    function openUploader(data) {
        upload_conf = data[0];
        text = data[1];
        params = data[2];
        newFileName = data[3];

        var randomID = Math.random();

        win.createWindow("vaultWin_" + randomID, 20, 30, 400, 350);
        win.window("vaultWin_" + randomID).setText(text);

        window.dhx4.ajax.get(upload_conf + params, function (r) {
            var t = window.dhx4.s2j(r.xmlDoc.responseText);
            if (t != null) {
                vault = win.window('vaultWin_' + randomID).attachVault(t);
                //
                vault.attachEvent("onUploadFile", function (file, extra) {
                    console.log(file);
                    console.log(extra);
                });
                vault.attachEvent("onUploadComplete", function (files) {
                    var f = files[0].serverName;
                    console.log(files);
                });
                vault.attachEvent("onUploadCancel", function (file) {
                    console.log(file);
                });
                vault.attachEvent("onUploadFail", function (file, extra) {
                    console.log("Failed: " + file);
                });
                vault.attachEvent("onDrop", function (node, fileData) {
                    console.log(fileData);
                });
            }
        });
    }

    var init = function () {
        win = new dhtmlXWindows();
    };

    return {
        init: init
    }
})();



