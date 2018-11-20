let papForms = {

    umaSearch: [ 

        {type: "fieldset", name: "searchFor", label: "Search for user", list: [

            {type: "settings", inputWidth: 250},
            {type: "combo", name: "_name", note:{text:"&nbsp;Enter users <b>name</b> above."}},
           // {type: "combo", name: "section", readonly:true, note:{text:"&nbsp;Enter users <b>section</b> above."}}
            
        ]},

        {type: "fieldset", label: "Folder Permissions.", list: [
            {type: "settings", inputWidth: 250},
            {type: "label",  label: "Select a folder you would like the user to edit."},
            {type: "combo", name: "_folder", readonly:true, note:{text:"&nbsp;Select <b>folder</b> above."}}
  
        ]},

        {type: "block", name: "addBlock", blockOffset: 30, hidden: true, list: [
            {type: "button", name: "add", value: "Add"},
            {type: "newcolumn"},
            {type: "button", name: "cancel", value: "Cancel"}
        ]},

        {type: "button", name: "submit", value: "Submit", width: 100}
    ]

};

