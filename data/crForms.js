var crForms = {



cashSSFormData: [   // FORM BEGIN
  {type: "settings", position: "label-left"},
 
{type: "block", width: "auto", blockOffset: 20, list: [

{type: "label", name: "headerTitle",  label: "<h1><b>What would you like to do?</b></h1>"}
 
  ]},

{type: "block", width: "auto", blockOffset: 20, list: [

{type: "button", name: "verifySelectSS", hidden:true, value: "Approve Cash Recipts"}, // verify btn
{type: "newcolumn"},
{type: "button", name: "beginCreateSS",value: "<img src='/dhtmlx/codebase/imgs/edit.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>Create Template Here</span>"}, // create btn
{type: "newcolumn"},
{type: "button", name: "registerDirectSS", hidden:true, value: "Register Directory"}, // reg directory btn
{type: "newcolumn"},
{type: "button", name: "importSS", value: "<img src='/dhtmlx/codebase/imgs/folder.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>Import Files Here</span>"} // import directory btn
  
  ]}

],

cashSSTempCreateData:[   // FORM BEGIN

{type: "settings", position: "label-left",inputWidth: 580, labelWidth: 90, inputWidth: 430},

{type: "block", width: "auto", blockOffset: 20, list: [
   
{type: "combo", label: "Select Location:", value: "", tooltip: "Select Your Location", name: "selectPTFormSS", position: "label-left",connector: "/_apps/cashReceipts/connectors/pt_ConnectorCOMBO.php"}
]},

{type: "block", width: "auto", blockOffset: 20, list: [
  {type: "combo", label: "Select Facility:", value: "", name: "selectFacilityFormSS", tooltip: "Select Your Facility ", position: "label-left",connector: "/_apps/cashReceipts/connectors/facility_ConnectorCOMBO.php"}
]},

{type: "block", width: "auto", blockOffset: 20, list: [
  {type: "combo", label: "Select Station:", value: "", name: "selectStationFormSS", tooltip: "Select Your Station", position: "label-left",connector: "/_apps/cashReceipts/connectors/station_ConnectorCOMBO.php"}
]},

{type: "block", width: "auto", blockOffset: 20, list: [
  {type: "combo", label: "Select Modifier", value: "", name: "selectModFormSS", position: "label-left",connector: "/_apps/cashReceipts/connectors/modifier_ConnectorCOMBO.php"}
]},

{type: "block", width: "auto", blockOffset: 20, list: [

{type: "button", name: "backSSBtn", value: "<img src='/dhtmlx/codebase/imgs/backspace.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>BACK</span>"},
{type: "newcolumn"},
{type: "button", value: "<img src='/dhtmlx/codebase/imgs/magic-wand.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>CREATE</span>", name: "createSSBtn"}
 
 ]}

],                      // FORM END

cashSSTempSelectData:[   // FORM BEGIN
{type: "block", width: "auto", name:"tet", blockOffset: 0, list: [

  {type: "settings", position: "label-left"},
    {type: "label", position: "label-left", name:"selectLABEL", label:"<h1>Standard Sale Items:</h1>"},

  {type: "block", width: 1000, name:"checkboxSelect", blockOffset: 0, list: [
    {type: "settings", position: "label-right"}
  ]},

  {type: "block", width: "auto", name:"tet2", blockOffset: 0, list: [
    {type: "button", value: "<img src='/dhtmlx/codebase/imgs/backspace.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>BACK</span>", name: "backSSBtnSELECT", tooltip: "Go Back"},
    {type: "newcolumn"},
    {type: "button", label: "New Input", value: "<img src='/dhtmlx/codebase/imgs/settings.png' style='position:absolute;width:18px;height:18px;left:6px;top:4px;'> <span style='margin-left:10px;'>GENERATE TEMPLATE</span>", name: "genSSBtnSELECT", tooltip: "Generate Template"}
  ]},
  ]}

  ],   // FORM END


templateGenDataDESC:[   // FORM BEGIN
  
  {type: "block", width: "auto", blockOffset: 0, list: [

  {type: "settings", position: "label-left"},

  {type: "block", width: 1000, name:"templateGeneratedDESCBLOCK", blockOffset: 0, list: [

  {type:"label", name:"glLabel", labelWidth:600},

  {type: "block", width: 1000, name:"templateGeneratedDESC", blockOffset: 0, list: [

    {type: "settings", position: "label-right"},
    
    ]},


  ]},

   

    ]},

    {type: "button", value: "SAVE", name: "saveNewDescriptions", disabled:false, hidden:true, tooltip: "Save"},

     ],  // FORM END

genDescForGL:[   // FORM BEGIN
  
  {type: "block", width: "auto", blockOffset: 0, list: [

  {type: "settings", position: "label-left"},

  {type: "block", width: 1000, name:"templateGeneratedDESCBLOCK", blockOffset: 0, list: [

  {type:"label", name:"glLabel", labelWidth:600},

  {type: "block", width: 1000, name:"templateGeneratedDESC", blockOffset: 0, list: [

    {type: "settings", position: "label-right"},
    
    ]},


  ]},

   

    ]},

    {type: "button", value: "OK", name: "saveNewDescriptions", disabled:false, hidden:true, tooltip: "Save"},

     ],  // FORM END


gridToFormGenerated:[   // FORM BEGIN
      {type: "block", width: "auto", blockOffset: 0, list: [
      
        {type: "settings", position: "label-left"},
      
        {type: "block", width: 1000, name:"genBLOCK", blockOffset: 0, list: [
      
        {type: "block", width: 1000, name:"form", blockOffset: 0, list: [
        

          
            ]},

          ]},
      
        ]}
           ],   // FORM END

templateGenData:[   // FORM BEGIN
{type: "block", width: "auto", blockOffset: 0, list: [

  {type: "settings", position: "label-left"},

  {type: "block", width: 1000, name:"templateGeneratedBLOCK", blockOffset: 0, list: [

    {type: "block", width: 1000, name:"templateGenerated", blockOffset: 0, list: [
      
      {type: "settings", position: "label-right"},
      
    ]},
    
  ]},

  {type: "block", width: "auto", blockOffset: 0, list: [

    {type:"combo", label:"Amount of Tax Types:", inputWidth:150, name:"csTaxTypeCOMBO", options:[
    {text: "1", value: 1},
    {text: "2", value: 2},
    {text: "3", value: 3},
    {text: "4", value: 4},
    {text: "5", value: 5},
    {text: "6", value: 6},
    {text: "7", value: 7},
    {text: "8", value: 8}
    ]},

    {type: "checkbox", name:"facilityManCHECKBOX", hidden:true, label: "Has Facility Manager:", tooltip: "Does your park/location have a facility manager, if so, check the box."},

    {type: "input", label: "Change Funds:", value:"", numberFormat:"0,000.00", name:"cfSS", note: {text: "Total amount pulled from register to balance."}, required:true, position: "label-left"},
    
    {type: "input", label: "Beginning Register Amount:", value:"", numberFormat:"0,000.00", name:"beginRegAmountSS", note: {text: "The registers beginning amount of cash."}, required:true, position: "label-left"}, // CASHIER BETA PUSH EDIT
    
    {type: "button", value: "SAVE", name: "saveGenTemp", hidden:true, tooltip: "Save Created Template"},
]},

  ]}
     ],   // FORM END

personalizedLineItemDATA:[

  {type: "block", style: "width:100%;", list:[  

  {type: "label", name:"LABEL", label:"<h1>ADD SALE ITEM DESCRIPTIONS HERE:</h1>"},

  ]},

   {type: "block", style: "width:100%;", list:[     

    {type: "fieldset", style: "width:100%;", list:[

      {type: "block", position: "label-top", list:[

      {type: "settings", position: "label-left", labelWidth: 340, inputWidth: 400},

      {type: "combo", label: "Select a Sale Item to create descriptions for:", name: "baseGL", position: "label-top"},
      {type: "combo", label: "How many descriptions would you like to create for this Sale Item:", value: "", name: "amountGLDescriptions", position: "label-top", options:[
          
          {text: "1", value: "1"},
          {text: "2", value: "2"},
          {text: "3", value: "3"},
          {text: "4", value: "4"},
          {text: "5", value: "5"},
          {text: "6", value: "6"},
          { text:"7",  value:"7"}
      
      ]},
      

     
      ]},

      {type: "block", position: "label-top", list:[
      {type: "button", name: "genDesAmount", value: "Generate"},  
]},
  
  ]},

    ]},
  
    ], // FORM END

descSelector:[

 {type: "block", style: "width:100%;", list:[     

    {type: "fieldset", style: "width:100%;", list:[

      {type: "block", position: "label-top", list:[

      {type: "settings", position: "label-left", labelWidth: 340, inputWidth: 400},

      {type: "combo", label: "Amount of Descriptions:", name: "amountOfDesc", position: "label-top", options:[
          
          {text: "1", value: "1"},
          {text: "2", value: "2"},
          {text: "3", value: "3"},
          {text: "4", value: "4"},
          {text: "5", value: "5"},
          {text: "6", value: "6"},
          { text:"7",  value:"7"}
      
      ]},
      
      

     
      ]},

      {type: "block", position: "label-top", list:[
      {type: "button", name: "genAmount", value: "Generate"},  
]},
  
  ]},

    ]},
  
    ],

    ioSelect:[

      {type: "block", style: "width:100%;", list:[     
     
         {type: "fieldset", style: "width:100%;", list:[
     
           {type: "block", position: "label-top", list:[
     
           {type: "settings", position: "label-left", labelWidth: 340, inputWidth: 400},
     
           {type: "combo", readonly:true, label: "Select the IO that you want to attach:", name: "attachIOToStandardGL", note: {text: "Once the IO is set for the Standard Sale Item, it should never change."}, connector: "/_apps/cashReceipts2/connectors/io_COMBO_CONNECTOR.php",  position: "label-top"},
           
 
           ]},
     
           {type: "block", position: "label-top", list:[
            
            {type: "button", name: "attachIO", value: "Attach IO"},  
     ]},
       
       ]},
     
         ]},
       
         ],
     /**
/**
 * SINGLE COMBO FOR TEMPLATE SELECTION
 * 		- This is one combo that contains Location, Facility, Station, and Modifier in
 * 		a comma-separated list so that the use only has to select from one combo box.
 * 		Also, it contains a checkbox to allow the user to select 'favorited' templates
 * 		for quicker template selections in the future
 * 	author:
 * 		Aaron Pillert
 */
selectTemplateFormData: [
{type: "settings", position: "label-left", labelWidth: 90, inputWidth: 130},
	{type: "block", width: "auto", blockOffset: 20, list: [
		{type: "label", label: "<h2>Find the template you are looking for:</h2>", value: "", labelWidth: "600"},
		{type: "block", width: "auto", blockOffset: "0", list: [
			{type: "combo", value: "", name: "selectTemplate", inputWidth: "600"}
		]},
		{type: "block", width: "auto", blockOffset: "0", list: [
			{type: "button", label: "New Input", value: "Go!", name: "genBtn"},
			{type: "newcolumn", offset: "50"},
			{type: "button", label: "New Input", value: "Save to favorites", name: "saveToFavorites"}
		]}
	]}
],

selectTemplateFormDataV2: [ // This is for the second version of CR!
  {type: "settings", position: "label-left", labelWidth: 90, inputWidth: 130},
    {type: "block", width: "auto", blockOffset: 20, list: [
      {type: "label", label: "<h2>Find the template you are looking for:</h2>", value: "", labelWidth: "600"},
      {type: "block", width: "auto", blockOffset: "0", list: [
        {type: "combo", value: "", name: "selectTemplate", inputWidth: "600"}
      ]},
      {type: "block", width: "auto", blockOffset: "0", list: [
        {type: "button", label: "New Input", value: "Go!", name: "genBtn"},
        {type: "newcolumn", offset: "50"},
        {type: "button", label: "New Input", value: "Save to favorites", name: "saveToFavorites"}
      ]}
    ]}
  ],
  

// SINGLE COMBO FOR TEMPLATE SELECTION FOR AWO PORTION 
selectAWOTemplateFormData: [
  {type: "settings", position: "label-left", labelWidth: 90, inputWidth: 130},
  {type: "block", width: "auto", blockOffset: 20, list: [
    {type: "label", label: "<h2>Find the template you are looking for:</h2>", value: "", labelWidth: "600"},
    {type: "block", width: "auto", blockOffset: "0", list: [
      {type: "combo", value: "", name: "awoSelectTemplate", inputWidth: "600"}
    ]},
    {type: "block", width: "auto", blockOffset: "0", list: [
      {type: "button", label: "New Input", value: "Go!", name: "genBtn"},
      {type: "newcolumn", offset: "50"},
      {type: "button", label: "New Input", value: "Save to favorites", name: "awoSaveToFavorites"}
    ]}
  ]}
],




/**
 * SAVE TEMPLATE TO YOUR FAVORITES
 * 		- This will allow the user save the selected template (the one selected from the
 * 		combo in selectTemplateFormData) as a favorite and give it a name. This form will
 * 		be attached to a popup object that will be attached the 'Save to favorites' btn
 * 		in 'selectTemplateFormData'
 * 	author:
 * 		Aaron Pillert
 */
saveToFavoritesFormData: [
	{type: "block", width: "auto", list:[
		{type: "input", label: "Create template name:", position: "label-top", name: "newTemplateName"},
		{type: "block", width: "auto", blockOffset: 0, list:[
			{type: "button", label: "New Input", value: "Save", name: "saveTemplateName"},
			{type: "newcolumn"},
			{type: "button", label: "New Input", value: "Cancel", name: "cancel"}
		]}
	]}
],

saveToFavoritesFormDataV2: [ // CR V2
	{type: "block", width: "auto", list:[
		{type: "input", label: "Create template name:", position: "label-top", name: "newTemplateName"},
		{type: "block", width: "auto", blockOffset: 0, list:[
			{type: "button", label: "New Input", value: "Save", name: "saveTemplateName"},
			{type: "newcolumn"},
			{type: "button", label: "New Input", value: "Cancel", name: "cancel"}
		]}
	]}
],

/**
 * SAVE TEMPLATE TO YOUR AWO FAVORITES
 */
awoSaveToFavoritesFormData: [
  {type: "block", width: "auto", list:[
    {type: "input", label: "Create template name:", position: "label-top", name: "awoNewTemplateName"},
    {type: "block", width: "auto", blockOffset: 0, list:[
      {type: "button", label: "New Input", value: "Save", name: "awoSaveTemplateName"},
      {type: "newcolumn"},
      {type: "button", label: "New Input", value: "Cancel", name: "awoCancel"}
    ]}
  ]}
],

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * TEMPLATE SELECTION COMBOS
 * 		- These are 4 combos (Location, Facility, Station, and Modifier respectively)
 * 		  that the user fills out to find their template for their station
 * 	author:
 * 		Megan Lindsey
 */
cashGenFormData: [ 
    {type: "block", width: "auto", blockOffset: 20, list: [

  {type: "label", label:"<h2>Find the Template you are looking for:</h2>"},
 
 ]},

{type: "block", width: "auto", blockOffset: 0, list: [

{type: "settings", position: "label-left", labelWidth: 90, inputWidth: 430},

{type: "block", width: "auto", blockOffset: 20, list: [
    {type: "combo", label: "Select Location:", value: "", tooltip: "Select Your PT Number", name: "selectPTForm", position: "label-left",connector: "/_apps/cashReceipts/connectors/pt_ConnectorCOMBO.php"}
  ]},

  {type: "block", width: "auto", blockOffset: 20, list: [
    {type: "combo", label: "Select Facility:", value: "", name: "selectFacilityForm", tooltip: "Select Your Facility ", position: "label-left"}
  ]},

  {type: "block", width: "auto", blockOffset: 20, list: [
    {type: "combo", label: "Select Station:", value: "", name: "selectStationForm", tooltip: "Select Your Station", position: "label-left"}
  ]},

  {type: "block", width: "auto", blockOffset: 20, list: [
    {type: "combo", label: "Select Shift:", value: "", name: "selectShiftForm", tooltip: "What Shift Are You On?", position: "label-left"}
  ]},

  {type: "block", width: "auto", blockOffset: 20, list: [
    {type: "combo", label: "Select Modifier", value: "", name: "selectModForm", position: "label-left"}
  ]},

  {type: "block", width: "auto", blockOffset: 20, list: [
   
  {type: "button", label: "New Input", value: "Go!", name: "genBtn"}
 
  ]},
   ]},

],




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * CASH RECEIPT FORM
 * 		- This is the actual form that the cashier fills out
 * 	author:
 * 		Megan Lindsey
 */
cashGenTempData: [ 

// Hide / Show Cash Log .........................................................................................................................................................................
{type: "block", width: "auto", name: "blockForBlock", blockOffset: 0, list: [

{type: "block", width: "auto", name: "showCLBLOCK", list: [

  {type:"button",  value:"Show Cash Log", hidden:true, name:"showCashLogBUTTON"},
  {type:"newcolumn"},
  {type: "button", value:"Hide Cash Log", name:"hideCashLogBUTTON"}, 
  
  ]},

// CASH LOG .........................................................................................................................................................................................

{type: "fieldset", width: "auto", label:"Cash Log", name:"clFIELDSET", blockOffset: 20, list: [

  {type: "block", width: "auto", list: [ 
  {type:"calendar", inputWidth:120, required:true, label:"<span style='font-weight:bold; color: #9099a2;'>Business Date:</span>", offsetLeft:20, position:"label-top", name:"effectDate"},
  {type:"newcolumn"},
  {type: "combo", inputWidth:100, required:true,  position:"label-top", label:"<span style='font-weight:bold; color: #9099a2; margin-top:10px;'>Shift:</span>", name:"shiftType", connector:"/_apps/cashReceipts/connectors/shift_ConnectorCOMBO.php"},

]},
// BILLS SECTION ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>BILLS</h2><u>"},

{type: "block", width: "auto", name:"100BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Hundreds:", value:"0", name:"hundreds"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>100.00 =</b>", name:"hundredsX"},
]},

{type: "block", width: "auto", name:"50BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Fifties:", value:"0", name:"fifties"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>50.00 =</b>", name:"fiftiesX"},
]},

{type: "block", width: "auto", name:"20BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Twenties:", value:"0", name:"twenties"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>20.00 =</b>", name:"twentiesX"},
]},

{type: "block", width: "auto", name:"10BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Tens:", value:"0", name:"tens"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>10.00 =</b>", name:"tensX"},
]},

{type: "block", width: "auto", name:"5BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Fives:", value:"0", name:"fives"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>5.00 =</b>", name:"fivesX"},
]},

{type: "block", width: "auto", name:"2BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Twos:", value:"0", name:"twos"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>2.00 =</b>", name:"twosX"},
]},
  
{type: "block", width: "auto", name:"2BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Ones:", value:"0", name:"ones"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>1.00 =</b>", name:"onesX"},
]},

// ROLLED COINS SECTION ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>ROLLED COINS</h2><u>"},

{type: "block", width: "auto", name:"QUARTERSBLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Roll Quarters:", value:"0", name:"rQuarters"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>10.00 =</b>", name:"rQuartersX"},
]},

{type: "block", width: "auto", name:"DIMESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Dimes:", value:"0", name:"rDimes"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>5.00 =</b>", name:"rDimesX"},
]},

{type: "block", width: "auto", name:"NICKLESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Nickles:", value:"0", name:"rNickles"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>2.00 =</b>", name:"rNicklesX"},
]},
  
{type: "block", width: "auto", name:"PENNIESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Pennies:", value:"0", name:"rPennies"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.50 =</b>", name:"rPenniesX"},
]},


// COINS ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>LOOSE COINS</h2><u>"},

{type: "block", width: "auto", name:"DOLLARBLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Dollar:", value:"0", name:"dollar"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>1.00 =</b>", name:"dollarX"},
]},

{type: "block", width: "auto", name:"HALFDOLLARBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Half-Dollar:", value:"0", name:"HDollar"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.50 =</b>", name:"HDollarX"},
]},

{type: "block", width: "auto", name:"QBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Quarters:", value:"0", name:"Quarters"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.25 =</b>", name:"QuartersX"},
]},

{type: "block", width: "auto", name:"DBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Dimes:",  value:"0",name:"Dimes"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.10 =</b>", name:"DimesX"},
]},

{type: "block", width: "auto", name:"NBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Nickles:", value:"0", name:"Nickles"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.05 =</b>", name:"NicklesX"},
]},

{type: "block", width: "auto", name:"PBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Pennies:", value:"0", name:"Pennies"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.01 =</b>", name:"PenniesX"},
]},


{type: "block", width: "auto", offsetLeft:110, name:"TOTALCASHCOUNTBLOCK", list: [ 

  {type: "input", inputWidth:100, labelWidth:150, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<span style='color:green;'><b>TOTAL CASH COUNT:</span></b>", name:"cashLogTOTAL"},

]}, 


{type: "block", width: "auto", offsetLeft:110, name:"CFBLOCK", list: [ 

  {type:"label", label:"<h2>(-)</h2>"},
  {type:"newcolumn"},
  {type:"input", label:"<span style='color:black;'><b>CHANGE FUND:</b></span>", offsetTop: 25, inputWidth: 100, labelWidth: 110, position:"label-left", disabled:true, name:"cf", numberFormat:"0,000.00", value:"0.00"},
 
]},

{type: "block", width: "auto", offsetLeft:160, name:"netCASHCOUNTBLOCK", list: [ 

  {type: "input", inputWidth:100, labelWidth:100, numberFormat:"0,000.00", disabled:true, value:"0.00", label:"<span style='color:green;'><b>NET CASH:</span></b>", name:"netCashTOTAL"},

]},


  {type: "block", width: "auto", name: "initialBLOCK", list: [
  {type:"label", offsetTop:40, label:"<h3>Initials:</h3>"},
  {type:"newcolumn"},
  {type: "input", inputWidth:100, offsetTop:55, labelWidth:50, name:"initialINPUT"}, 
  ]},

 ]}, // End of Cash Log Fieldset


// Begin balance block........................................................................................................................................

{type: "fieldset", width: "auto", label:"Register Balance", name: "blockBALANCE", list: [

//{type:"calendar", inputWidth:120, style:"margin-top:4px;", label:"<span style='font-weight:bold; color: #9099a2; margin-top:5px;'>Business Date:</span>", offsetLeft:20, position:"label-top", name:"effectDate"},

 {type: "block", width: "auto", name: "balBLOCK", list: [

// Beginning Balance ...........................................................................................................................................................................
    {type: "input", label:"<span style='color:green;'><b>Beginning Balance:</b></span>", disabled:true, position:"label-top", numberFormat:"0,000.00", value:"0.00", inputWidth:120, name:"beginBal"},
    {type:"newcolumn"},

// Return - Security Deposit Block........................................................................................................................................................................................
    {type: "input", position:"label-top", numberFormat:"0,000.00", value:"0.00", label:"<span style='font-weight:bold; color: orange;'>Return:</span>", inputWidth:100, name:"returnBal"},
    {type:"newcolumn"},

    {type: "input", position:"label-top", numberFormat:"0,000.00", value:"0.00", label:"<span style='font-weight:bold; color: orange; '>Security Deposit:</span>", inputWidth:110, name:"securityDep"},
    {type:"newcolumn"},

    {type: "input", position:"label-top", numberFormat:"0,000.00", value:"0.00", label:"<span style='font-weight:bold; color: orange; '>Over/Short Total Adj:</span>", inputWidth:110, name:"overShortTotalAdjDailyActivity"},
    {type:"newcolumn"},

    {type: "input", position:"label-top", numberFormat:"0,000.00", value:"0.00", label:"<span style='font-weight:bold; color: orange; '>Other Balance Adj.:</span>", inputWidth:115, name:"otherRegBalAdj"},
    {type:"newcolumn"},

    {type: "input", position:"label-top", numberFormat:"0,000.00", value:"0.00", label:"<span style='font-weight:bold; color: orange; '>Other Balance Adj.:</span>", inputWidth:115, name:"otherRegBalAdj2"},
    {type:"newcolumn"},

// End Balance Block .............................................................................................................................              

    {type: "input", inputWidth:120, label:"<span style='color:green;'><b>Ending Balance:</b></span>", position:"label-top", numberFormat:"0,000.00", value:"0.00", name:"endBal"},
    {type:"newcolumn"},

// Daily Activity Block ........................................................................................................................................................................
  {type:"newcolumn"},
  {type:"label", label:"<h2>=</h2>"},
  {type:"newcolumn"},
    {type: "input", inputWidth:120, label:"<span style='color:blue;'><b>Total Daily Activity:</b></span>", disabled:true, position:"label-top", numberFormat:"0,000.00", value:"0.00", name:"dailyTotalActivity"},

 ]},
  ]}, // End of balance Fieldset



{type: "block", width: "1000", name: "lineItemLabelBLOCK", blockOffset: 20, list: [
  
  {type: "label", name:"lineItemLABEL", position: "label-left", label: "<h2>SALE ITEMS:</h2>"}, 

  {type: "block", width: "auto", name: "saleItemLabels", offsetLeft:170, blockOffset: 0, list:[

    {type: "label", label:"<span style='color:black;'><b>Register Tape:</b></span>"},
    {type:"newcolumn"},
    {type: "label", offsetLeft:5, label:"<span style='color:black;'><b>Tax Exempt:</b></span>"},
    {type:"newcolumn"},
    {type: "label", offsetLeft:15, label:"<span style='color:black;'><b>Adjustment:</b></span>"},
    {type:"newcolumn"},
    {type: "label",  offsetLeft:10, label:"<span style='color:black;'><b>Adjustment Total:</b></span>"},

  ]},

]},

{type: "block", width: "auto", name: "cashierLineItemBlock", blockOffset: 0, list:[

  {type: "block", width: "auto", name:'cashierTempBlock', blockOffset: 20, list: [

  //###############################################################################
  // EMPTY BLOCK FOR TEMPLATE #####################################################
  // ##############################################################################

  ]}
]},

{type: "block", width: "auto", name:"blkforlblBLK", blockOffset: 20, list: [

{type: "block", width: "auto", blockOffset: 20, list: [

    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth: 100, labelWidth:470, hidden:true, label:"<span style='color:orange;'><b>Over/Short Total:</b></span>", position:"label-left", style:"margin-left:50px;", name:"overShortTotal"},

           ]},

// Total Sales > adds up all sales item total .........................................................................................................................................    
{type: "block", width: "auto", style:"border-style:solid; padding: 10px; border-color: #4abdac; margin-top:20px;", name:"totalSalesBlock", blockOffset: 0, list: [

    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth: 150, labelWidth:115, disabled:true, label:"<span style='color:black;'><b>TOTAL SALES:</b></span>", position:"label-left", style:"margin-left:50px;", name:"totalSales"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth:"100", labelWidth:"130", style:"", disabled:true, name:"taxExempt"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth:"100", labelWidth:"130", style:"", disabled:true, name:"finalSale"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth:"100", labelWidth:"130", disabled:true, name:"finalSaleAdj", style:""}
           ]},
  
// Taxes Section ......................................................................................................................................................................................


{type: "label", name:"salesTaxLBL", label:"<h2>SALES TAX:</h2>"},

{type: "block", width: "auto", name:"blockFortaxTypeBLOCK", blockOffset: 0, list: [

{type: "block", width: "auto", name:"taxTypeBLOCK", blockOffset: 0, list: [



    ]}

]},

// Final Tax Block...................................................................................................................................................................
{type: "block", width: "auto", name:"taxTypeBlockTOTALS ", style:"border-style:solid; padding: 10px; border-color: #4abdac; margin-top:20px;", blockOffset: 0, list: [

{type: "label", inputWidth: 100,  label:"<span style='color:black;'><b>TAX TOTALS:</b></span>", disabled:true},
{type:"newcolumn"},
{type: "input", inputWidth: 100,  name:"regTapeTaxTOTAL", disabled:true, offsetLeft:20, numberFormat:"0,000.00", value:"0.00"},
{type:"newcolumn"},
{type: "input", inputWidth: 100,  name:"taxAdjAdj", disabled:true, numberFormat:"0,000.00", value:"0.00"},
{type:"newcolumn"},
{type: "input", inputWidth: 100,  name:"taxAdjTotalTotal", disabled:true, numberFormat:"0,000.00", value:"0.00"},

]},

// Final Adj Block...................................................................................................................................................................
{type: "block", width: "auto", style:"border-style:solid; padding: 10px; border-color: #4abdac; margin-top:20px;", name:"finalAdjBlock", blockOffset: 0, list: [

{type: "input", inputWidth: 100, labelWidth:340, name:"adjSalesTaxesTOTAL", label:"<span style='color:black;'><b>TOTAL SALES + TOTAL TAXES:</b></span>",disabled:true, numberFormat:"0,000.00", value:"0.00"},
{type: "input", inputWidth: 100, labelWidth:340, name:"adjustmentsSalesTOTAL", label:"<span style='color:black;'><b>ADJUSTMENTS TOTAL:</b></span>", disabled:true, numberFormat:"0,000.00", value:"0.00"},
{type: "input", inputWidth: 100, labelWidth:340, name:"adjFINALTOTAL", label:"<span style='color:black;'><b>ADJUSTED SALES + TAXES:</b></span>", disabled:true, numberFormat:"0,000.00", value:"0.00"},

]},

// Total Payments Block.............................................................................................................................................................................         
{type: "block", width: "auto", name:"lblBLock", blockOffset: 0, list: [
    {type: "label", name:"totalChargeLBL", label: "<h2>TOTAL PAYMENTS:</h2>"}, 

{type: "block", name: "payMainBlock", list: [  

{type: "block", style:"background-color:#bfd8d2; width:100%;", list: [ 

//{type: "fieldset", label: "CASH & CHECK NET DEPOSIT", style: "width:100%;", list:[

// CASH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", name: "CASHBLOCK", list: [  

    {type:"label", labelWidth:100, position:"label-left", label:"<h4>CASH SALES PER REGISTER:</h4>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth: 120, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Cash In Register:</span>", disabled:true, position:"label-top", name:"cashLogTotalMIMIC", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"}, 
    {type:"input", inputWidth: 100, labelWidth: 110, label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", name:"CASH", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"cashDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
    {type:"newcolumn"},
    {type:"input", inputWidth: 150, labelWidth:150, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>", name:"cashADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 115, labelWidth:125, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", name:"cashSalesADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 155, labelWidth:160, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustments:</span>", name:"cashADJSHORT", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 110, labelWidth:130, position:"label-top", disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Cash Adj. Total:</span>", name:"cashADJTOTAL", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"button", offsetTop:20, name: "adjReasonCash", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]},

  ]}, // End of Cash fieldset

// CHECK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#fedcd2; width:100%;", list: [ 


{type: "block", offsetTop:15, name: "CHECKBLOCK", list: [ 
    {type:"label", labelWidth:100, position:"label-left", label:"<h3>CHECKS:</h3>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth:120, label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Total Checks:</span>", position:"label-top", name:"countSheetCK", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth:110, label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", name:"CK", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"checkDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
    {type:"newcolumn"},
    {type:"input", inputWidth: 150, labelWidth:150, position:"label-top", label:"<span style='font-weight:bold; color: orange;'>Payment Adjustment:</span>", name:"ckADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 115, labelWidth:125, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", name:"checkSalesADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 155, labelWidth:160, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustments:</span>", name:"checkADJSHORT", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"}, 
    {type:"input", inputWidth: 110, labelWidth:130, position:"label-top", disabled:true, label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Check Adj. Total:</span>", name:"checkADJTOTAL", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"button", offsetTop:20, name: "adjReasonCheck", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},



]},
// CHANGE FUND/CASH/NET DEPOSIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", name: "CASHTOTALBLOCK", style:"margin-left:950px;", list: [

{type:"input", inputWidth: 110, position:"label-top", labelWidth: 130, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Cash + Check Total :</span>", name:"totalCASH", numberFormat:"0,000.00", value:"0.00"},

  ]},

]}, // End of check fieldset    

// DEBIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#f2eee2; width:100%;", list: [ 

  {type: "block", name: "DEBITBLOCK", list: [
     {type:"label", labelWidth:100, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/debit.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", },
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:120, inputWidth: 100, name:"debitSettlementTape", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Settlement Tape:</span>"},  
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"DEBIT", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>"},  
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"debitDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
     {type:"newcolumn"},
     {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:150, inputWidth: 150,  name: "debitADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>"},
     {type:"newcolumn"},
     {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:125, inputWidth: 115,  name: "debitSalesADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>"},
     {type:"newcolumn"},
     {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:160, inputWidth: 155, label:"<span style='font-weight:bold; color: orange;'>Over/Short Adjustment:</span>", name: "debitSHORTADJ"},
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:100, inputWidth: 110, disabled:true, name:"totalDEBIT", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Debit Adj. Total:</span>"},  
     {type:"newcolumn"},
     {type:"button", offsetTop:20, name: "adjReasonDEBIT", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},
  
  ]}, 
  
        ]}, // End of DEBIT Fieldset

// AMEX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#caebf2; width:100%;", list: [ 

  {type: "block", name: "AMEXBLOCK", list: [
     {type:"label", labelWidth:100, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/AMEX.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", },
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:120, inputWidth: 100, name:"amxSettlementTape", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Settlement Tape:</span>"},  
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"AMEX", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>"},  
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"amxDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
     {type:"newcolumn"},
     {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:150, inputWidth: 150,  name: "amxADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>"},
     {type:"newcolumn"},
     {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:125, inputWidth: 115,  name: "amxSalesADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>"},
     {type:"newcolumn"},
     {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:160, inputWidth: 155, label:"<span style='font-weight:bold; color: orange;'>Over/Short Adjustment:</span>", name: "amxSHORTADJ"},
     {type:"newcolumn"},
     {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 110, name:"totalAMX", disabled:true, label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Amex Adj. Total:</span>"},  
     {type:"newcolumn"},
     {type:"button", offsetTop:20, name: "adjReasonAMEX", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},
  
  ]}, 
  
        ]}, // End of AMEX Fieldset        
  
        
// DISCOVER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#EFEFEF; width:100%;", list: [ 

  {type: "block", width: "auto", name:"DISCOVERBLOCK", blockOffset: 20, list: [
        {type:"label", labelWidth:100, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/Discover.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", numberFormat:"0,000.00", value:"0.00"},
        {type:"newcolumn"},
        {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:120, inputWidth: 100, name:"discSettlementTape", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Settlement Tape:</span>"},  
        {type:"newcolumn"},
        {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"DISC", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>"},  
        {type:"newcolumn"},
        {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"discDIFF", disabled:true, label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
        {type:"newcolumn"},
        {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:150, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>", name: "discADJ"},
        {type:"newcolumn"},
        {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:125, inputWidth: 110,  name: "discSalesADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>"},
        {type:"newcolumn"},
        {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:160, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustment:</span>", name: "discCASHSHORTADJ"},
        {type:"newcolumn"},
        {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:100, inputWidth: 110, disabled:true, label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Adj. Total:</span>", name: "discADJTOTAL"},
        {type:"newcolumn"},
        {type:"button", offsetTop:20, name: "adjReasonDISC", style:"margin-right:20px;", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},
  
        ]},

// MASTERCARD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", width: "auto", name:"MASTERCARDBLOCK", blockOffset: 20, list: [
  {type:"label", labelWidth:95, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/MasterCard2.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", numberFormat:"0,000.00", value:"0.00"},
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:120, inputWidth: 100, name:"masterSettlementTape"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, offsetLeft:15, name:"MAST"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, offsetLeft:7, disabled:true, name:"mastCDIFF"},  
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:150, inputWidth: 150, offsetLeft:6, name: "masterADJ"},
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:125, inputWidth: 110, name: "masterSALESADJ"},
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:160, inputWidth: 150, offsetLeft:10, name: "masterCASHSHORTADJ"},
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:100, inputWidth: 110, offsetLeft:10, disabled:true, name: "masterADJTOTAL"},
  {type:"newcolumn"},
  {type:"button", offsetTop:15, name: "adjReasonMC", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

  ]},

// VISA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", width: "auto", name:"VISABLOCK", blockOffset: 20, list: [
  {type:"label", labelWidth:95, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/VisaP.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left"},
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:120, inputWidth: 100, name:"visaSettlementTape"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, offsetLeft:15, name:"VISA"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, offsetLeft:7, disabled:true, name:"visaDIFF"},  
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:150, inputWidth: 150, offsetLeft:6, name: "visaADJ"},
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:125, inputWidth: 110, name: "visaSalesADJ"},
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:160, inputWidth: 150, offsetLeft:10, name: "visaCASHSHORTADJ"},
  {type:"newcolumn"},
  {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:100, inputWidth: 110, offsetLeft:10, disabled:true, name: "visaADJTOTAL"},
  {type:"newcolumn"},
  {type:"button", offsetTop:15, offsetLeft:4, name: "adjReasonVISA", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

  ]},

// TOTAL CRED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", width: "auto", name:"totalCredBLOCK", blockOffset: 20, list: [
  {type:"label", labelWidth:95, label:"<h3>Total Credit Cards:</h3>", position:"label-left", numberFormat:"0,000.00", value:"0.00"},
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:120, inputWidth: 100, disabled:true, name:"totalSettlementTape"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:110, inputWidth: 100, offsetLeft:15, disabled:true, name:"totalRegTape"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:110, inputWidth: 100, offsetLeft:7, disabled:true, name:"totalDIFF"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:150, inputWidth: 150, offsetLeft:6, disabled:true, name:"totalPayAdj"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:125, inputWidth: 110, disabled:true, name:"totalSalesAdj"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 160, labelWidth:150, offsetLeft:7, disabled:true, name:"totalOSAdj"},  
  {type:"newcolumn"},
  {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:100, inputWidth: 110, offsetLeft:5, disabled:true, name:"totalCREDIT"},  

      ]},
      
  ]}, // END of Credit Fieldset
        

// GIFT CRT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#8EAEBD; width:100%;", list: [ 

  {type: "block", width: "auto", name:"CRTBLOCK", blockOffset: 0, list: [
        {type:"label", labelWidth:95, label:"<img src='/dhtmlx/codebase/imgs/gc.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left"},
        {type:"newcolumn"},
        {type:"input", labelWidth:110, offsetLeft:23, inputWidth: 100, name:"GIFTUCRT", label:"<span style='font-weight:bold; margin-top:5px;'>Gift Certificate:</span>", position:"label-top", numberFormat:"0,000.00", value:"0.00"},
        {type:"newcolumn"},
        {type:"input", labelWidth:110, inputWidth: 100, offsetLeft:9, name:"UCRT", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", numberFormat:"0,000.00", value:"0.00"},
        {type:"newcolumn"},
        {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"crtDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
        {type:"newcolumn"},
        {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", name:"crtADJ", labelWidth:150, inputWidth:150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>" },
        {type:"newcolumn"},
        {type:"input", labelWidth:125, inputWidth: 110, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", position:"label-top", name:"salesCERTADJ", numberFormat:"0,000.00", value:"0.00"},
        {type:"newcolumn"},
        {type:"input", labelWidth:165, inputWidth: 160, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustment:</span>", position:"label-top", name:"giftCERTcsADJ", numberFormat:"0,000.00", value:"0.00"},
        {type:"newcolumn"},
        {type:"input", labelWidth:150, inputWidth: 110, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Gift Cert. Adj Total:</span>", position:"label-top", name:"totalADJGIFTCERT", numberFormat:"0,000.00", value:"0.00"},
        {type:"newcolumn"},
        {type:"button", offsetTop:20, name: "adjReasonCRT", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"}, // Adding Adjustment buttons to each line item.
  
  ]},
    
        ]}, // END of CRT fieldset
  

 ]}, // "payMainBlock" End
  
        ]}, // "lblBlock" End

// TOTAL PAYMENTS
{type: "block", width: "auto", style:"border-style:solid; padding: 10px; margin-left:30px; border-color: #4abdac; margin-top:20px;", name:"totalCHARGEBlock", blockOffset: 0, list: [

          {type:"input", inputWidth: 100, labelWidth:260, disabled:true, label:"<span style='font-weight:bold; color: black;'>TOTAL PAYMENTS:</span>", position:"label-left", name:"totalCHARGE", numberFormat:"0,000.00", value:"0.00"},

           ]},
]},

      ]}, 

// Back > Save > Print Button Block ..............................................................................................................................................................................................
{type: "block", width: "auto",name:'btnBLOCK', blockOffset: 50, list: [
{type: "button", value: "BACK", name: "backBtn"},
{type: "newcolumn"},
{type: "button", value: "SAVE", hidden:true, disabled:true, name: "savePRICESBtn"},
{type: "newcolumn"},
{type: "button", value: "SAVE & PRINT", disabled:true, name: "print"},
{type: "newcolumn"},
{type: "button", value: "UPDATE & SAVE", hidden:true, name: "updateBtn"}

]}

],

// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################

// ######################################################################### AWO FORM NUM:1 ############################################################################
// 
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################


awoCashGenTempData: [ 

// Hide / Show Cash Log .........................................................................................................................................................................
{type: "block", width: "auto", name: "blockForBlock", blockOffset: 0, list: [

{type: "block", width: "auto", name: "showCLBLOCK", list: [

  {type:"button",  value:"Show Cash Log", hidden:true, name:"showCashLogBUTTON"},
  {type:"newcolumn"},
  {type: "button", value:"Hide Cash Log", name:"hideCashLogBUTTON"}, 
  
  ]},

// CASH LOG .........................................................................................................................................................................................

{type: "fieldset", width: "auto", label:"Cash Log", name:"clFIELDSET", blockOffset: 20, list: [

  {type: "block", width: "auto", list: [ 
  {type:"calendar", inputWidth:120, required:true, label:"<span style='font-weight:bold; color: #9099a2;'>Business Date:</span>", offsetLeft:20, position:"label-top", name:"effectDate"},
  {type:"newcolumn"},
  {type: "combo", inputWidth:100, required:true,  position:"label-top", label:"<span style='font-weight:bold; color: #9099a2; margin-top:10px;'>Shift:</span>", name:"shiftType", connector:"/_apps/cashReceipts/connectors/shift_ConnectorCOMBO.php"},

]},
// BILLS SECTION ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>BILLS</h2><u>"},

{type: "block", width: "auto", name:"100BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Hundreds:", value:"0", name:"hundreds"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>100.00 =</b>", name:"hundredsX"},
]},

{type: "block", width: "auto", name:"50BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Fifties:", value:"0", name:"fifties"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>50.00 =</b>", name:"fiftiesX"},
]},

{type: "block", width: "auto", name:"20BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Twenties:", value:"0", name:"twenties"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>20.00 =</b>", name:"twentiesX"},
]},

{type: "block", width: "auto", name:"10BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Tens:", value:"0", name:"tens"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>10.00 =</b>", name:"tensX"},
]},

{type: "block", width: "auto", name:"5BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Fives:", value:"0", name:"fives"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>5.00 =</b>", name:"fivesX"},
]},

{type: "block", width: "auto", name:"2BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Twos:", value:"0", name:"twos"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>2.00 =</b>", name:"twosX"},
]},
  
{type: "block", width: "auto", name:"2BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Ones:", value:"0", name:"ones"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>1.00 =</b>", name:"onesX"},
]},

// ROLLED COINS SECTION ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>ROLLED COINS</h2><u>"},

{type: "block", width: "auto", name:"QUARTERSBLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Roll Quarters:", value:"0", name:"rQuarters"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>10.00 =</b>", name:"rQuartersX"},
]},

{type: "block", width: "auto", name:"DIMESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Dimes:", value:"0", name:"rDimes"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>5.00 =</b>", name:"rDimesX"},
]},

{type: "block", width: "auto", name:"NICKLESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Nickles:", value:"0", name:"rNickles"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>2.00 =</b>", name:"rNicklesX"},
]},
  
{type: "block", width: "auto", name:"PENNIESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Pennies:", value:"0", name:"rPennies"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.50 =</b>", name:"rPenniesX"},
]},


// COINS ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>LOOSE COINS</h2><u>"},

{type: "block", width: "auto", name:"DOLLARBLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Dollar:", value:"0", name:"dollar"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>1.00 =</b>", name:"dollarX"},
]},

{type: "block", width: "auto", name:"HALFDOLLARBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Half-Dollar:", value:"0", name:"HDollar"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.50 =</b>", name:"HDollarX"},
]},

{type: "block", width: "auto", name:"QBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Quarters:", value:"0", name:"Quarters"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.25 =</b>", name:"QuartersX"},
]},

{type: "block", width: "auto", name:"DBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Dimes:",  value:"0",name:"Dimes"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.10 =</b>", name:"DimesX"},
]},

{type: "block", width: "auto", name:"NBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Nickles:", value:"0", name:"Nickles"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.05 =</b>", name:"NicklesX"},
]},

{type: "block", width: "auto", name:"PBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Pennies:", value:"0", name:"Pennies"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.01 =</b>", name:"PenniesX"},
]},


{type: "block", width: "auto", offsetLeft:110, name:"TOTALCASHCOUNTBLOCK", list: [ 

  {type: "input", inputWidth:100, labelWidth:150, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<span style='color:green;'><b>TOTAL CASH COUNT:</span></b>", name:"cashLogTOTAL"},

]}, 


{type: "block", width: "auto", offsetLeft:110, name:"CFBLOCK", list: [ 

  {type:"label", label:"<h2>(-)</h2>"},
  {type:"newcolumn"},
  {type:"input", label:"<span style='color:black;'><b>CHANGE FUND:</b></span>", offsetTop: 25, disabled:true, inputWidth: 100, labelWidth: 110, position:"label-left", name:"cf", numberFormat:"0,000.00", value:"0.00"},
 
]},

// NET CASH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


{type: "block", width: "auto", offsetLeft:160, name:"netCASHCOUNTBLOCK", list: [ 

  {type: "input", inputWidth:100, labelWidth:100, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<span style='color:green;'><b>NET CASH:</span></b>", name:"netCashTOTAL"},

]},

// INIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  {type: "block", width: "auto", name: "initialBLOCK", list: [
  {type:"label", offsetTop:40, label:"<h3>Initials:</h3>"},
  {type:"newcolumn"},
  {type: "input", inputWidth:100, offsetTop:55, labelWidth:50, name:"initialINPUT"}, 
  ]},

 ]}, // End of Cash Log Fieldset

// CASH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#bfd8d2; width:100%;", list: [ 

{type: "block", name: "CASHBLOCK", list: [  

    {type:"label", labelWidth:180, position:"label-left", label:"<h2>CASH SALES PER REGISTER:</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 130, labelWidth: 150, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>CASH IN REGISTER:</span>", position:"label-top", name:"cashLogTotalMIMIC", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"}, 
    {type:"input", inputWidth: 130, labelWidth: 150, label:"<span style='font-weight:bold; margin-top:5px;'>Register Cash Sales:</span>", position:"label-top", name:"CASH", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"cashDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
    {type:"newcolumn"},
    {type:"input", inputWidth: 130, labelWidth:150, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>", name:"cashADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, offsetTop:25, inputWidth:15, name:"bStateCash"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 120, labelWidth:135, offsetLeft:10, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", name:"cashSalesADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, offsetTop:25, inputWidth:15, name:"bStateCash3"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 150, offsetLeft:10,  labelWidth:180, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustments:</span>", name:"cashADJSHORT", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, inputWidth:15, offsetTop:25, name:"bStateCash2"},
    {type:"newcolumn"},
    {type:"label", offsetTop:5, label:"<h2>=</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 110, labelWidth:130, position:"label-top", disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>CASH ADJ. TOTAL:</span>", name:"cashADJTOTAL", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"button", offsetTop:20, name: "adjReasonCash", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]},

  ]}, // End of Cash fieldset

// CHECK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#fedcd2; width:100%;", list: [ 

{type: "block", offsetTop:15, name: "CHECKBLOCK", list: [ 
    {type:"label", labelWidth:180, position:"label-left", label:"<h2>CHECKS:</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth:100, label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Total Checks:</span>", position:"label-top", name:"countSheetCK", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth:100, label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", name:"CK", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"checkDIFF", disabled:true, label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
    {type:"newcolumn"},
    {type:"input", inputWidth: 120, labelWidth:150, position:"label-top", label:"<span style='font-weight:bold; color: orange;'>Payment Adjustment:</span>", name:"ckADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, inputWidth:15, offsetTop:25, name:"bStateCheck"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 120, labelWidth:140, offsetLeft:10, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", name:"checkSalesADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, name:"bStateCheck3"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 150, labelWidth:170, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustments:</span>", name:"checkADJSHORT", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, offsetLeft:20, inputWidth:15, offsetTop:25, name:"bStateCheck2"},
    {type:"newcolumn"},
    {type:"label", offsetTop:5, label:"<h2>=</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 110, labelWidth:130, position:"label-top", disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>CHECK ADJ. TOTAL:</span>", name:"checkADJTOTAL", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"button", offsetTop:20, name: "adjReasonCheck", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]},

// CHANGE FUND/CASH/NET DEPOSIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", name: "CASHTOTALBLOCK", style:"margin-left:1180px;", list: [

{type:"input", inputWidth: 110, position:"label-top", labelWidth: 130, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>TOTAL CASH + CHECK:</span>", name:"totalCASH", numberFormat:"0,000.00", value:"0.00"},

  ]},

]}, // End of check fieldset  


// GIFT CRT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{type: "block", style:"background-color:#8EAEBD; width:100%;", list: [ 

{type: "block", width: "auto", name:"CRTBLOCK", blockOffset: 0, list: [
      {type:"label", labelWidth:180, label:"<h2>GIFT CERTIFICATE:</h2>", position:"label-left"},
      {type:"newcolumn"},
      {type:"input", labelWidth:140, inputWidth: 130, name:"GIFTUCRT", label:"<span style='font-weight:bold; margin-top:5px;'>Gift Certificate:</span>", position:"label-top", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", labelWidth:100, inputWidth: 100, name:"UCRT", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"crtDIFF", disabled:true, label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", name:"crtADJ", labelWidth:170, inputWidth:160, note: {text: "Total amount from your gift certificates, not register."}, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>" },
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:25, inputWidth:10, name:"bStateCRT"},
      {type:"newcolumn"},
      {type:"input", labelWidth:150, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", position:"label-top", name:"salesCERTADJ", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:25, inputWidth:10, name:"bStateCRT2"},
      {type:"newcolumn"},
      {type:"input", labelWidth:165, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustment:</span>", position:"label-top", name:"giftCERTcsADJ", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:25, inputWidth:10, name:"bStateCRT3"},
      {type:"newcolumn"},
      {type:"input", labelWidth:150, inputWidth: 150, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>GIFT CERT ADJ TOTAL:</span>", position:"label-top", name:"totalADJGIFTCERT", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"button", offsetTop:20, name: "adjReasonCRT", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"}, // Adding Adjustment buttons to each line item.

]},
  
      ]}, // END of CRT fieldset


]},

// Back > Save > Print Button Block ..............................................................................................................................................................................................
{type: "block", width: "auto",name:'btnBLOCK', blockOffset: 20, list: [
{type: "button", value: "BACK", name: "backBtn1"},
{type: "newcolumn"},
{type: "button", value: "SAVE", hidden:true, disabled:true, name: "savePRICESBtn"},
{type: "newcolumn"},
{type: "button", value: "SAVE & PRINT", disabled:true, name: "print"},
{type: "newcolumn"},
{type: "button", value: "UPDATE & SAVE", hidden:true, name: "updateBtn"}

]}





], // END

// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################

// ######################################################################### AWO FORM NUM:2 ############################################################################
// 
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################

awoSecondFormCashGenTempData: [ 

// Hide / Show Cash Log .........................................................................................................................................................................
{type: "block", width: "auto", name: "blockForBlock", blockOffset: 0, list: [

{type: "block", width: "auto", name: "showCLBLOCK", list: [

  {type:"button",  value:"Show Cash Log", hidden:true, name:"showCashLogBUTTON"},
  {type:"newcolumn"},
  {type: "button", value:"Hide Cash Log", name:"hideCashLogBUTTON"}, 
  
  ]},

// CASH LOG .........................................................................................................................................................................................

{type: "fieldset", width: "auto", label:"Cash Log", name:"clFIELDSET", disabled:true, blockOffset: 20, list: [

  {type: "block", width: "auto", list: [ 
  {type:"calendar", inputWidth:120, required:true, label:"<span style='font-weight:bold; color: #9099a2;'>Business Date:</span>", offsetLeft:20, position:"label-top", name:"effectDate"},
  {type:"newcolumn"},
  {type: "combo", inputWidth:100, required:true,  position:"label-top", label:"<span style='font-weight:bold; color: #9099a2; margin-top:10px;'>Shift:</span>", name:"shiftType", connector:"/_apps/cashReceipts/connectors/shift_ConnectorCOMBO.php"},

]},
// BILLS SECTION ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>BILLS</h2><u>"},

{type: "block", width: "auto", name:"100BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Hundreds:", value:"0", name:"hundreds"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>100.00 =</b>", name:"hundredsX"},
]},

{type: "block", width: "auto", name:"50BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Fifties:", value:"0", name:"fifties"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>50.00 =</b>", name:"fiftiesX"},
]},

{type: "block", width: "auto", name:"20BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Twenties:", value:"0", name:"twenties"},
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>20.00 =</b>", name:"twentiesX"},
]},

{type: "block", width: "auto", name:"10BLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Tens:", value:"0", name:"tens"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>10.00 =</b>", name:"tensX"},
]},

{type: "block", width: "auto", name:"5BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Fives:", value:"0", name:"fives"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>5.00 =</b>", name:"fivesX"},
]},

{type: "block", width: "auto", name:"2BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Twos:", value:"0", name:"twos"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>2.00 =</b>", name:"twosX"},
]},
  
{type: "block", width: "auto", name:"2BLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Ones:", value:"0", name:"ones"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>1.00 =</b>", name:"onesX"},
]},

// ROLLED COINS SECTION ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>ROLLED COINS</h2><u>"},

{type: "block", width: "auto", name:"QUARTERSBLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Roll Quarters:", value:"0", name:"rQuarters"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>10.00 =</b>", name:"rQuartersX"},
]},

{type: "block", width: "auto", name:"DIMESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Dimes:", value:"0", name:"rDimes"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>5.00 =</b>", name:"rDimesX"},
]},

{type: "block", width: "auto", name:"NICKLESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Nickles:", value:"0", name:"rNickles"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>2.00 =</b>", name:"rNicklesX"},
]},
  
{type: "block", width: "auto", name:"PENNIESBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Roll Pennies:", value:"0", name:"rPennies"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.50 =</b>", name:"rPenniesX"},
]},


// COINS ..................................................................................................................................................................................................

{type:"label", label:"<u><h2>LOOSE COINS</h2><u>"},

{type: "block", width: "auto", name:"DOLLARBLOCK", list: [ 
  {type: "input", inputWidth:100, offsetTop:20, labelWidth:70, label:"Dollar:", value:"0", name:"dollar"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>1.00 =</b>", name:"dollarX"},
]},

{type: "block", width: "auto", name:"HALFDOLLARBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Half-Dollar:", value:"0", name:"HDollar"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.50 =</b>", name:"HDollarX"},
]},

{type: "block", width: "auto", name:"QBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Quarters:", value:"0", name:"Quarters"},  
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.25 =</b>", name:"QuartersX"},
]},

{type: "block", width: "auto", name:"DBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Dimes:",  value:"0",name:"Dimes"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.10 =</b>", name:"DimesX"},
]},

{type: "block", width: "auto", name:"NBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Nickles:", value:"0", name:"Nickles"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.05 =</b>", name:"NicklesX"},
]},

{type: "block", width: "auto", name:"PBLOCK", list: [ 
  {type: "input", inputWidth:100, labelWidth:70, offsetTop:20, label:"Pennies:", value:"0", name:"Pennies"}, 
  {type:"newcolumn"},
  {type:"label", label:"<h3>X</h3>"},
  {type:"newcolumn"},
  {type: "input", offsetTop:20, inputWidth:100, labelWidth:70, numberFormat:"0,000.00", value:"0.00", disabled:true, label:"<b>0.01 =</b>", name:"PenniesX"},
]},


{type: "block", width: "auto", offsetLeft:110, name:"TOTALCASHCOUNTBLOCK", list: [ 

  {type: "input", inputWidth:100, labelWidth:150, numberFormat:"0,000.00", value:"0.00", label:"<span style='color:green;'><b>TOTAL CASH COUNT:</span></b>", name:"cashLogTOTAL"},

]}, 


{type: "block", width: "auto", offsetLeft:110, name:"CFBLOCK", list: [ 

  {type:"label", label:"<h2>(-)</h2>"},
  {type:"newcolumn"},
  {type:"input", label:"CHANGE FUND:", offsetTop: 25, inputWidth: 100, labelWidth: 110, position:"label-left", name:"cf", numberFormat:"0,000.00", value:"0.00"},
 
]},

{type: "block", width: "auto", offsetLeft:160, name:"netCASHCOUNTBLOCK", list: [ 

  {type: "input", inputWidth:100, labelWidth:100, numberFormat:"0,000.00", value:"0.00", label:"<span style='color:green;'><b>NET CASH:</span></b>", name:"netCashTOTAL"},

]},


  {type: "block", width: "auto", name: "initialBLOCK", list: [
  {type:"label", offsetTop:40, label:"<h3>Initials:</h3>"},
  {type:"newcolumn"},
  {type: "input", inputWidth:100, offsetTop:55, labelWidth:50, name:"initialINPUT"}, 
  ]},

 ]}, // End of Cash Log Fieldset

{type: "block", width: "1000", name: "lineItemLabelBLOCK", blockOffset: 20, list: [
  
  {type: "label", name:"lineItemLABEL", position: "label-left", label: "<h2>SALE ITEMS:</h2>"}, 

]},

{type: "block", width: "auto", name: "cashierLineItemBlock", blockOffset: 0, list:[
  {type: "block", width: "auto", name:'cashierTempBlock', blockOffset: 20, list: [

  //###############################################################################
  // EMPTY BLOCK FOR TEMPLATE #####################################################
  // ##############################################################################

  ]}
]},

{type: "block", width: "auto", name:"blkforlblBLK", blockOffset: 20, list: [

{type: "block", width: "auto", blockOffset: 20, list: [

    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth: 100, labelWidth:500, hidden:true, label:"<span style='color:orange;'><b>Over/Short Total:</b></span>", position:"label-left", style:"margin-left:50px;", name:"overShortTotal"},

           ]},

// Total Sales > adds up all sales item total .........................................................................................................................................    
{type: "block", width: "auto", style:"border-style:solid; padding: 10px; border-color: #4abdac; margin-top:20px;", name:"totalSalesBlock", blockOffset: 0, list: [

    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth: 150, labelWidth:115, label:"<b>TOTAL SALES:</b>", position:"label-left", style:"margin-left:50px;", name:"totalSales"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth:"100", labelWidth:"130", style:"", name:"taxExempt"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth:"100", labelWidth:"130", style:"", name:"finalSale"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", inputWidth:"100", labelWidth:"130", name:"finalSaleAdj", style:""}
           ]},
  
// Taxes Section ......................................................................................................................................................................................
{type: "label", name:"salesTaxLBL", label:"<h2>SALES TAX:</h2>"},

{type: "block", width: "auto", name:"blockFortaxTypeBLOCK", blockOffset: 0, list: [

{type: "block", width: "auto", name:"taxTypeBLOCK", blockOffset: 0, list: [



    ]}

]},

// Final Tax Block...................................................................................................................................................................
{type: "block", width: "auto", name:"taxTypeBlockTOTALS ", style:"border-style:solid; padding: 10px; border-color: #4abdac; margin-top:20px;", blockOffset: 0, list: [

{type: "label", inputWidth: 100,  label:"<b>TAX TOTALS:</b>"},
{type:"newcolumn"},
{type: "input", inputWidth: 100,  name:"regTapeTaxTOTAL", offsetLeft:20, numberFormat:"0,000.00", value:"0.00"},
{type:"newcolumn"},
{type: "input", inputWidth: 100,  name:"taxAdjAdj",  numberFormat:"0,000.00", value:"0.00"},
{type:"newcolumn"},
{type: "input", inputWidth: 100,  name:"taxAdjTotalTotal",  numberFormat:"0,000.00", value:"0.00"},

]},

// Final Adj Block...................................................................................................................................................................
{type: "block", width: "auto", style:"border-style:solid; padding: 10px; border-color: #4abdac; margin-top:20px;", name:"finalAdjBlock", blockOffset: 0, list: [

{type: "input", inputWidth: 100, labelWidth:340, name:"adjSalesTaxesTOTAL", label:"<b>TOTAL SALES + TOTAL TAXES:</b>", numberFormat:"0,000.00", value:"0.00"},
{type: "input", inputWidth: 100, labelWidth:340, name:"adjustmentsSalesTOTAL", label:"<b>ADJUSTMENTS TOTAL:</b>", numberFormat:"0,000.00", value:"0.00"},
{type: "input", inputWidth: 100, labelWidth:340, name:"adjFINALTOTAL", label:"<b>ADJUSTED SALES + TAXES:</b>", numberFormat:"0,000.00", value:"0.00"},

]},

// Total Payments Block.............................................................................................................................................................................         
{type: "block", width: "auto", name:"lblBLock", blockOffset: 0, list: [
    {type: "label", name:"totalChargeLBL", label: "<h2>TOTAL PAYMENTS:</h2>"}, 

{type: "block", name: "payMainBlock", list: [  

// CASH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#bfd8d2; width:100%;", list: [ 

{type: "block", name: "CASHBLOCK", disabled:true, list: [  

    {type:"label", labelWidth:180, position:"label-left", label:"<h2>CASH SALES PER REGISTER:</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 130, labelWidth: 150, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>CASH IN REGISTER:</span>", position:"label-top", name:"cashLogTotalMIMIC", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"}, 
    {type:"input", inputWidth: 130, labelWidth: 150, label:"<span style='font-weight:bold; margin-top:5px;'>Register Cash Sales:</span>", position:"label-top", name:"CASH", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"cashDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
    {type:"newcolumn"},
    {type:"input", inputWidth: 130, labelWidth:150, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>", name:"cashADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, offsetTop:25, inputWidth:15, name:"bStateCash"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 120, labelWidth:135, offsetLeft:10, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", name:"cashSalesADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, offsetTop:25, inputWidth:15, name:"bStateCash3"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 150, offsetLeft:10,  labelWidth:180, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustments:</span>", name:"cashADJSHORT", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, inputWidth:15, offsetTop:25, name:"bStateCash2"},
    {type:"newcolumn"},
    {type:"label", offsetTop:5, label:"<h2>=</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 110, labelWidth:130, position:"label-top", label:"<span style='font-weight:bold; color: green; margin-top:5px;'>CASH ADJ. TOTAL:</span>", name:"cashADJTOTAL", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"button", offsetTop:20, name: "adjReasonCash", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]},

  ]}, // End of Cash fieldset

// CHECK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#fedcd2; width:100%;", list: [ 

{type: "block", offsetTop:15, name: "CHECKBLOCK", disabled:true, list: [ 
    {type:"label", labelWidth:180, position:"label-left", label:"<h2>CHECKS:</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth:100, label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Total Checks:</span>", position:"label-top", name:"countSheetCK", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 100, labelWidth:100, label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", name:"CK", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"checkDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
    {type:"newcolumn"},
    {type:"input", inputWidth: 120, labelWidth:150, position:"label-top", label:"<span style='font-weight:bold; color: orange;'>Payment Adjustment:</span>", name:"ckADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, inputWidth:15, offsetTop:25, name:"bStateCheck"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 120, labelWidth:140, offsetLeft:10, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", name:"checkSalesADJ", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, name:"bStateCheck3"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 150, labelWidth:170, position:"label-top", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustments:</span>", name:"checkADJSHORT", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type: "btn2state", checked:true, offsetLeft:20, inputWidth:15, offsetTop:25, name:"bStateCheck2"},
    {type:"newcolumn"},
    {type:"label", offsetTop:5, label:"<h2>=</h2>"},
    {type:"newcolumn"},
    {type:"input", inputWidth: 110, labelWidth:130, position:"label-top", label:"<span style='font-weight:bold; color: green; margin-top:5px;'>CHECK ADJ. TOTAL:</span>", name:"checkADJTOTAL", numberFormat:"0,000.00", value:"0.00"},
    {type:"newcolumn"},
    {type:"button", offsetTop:20, name: "adjReasonCheck", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]},

// CHANGE FUND/CASH/NET DEPOSIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", name: "CASHTOTALBLOCK", style:"margin-left:1180px;", list: [

{type:"input", inputWidth: 110, position:"label-top", labelWidth: 130, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>TOTAL CASH + CHECK:</span>", name:"totalCASH", numberFormat:"0,000.00", value:"0.00"},

  ]},

]}, // End of check fieldset  

// AMEX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#f2eee2; width:100%;", list: [ 

{type: "block", name: "DEBITBLOCK", list: [
   {type:"label", labelWidth:100, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/debit.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", },
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:120, inputWidth: 100, name:"debitSettlementTape", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Settlement Tape:</span>"},  
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"DEBIT", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>"},  
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"debitDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
   {type:"newcolumn"},
   {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:150, inputWidth: 150,  name: "debitADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>"},
   {type:"newcolumn"},
   {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateDEBIT"},
   {type:"newcolumn"},
   {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:125, inputWidth: 115,  name: "debitSalesADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>"},
   {type:"newcolumn"},
   {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateDEBIT3"},
   {type:"newcolumn"},
   {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:160, inputWidth: 155, label:"<span style='font-weight:bold; color: orange;'>Over/Short Adjustment:</span>", name: "debitSHORTADJ"},
   {type:"newcolumn"},
   {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateDEBIT2"},
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:100, inputWidth: 110, name:"totalDEBIT", disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Debit Adj. Total:</span>"},  
   {type:"newcolumn"},
   {type:"button", offsetTop:20, name: "adjReasonDEBIT", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]}, 

      ]}, // End of DEBIT Fieldset

// AMEX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#caebf2; width:100%;", list: [ 

{type: "block", name: "AMEXBLOCK", list: [
   {type:"label", labelWidth:100, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/AMEX.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", },
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:120, inputWidth: 100, name:"amxSettlementTape", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Settlement Tape:</span>"},  
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"AMEX", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>"},  
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true,  name:"amxDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
   {type:"newcolumn"},
   {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:150, inputWidth: 150,  name: "amxADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>"},
   {type:"newcolumn"},
   {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateAMEX"},
   {type:"newcolumn"},
   {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:125, inputWidth: 115,  name: "amxSalesADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>"},
   {type:"newcolumn"},
   {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateAMEX3"},
   {type:"newcolumn"},
   {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:160, inputWidth: 155, label:"<span style='font-weight:bold; color: orange;'>Over/Short Adjustment:</span>", name: "amxSHORTADJ"},
   {type:"newcolumn"},
   {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateAMEX2"},
   {type:"newcolumn"},
   {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:100, inputWidth: 110, name:"totalAMX", disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Amex Adj. Total:</span>"},  
   {type:"newcolumn"},
   {type:"button", offsetTop:20, name: "adjReasonAMEX", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

]}, 

      ]}, // End of AMEX Fieldset
        
// DISCOVER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#EFEFEF; width:100%;", list: [ 

{type: "block", width: "auto", name:"DISCOVERBLOCK", blockOffset: 20, list: [
      {type:"label", labelWidth:100, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/Discover.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:120, inputWidth: 100, name:"discSettlementTape", label:"<span style='font-weight:bold; color: blue; margin-top:5px;'>Settlement Tape:</span>"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"DISC", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, disabled:true, name:"discDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:150, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>", name: "discADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, name:"bStateDISC"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:125, inputWidth: 110,  name: "discSalesADJ", label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, labelWidth:0, name:"bStateDISC3"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:160, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustment:</span>", name: "discCASHSHORTADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, inputWidth:20, offsetTop:25, name:"bStateDISC2"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:100, inputWidth: 110, disabled:true, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>Adj. Total:</span>", name: "discADJTOTAL"},
      {type:"newcolumn"},
      {type:"button", offsetTop:20, name: "adjReasonDISC", style:"margin-right:20px;", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

      ]},

// MASTERCARD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", width: "auto", name:"MASTERCARDBLOCK", blockOffset: 20, list: [
      {type:"label", labelWidth:95, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/MasterCard2.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, name:"masterSettlementTape"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, offsetLeft:15, name:"MAST"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, disabled:true, offsetLeft:7, name:"mastCDIFF"},  
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:150, inputWidth: 150, offsetLeft:6, name: "masterADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:20, inputWidth:18, name:"bStateMC"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:130, inputWidth: 110, name: "masterSALESADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:20, offsetLeft:15, inputWidth:15, name:"bStateMC3"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:150, inputWidth: 150,  name: "masterCASHSHORTADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:20, offsetLeft:10, inputWidth:12, name:"bStateMC2"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, offsetLeft:5, inputWidth: 110, disabled:true,  name: "masterADJTOTAL"},
      {type:"newcolumn"},
      {type:"button", offsetTop:15, name: "adjReasonMC", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

      ]},

// VISA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", width: "auto", name:"VISABLOCK", blockOffset: 20, list: [
      {type:"label", labelWidth:95, label:"<img src='/dhtmlx/codebase/imgs/PaymentTypes/PNG/01Color/64/VisaP.png' align='left'</img><img style='margin: 0px 50px 0px 0px; max-width:100%; max-height:100%;'>", position:"label-left"},
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, name:"visaSettlementTape"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:110, inputWidth: 100, offsetLeft:15, name:"VISA"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:100, inputWidth: 100, disabled:true, offsetLeft:7, name:"visaDIFF"},  
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:150, inputWidth: 150, offsetLeft:6, name: "visaADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:20, inputWidth:18, name:"bStateVISA"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:130, inputWidth: 110, name: "visaSalesADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:20, offsetLeft:15, inputWidth:15, name:"bStateVISA3"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, labelWidth:150, inputWidth: 150, name: "visaCASHSHORTADJ"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:20, offsetLeft:5, inputWidth:12, name:"bStateVISA2"},
      {type:"newcolumn"},
      {type: "input", numberFormat:"0,000.00", value:"0.00", offsetTop:20, offsetLeft:5, labelWidth:110, disabled:true, inputWidth: 110, name: "visaADJTOTAL"},
      {type:"newcolumn"},
      {type:"button", offsetTop:15, offsetLeft:4, name: "adjReasonVISA", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"},

      ]},

// TOTAL CRED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", width: "auto", name:"totalCredBLOCK", blockOffset: 20, list: [

      {type:"label", labelWidth:95, label:"<h2>TOTAL:</h2>", position:"label-left", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, labelWidth:110, inputWidth: 100, disabled:true, name:"totalSettlementTape"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 100, offsetLeft:15, disabled:true, name:"totalRegTape"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 100, offsetLeft:7, disabled:true, name:"totalDIFF"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 150, offsetLeft:6, disabled:true, name:"totalPayAdj"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 110, offsetLeft:40, disabled:true, name:"totalSalesAdj"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 150, offsetLeft:48, disabled:true, name:"totalOSAdj"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", offsetTop:25, inputWidth: 110,  offsetLeft:48, disabled:true, name:"totalCREDIT"},  

      ]},
      
  ]}, // END of Credit Fieldset
        
// GIFT CRT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{type: "block", style:"background-color:#CAEBF2; width:100%;", list: [ 

{type: "block", width: "auto", name:"CRTBLOCK", blockOffset: 0, disabled:true, list: [
      {type:"label", labelWidth:180, label:"<h2>GIFT CERTIFICATE:</h2>", position:"label-left"},
      {type:"newcolumn"},
      {type:"input", labelWidth:140, inputWidth: 130, name:"GIFTUCRT", label:"<span style='font-weight:bold; margin-top:5px;'>Gift Certificate:</span>", position:"label-top", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", labelWidth:100, inputWidth: 100, name:"UCRT", label:"<span style='font-weight:bold; margin-top:5px;'>Register Tape:</span>", position:"label-top", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", labelWidth:110, inputWidth: 100, name:"crtDIFF", label:"<span style='font-weight:bold; color: red; margin-top:5px;'>Difference:</span>"},  
      {type:"newcolumn"},
      {type:"input", numberFormat:"0,000.00", value:"0.00", position:"label-top", name:"crtADJ", labelWidth:170, inputWidth:160, note: {text: "Total amount from your gift certificates, not register."}, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Payment Adjustment:</span>" },
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:25, inputWidth:10, name:"bStateCRT"},
      {type:"newcolumn"},
      {type:"input", labelWidth:150, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Sales Adjustment:</span>", position:"label-top", name:"salesCERTADJ", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:25, inputWidth:10, name:"bStateCRT2"},
      {type:"newcolumn"},
      {type:"input", labelWidth:165, inputWidth: 150, label:"<span style='font-weight:bold; color: orange; margin-top:5px;'>Over/Short Adjustment:</span>", position:"label-top", name:"giftCERTcsADJ", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type: "btn2state", checked:true, offsetTop:25, inputWidth:10, name:"bStateCRT3"},
      {type:"newcolumn"},
      {type:"input", labelWidth:150, inputWidth: 150, label:"<span style='font-weight:bold; color: green; margin-top:5px;'>GIFT CERT ADJ TOTAL:</span>", position:"label-top", name:"totalADJGIFTCERT", numberFormat:"0,000.00", value:"0.00"},
      {type:"newcolumn"},
      {type:"button", offsetTop:20, name: "adjReasonCRT", hidden:true, value:"<img src='/dhtmlx/codebase/imgs/alert.png' style='position:absolute;width:18px;height:18px;left:12px;margin-top:2px'>", position:"absolute"}, // Adding Adjustment buttons to each line item.

]},

  ]},
  
      ]}, // END of CRT fieldset

]}, 

// TOTAL PAYMENTS
{type: "block", width: "auto", style:"border-style:solid; padding: 10px; margin-left:30px; border-color: #4abdac; margin-top:20px;", name:"totalCHARGEBlock", blockOffset: 0, list: [

  {type:"input", inputWidth: 100, labelWidth:260, label:"<b>TOTAL PAYMENTS:</b>", position:"label-left", name:"totalCHARGE", numberFormat:"0,000.00", value:"0.00"},

           ]},
]},

     

]},

// Back > Save > Print Button Block ..............................................................................................................................................................................................
{type: "block", width: "auto",name:'btnBLOCK', blockOffset: 20, list: [
{type: "button", value: "BACK", name: "backBtn2"},
{type: "newcolumn"},
{type: "button", value: "SAVE", hidden:true, disabled:true, name: "savePRICESBtn"},
{type: "newcolumn"},
{type: "button", value: "SAVE & PRINT", disabled:true, name: "print"},
{type: "newcolumn"},
{type: "button", value: "UPDATE & SAVE", hidden:true, name: "updateBtn"}

]}





], // END

// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################

// ######################################################################### *PRINT* STANDARD CR FORM ############################################################################
// 
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################
// #####################################################################################################################################################################

printForm: [
  {_idd: "2351", type: "block", width: "auto", name: "blockForBlock", blockOffset: 0, list: [
   {type: "block", name:'parkName', blockOffset: 0, list: [
   {type:"label", name:"parkNameLabel", labelWidth:600}
        ]},
    {_idd: "2354", type: "fieldset", width: "auto", label: "Cash Log", name: "clFIELDSET", blockOffset: 20, list: [
      {type: "block", blockOffset: 0, list:[
        {type: "block", blockOffset: 0, list:[
          {type: "label", label: "Business Date:", labelWidth: 100},
          {type: "label", label: "", name: "effectDate"}
        ]},
        {type: "newcolumn"},
        {type: "block", blockOffset: 0, list: [
          {type: "label", label: "Shift", labelWidth: 100},
          {type: "label", label: "", name: "shiftType"}
        ]}
      ]},    
      {type: "block", blockOffset: 0, hidden:true, list: [
      {_idd: "2358", type: "label", label: "<u><h2>BILLS</h2><u>"},
      {_idd: "2359", type: "block", width: "auto", name: "100BLOCK", blockOffset: 20, list: [
        {_idd: "2362", type: "label", inputWidth: 100, labelWidth: 70, label: "Hundreds:", name: "hundredsLABEL", position: "label-top"},
        {_idd: "2362", type: "label", inputWidth: 100, labelWidth: 70, name: "hundreds", position: "label-left", icon: "icon-input"},
        {_idd: "2363", type: "newcolumn"},
        {_idd: "2366", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>100.00 =</b>", name: "hundredsXLABEL", position: "label-top"},
        {_idd: "2366", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "hundredsX", position: "label-left", icon: "icon-input"},
        {_idd: "2365", type: "newcolumn"},
        {_idd: "2370", type: "label", inputWidth: 100, labelWidth: 70, label: "Fifties:", name: "fiftiesLABEL", position: "label-top"},
        {_idd: "2370", type: "label", inputWidth: 100, labelWidth: 70, name: "fifties", position: "label-left", icon: "icon-input"},
        {_idd: "3311", type: "newcolumn"},
        {_idd: "2374", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>50.00 =</b>", name: "fiftiesXLABEL", position: "label-top"},
        {_idd: "2374", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "fiftiesX", position: "label-left", icon: "icon-input"},
        {_idd: "3404", type: "newcolumn"},
        {_idd: "2378", type: "label", inputWidth: 100, labelWidth: 70, label: "Twenties:", name: "twentiesLABEL", position: "label-top"},
        {_idd: "2378", type: "label", inputWidth: 100, labelWidth: 70, name: "twenties", position: "label-left", icon: "icon-input"},
        {_idd: "3418", type: "newcolumn"},
        {_idd: "2382", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>20.00 =</b>", name: "twentiesXLABEL", position: "label-top"},
        {_idd: "2382", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "twentiesX", position: "label-left", icon: "icon-input"},
        {_idd: "3493", type: "newcolumn"},
        {_idd: "2386", type: "label", inputWidth: 100, labelWidth: 70, label: "Tens:", name: "tensLABEL", position: "label-top"},
        {_idd: "2386", type: "label", inputWidth: 100, labelWidth: 70, name: "tens", position: "label-top", icon: "icon-input"},
        {_idd: "3495", type: "newcolumn"},
        {_idd: "2390", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>10.00 =</b>", name: "tensXLABEL", position: "label-top"},
        {_idd: "2390", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "tensX", position: "label-top", icon: "icon-input"}
      ]},
      {_idd: "2367", type: "block", width: "auto", name: "50BLOCK", blockOffset: 20, list: [
        {_idd: "2394", type: "label", inputWidth: 100, labelWidth: 70, label: "Fives:", name: "fivesLABEL", position: "label-top"},
        {_idd: "2394", type: "label", inputWidth: 100, labelWidth: 70, name: "fives", position: "label-top", icon: "icon-input"},
        {_idd: "3670", type: "newcolumn"},
        {_idd: "2398", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "fivesX", position: "label-top", label: "<b>5.00 =</b>"},
        {_idd: "2398", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "fivesX", position: "label-top", icon: "icon-input"},
        {_idd: "3690", type: "newcolumn"},
        {_idd: "2402", type: "label", inputWidth: 100, labelWidth: 70, label: "Twos:", name: "twosLABEL", position: "label-top"},
        {_idd: "2402", type: "label", inputWidth: 100, labelWidth: 70, name: "twos", position: "label-top", icon: "icon-input"},
        {_idd: "3692", type: "newcolumn"},
        {_idd: "2406", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>2.00 =</b>", name: "twosXLABEL", position: "label-top"},
        {_idd: "2406", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "twosX", position: "label-top", icon: "icon-input"},
        {_idd: "3742", type: "newcolumn"},
        {_idd: "2410", type: "label", inputWidth: 100, labelWidth: 70, label: "Ones:", name: "onesLABEL", position: "label-top"},
        {_idd: "2410", type: "label", inputWidth: 100, labelWidth: 70, name: "ones", position: "label-top", icon: "icon-input"},
        {_idd: "3744", type: "newcolumn"},
        {_idd: "2414", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>1.00 =</b>", name: "onesXLABEL", position: "label-top"},
        {_idd: "2414", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "onesX", position: "label-top", icon: "icon-input"}
      ]},
      {_idd: "2375", type: "block", width: "auto", name: "20BLOCK", blockOffset: 20},
      {_idd: "2383", type: "block", width: "auto", name: "10BLOCK", blockOffset: 20},
      {_idd: "2391", type: "block", width: "auto", name: "5BLOCK", blockOffset: 20},
      {_idd: "2399", type: "block", width: "auto", name: "2BLOCK", blockOffset: 20},
      {_idd: "2407", type: "block", width: "auto", name: "2BLOCK", blockOffset: 20},

      {_idd: "2415", type: "label", label: "<u><h2>ROLLED COINS</h2><u>", labelWidth: "150"},
      {_idd: "2416", type: "block", width: "auto", name: "QUARTERSBLOCK", blockOffset: 20, list: [
        {_idd: "2419", type: "label", inputWidth: 100, labelWidth: "100", label: "Roll Quarters:", name: "rQuartersLABEL", position: "label-top"},
        {_idd: "2419", type: "label", inputWidth: 100, labelWidth: "100", name: "rQuarters", position: "label-top", icon: "icon-input"},
        {_idd: "2422", type: "newcolumn"},
        {_idd: "2423", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>10.00 =</b>", name: "rQuartersXLABEL", position: "label-top"},
        {_idd: "2423", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "rQuartersX", position: "label-top", icon: "icon-input"},
        {_idd: "4032", type: "newcolumn"},
        {_idd: "2427", type: "label", inputWidth: 100, labelWidth: 70, label: "Roll Dimes:", name: "rDimesLABEL", position: "label-top"},
        {_idd: "2427", type: "label", inputWidth: 100, labelWidth: 70, name: "rDimes", position: "label-top", icon: "icon-input"},
        {_idd: "4034", type: "newcolumn"},
        {_idd: "2431", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>5.00 =</b>", name: "rDimesXLABEL", position: "label-top"},
        {_idd: "2431", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "rDimesX", position: "label-top", icon: "icon-input"},
        {_idd: "4128", type: "newcolumn"},
        {_idd: "2435", type: "label", inputWidth: 100, labelWidth: "100", label: "Roll Nickles:", name: "rNicklesLABEL", position: "label-top"},
        {_idd: "2435", type: "label", inputWidth: 100, labelWidth: "100", name: "rNickles", position: "label-top", icon: "icon-input"},
        {_idd: "4130", type: "newcolumn"},
        {_idd: "2439", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "rNicklesXLABEL", position: "label-top", label: "<b>2.00 =</b>"},
        {_idd: "2439", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "rNicklesX", position: "label-top", icon: "icon-input"},
        {_idd: "4282", type: "newcolumn"},
        {_idd: "2443", type: "label", inputWidth: 100, labelWidth: "100", label: "Roll Pennies:", name: "rPenniesLABEL", position: "label-top"},
        {_idd: "2443", type: "label", inputWidth: 100, labelWidth: "100", name: "rPennies", position: "label-top", icon: "icon-input"},
        {_idd: "4284", type: "newcolumn"},
        {_idd: "2447", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>0.50 =</b>", name: "rPenniesXLABEL", position: "label-top"},
        {_idd: "2447", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "rPenniesX", position: "label-top", icon: "icon-input"}
      ]},
      {_idd: "2424", type: "block", width: "auto", name: "DIMESBLOCK", blockOffset: 20},
      {_idd: "2432", type: "block", width: "auto", name: "NICKLESBLOCK", blockOffset: 20},
      {_idd: "2440", type: "block", width: "auto", name: "PENNIESBLOCK", blockOffset: 20},
      {_idd: "2448", type: "label", label: "<u><h2>LOOSE COINS</h2><u>", labelWidth: "150"},

      {_idd: "2449", type: "block", width: "auto", name: "DOLLARBLOCK", blockOffset: 20, list: [
        {_idd: "2452", type: "label", inputWidth: 100, labelWidth: 70, label: "Dollar:", name: "dollarLABEL", position: "label-top"},
        {_idd: "2452", type: "label", inputWidth: 100, labelWidth: 70, name: "dollar", position: "label-top", icon: "icon-input"},
        {_idd: "2455", type: "newcolumn"},
        {_idd: "2456", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>1.00 =</b>", name: "dollarXLABEL", position: "label-top"},
        {_idd: "2456", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "dollarX", position: "label-top", icon: "icon-input"},
        {_idd: "4568", type: "newcolumn"},
        {_idd: "2460", type: "label", inputWidth: 100, labelWidth: 70, label: "Half-Dollar:", name: "HDollarLABEL", position: "label-top"},
        {_idd: "2460", type: "label", inputWidth: 100, labelWidth: 70, name: "HDollar", position: "label-top", icon: "icon-input"},
        {_idd: "4570", type: "newcolumn"},
        {_idd: "2464", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>0.50 =</b>", name: "HDollarXLABEL", position: "label-top"},
        {_idd: "2464", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "HDollarX", position: "label-top", icon: "icon-input"},
        {_idd: "4660", type: "newcolumn"},
        {_idd: "2468", type: "label", inputWidth: 100, labelWidth: 70, label: "Quarters:", name: "QuartersLABEL", position: "label-top"},
        {_idd: "2468", type: "label", inputWidth: 100, labelWidth: 70, name: "Quarters", position: "label-top", icon: "icon-input"},
        {_idd: "4662", type: "newcolumn"},
        {_idd: "2472", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>0.25 =</b>", name: "QuartersXLABEL", position: "label-top"},
        {_idd: "2472", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "QuartersX", position: "label-top", icon: "icon-input"},
        {_idd: "4751", type: "newcolumn"},
        {_idd: "2476", type: "label", inputWidth: 100, labelWidth: 70, label: "Dimes:", name: "DimesLABEL", position: "label-top"},
        {_idd: "2476", type: "label", inputWidth: 100, labelWidth: 70, name: "Dimes", position: "label-top", icon: "icon-input"},
        {_idd: "4753", type: "newcolumn"},
        {_idd: "2480", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>0.10 =</b>", name: "DimesXLABEL", position: "label-top"},
        {_idd: "2480", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "DimesX", position: "label-top", icon: "icon-input"}
      ]},
      {_idd: "2457", type: "block", width: "auto", name: "HALFDOLLARBLOCK", blockOffset: 20, list: [
        {_idd: "2484", type: "label", inputWidth: 100, labelWidth: 70, label: "Nickles:", name: "NicklesLABEL", position: "label-top"},
        {_idd: "2484", type: "label", inputWidth: 100, labelWidth: 70, name: "Nickles", position: "label-top", icon: "icon-input"},
        {_idd: "2461", type: "newcolumn"},
        {_idd: "2488", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>0.05 =</b>", name: "NicklesXLABEL", position: "label-top"},
        {_idd: "2488", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "NicklesX", position: "label-top", icon: "icon-input"},
        {_idd: "2463", type: "newcolumn"},
        {_idd: "2492", type: "label", inputWidth: 100, labelWidth: 70, label: "Pennies:", name: "PenniesLABEL", position: "label-top"},
        {_idd: "2492", type: "label", inputWidth: 100, labelWidth: 70, name: "Pennies", position: "label-top", icon: "icon-input"},
        {_idd: "4853", type: "newcolumn"},
        {_idd: "2496", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", label: "<b>0.01 =</b>", name: "PenniesXLABEL", position: "label-top"},
        {_idd: "2496", type: "label", inputWidth: 100, labelWidth: "100", numberFormat: "0,000.00", value: "0.00", name: "PenniesX", position: "label-top", icon: "icon-input"}
      ]},
        ]}, // END OF HIDDEN BLOCK

      {_idd: "2465", type: "block", width: "auto", name: "QBLOCK", blockOffset: 20, list: [
        {_idd: "2500", type: "label", inputWidth: 100, labelWidth: 150, numberFormat: "0,000.00", value: "0.00", label: "<span style=\'color:green;\'><b>TOTAL CASH COUNT:</span></b>", name: "cashLogTOTALLABEL", position: "label-left"},
        {_idd: "2500", type: "label", inputWidth: 100, labelWidth: 150, numberFormat: "0,000.00", value: "0.00", name: "cashLogTOTAL", position: "label-left", icon: "icon-input"},
        {_idd: "5236", type: "newcolumn"},
        {_idd: "5480", type: "newcolumn"}
      ]},

      {_idd: "2473", type: "block", width: "auto", name: "DBLOCK", blockOffset: 20, list: [
        {_idd: "2504", type: "label", label: "(-)", labelWidth: "25"},
        {_idd: "5810", type: "newcolumn"},
        {_idd: "2506", type: "label", label: "CHANGE FUND:", inputWidth: 100, labelWidth: "120", position: "label-left", name: "cfLABEL", numberFormat: "0,000.00", value: "0.00"},
        {_idd: "2506", type: "label", inputWidth: 100, labelWidth: "120", position: "label-left", name: "cf", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
        
      ]},

      {_idd: "2481", type: "block", width: "auto", name: "NBLOCK", blockOffset: 20, list: [
        {_idd: "2510", type: "label", inputWidth: 100, labelWidth: "150", numberFormat: "0,000.00", value: "0.00", label: "<span style=\'color:green;\'><b>NET CASH:</span></b>", name: "netCashTOTALLABEL"},
        {_idd: "2510", type: "label", inputWidth: 100, labelWidth: "150", numberFormat: "0,000.00", value: "0.00", name: "netCashTOTAL", icon: "icon-input"}
      ]},

      //{_idd: "2489", type: "block", width: "auto", name: "PBLOCK", blockOffset: 0},
      //{type: "newcolumn"},
      // {_idd: "2497", type: "block", width: "auto", offsetLeft: 110, name: "TOTALCASHCOUNTBLOCK", blockOffset: 20},
      // {_idd: "2501", type: "block", width: "auto", offsetLeft: 110, name: "CFBLOCK", blockOffset: 20},
      // {_idd: "2507", type: "block", width: "auto", offsetLeft: 160, name: "netCASHCOUNTBLOCK", blockOffset: 20},
      
      {_idd: "2511", type: "block", width: "auto", name: "initialBLOCK", blockOffset: 20, list: [
        {_idd: "2514", type: "label", offsetTop: 0, label: "<h3>Initials:</h3>"},
        {_idd: "2515", type: "newcolumn"},
        {_idd: "2516", type: "label", inputWidth: 100, offsetTop: 0, labelWidth: 50, name: "initialINPUTLABEL"},
        {_idd: "2516", type: "label", inputWidth: 100, offsetTop: 0, labelWidth: 50, name: "initialINPUT", icon: "icon-input"}
      ]}
    ]},

    {_idd: "2517", type: "fieldset", width: "auto", label: "Register Balance", name: "blockBALANCE", blockOffset: 20, list: [
      {_idd: "2520", type: "block", width: "auto", name: "balBLOCK", blockOffset: 20, list: [
        {_idd: "2523", type: "label", label: "<span style=\'color:green;\'><b>Beginning Balance:</b></span>", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 120, name: "beginBalLABEL", labelWidth: "150"},
        {_idd: "2523", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 120, name: "beginBal", labelWidth: "150", icon: "icon-input"},
        {_idd: "2524", type: "newcolumn"},
        {_idd: "2525", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", label: "<span style=\'font-weight:bold; color: orange;\'>Return:</span>", inputWidth: 100, name: "returnBalLABEL"},
        {_idd: "2525", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 100, name: "returnBal", icon: "icon-input"},
        {_idd: "2526", type: "newcolumn"},
        {_idd: "2527", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", label: "<span style=\'font-weight:bold; color: orange; \'>Security Deposit:</span>", inputWidth: 110, name: "securityDepLABEL", labelWidth: "150"},
        {_idd: "2527", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 110, name: "securityDep", labelWidth: "150", icon: "icon-input"},
        {type: "newcolumn"},
        { type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", label: "<span style=\'font-weight:bold; color: orange; \'>Over/Short Total Adj:</span>", inputWidth: 115, name: "cashShortDailyActAdjLABEL", labelWidth: "150"},
        { type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 115, name: "overShortTotalAdjDailyActivity", labelWidth: "150", icon: "icon-input"},

        {_idd: "2528", type: "newcolumn"},
        {_idd: "2529", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", label: "<span style=\'font-weight:bold; color: orange; \'>Other Balance Adj.:</span>", inputWidth: 115, name: "otherRegBalAdjLABEL", labelWidth: "150"},
        {_idd: "2529", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 115, name: "otherRegBalAdj", labelWidth: "150", icon: "icon-input"},
        {_idd: "2530", type: "newcolumn"},
        {_idd: "2531", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", label: "<span style=\'font-weight:bold; color: orange; \'>Other Balance Adj.:</span>", inputWidth: 115, name: "otherRegBalAdj2LABEL", labelWidth: "150"},
        {_idd: "2531", type: "label", position: "label-top", numberFormat: "0,000.00", value: "0.00", inputWidth: 115, name: "otherRegBalAdj2", labelWidth: "150", icon: "icon-input"},
        {_idd: "2532", type: "newcolumn"},
        {_idd: "2533", type: "label", inputWidth: 120, label: "<span style=\'color:green;\'><b>Ending Balance:</b></span>", position: "label-top", numberFormat: "0,000.00", value: "0.00", name: "endBalLABEL", labelWidth: "150"},
        {_idd: "2533", type: "label", inputWidth: 120, position: "label-top", numberFormat: "0,000.00", value: "0.00", name: "endBal", labelWidth: "150", icon: "icon-input"},
        
        {_idd: "2536", type: "label", label: "=", labelWidth: "50"},
        
        {_idd: "2538", type: "label", inputWidth: 120, label: "<span style=\'color:blue;\'><b>Total Daily Activity:</b></span>", position: "label-top", numberFormat: "0,000.00", value: "0.00", name: "dailyTotalActivityLABEL", labelWidth: "150"},
        {_idd: "2538", type: "label", inputWidth: 120, position: "label-top", numberFormat: "0,000.00", value: "0.00", name: "dailyTotalActivity", labelWidth: "150", icon: "icon-input"}
      ]}
    ]},
    {_idd: "2539", type: "block", width: "1200", name: "lineItemLabelBLOCK", blockOffset: 0, list: [
      {_idd: "2542", type: "label", name: "lineItemLABEL", position: "label-left", label: "<h2>SALE ITEMS:</h2>", labelWidth: "150"}
    ]},
    {_idd: "2543", type: "block", width: "auto", name: "cashierTempBlock", blockOffset: 0},
    {_idd: "2546", type: "block", width: "auto", name: "blkforlblBLK", blockOffset: 20, list: [
      {_idd: "2549", type: "block", width: "auto", blockOffset: 0, list: [
        {_idd: "2552", type: "input", numberFormat: "0,000.00", value: "0.00", inputWidth: 100, labelWidth: 1000, hidden: true, label: "<span style=\'font-weight:bold; color: blue; margin-top:5px;\'>Over/Short Total:</span>", position: "label-left", style: "margin-left:60px;", name: "overShortTotal"}
      ]},
      {_idd: "2553", type: "block", width: "1200", name: "totalSalesBlock", blockOffset: 0, list: [
        {_idd: "2556", type: "label", numberFormat: "0,000.00", value: "0.00", labelWidth: "300", label: "<b>TOTAL SALES:</b>", position: "label-left", style: "margin-left:50px;", name: "totalSalesLABEL"},
        {type: "newcolumn"},
        {_idd: "2556", type: "label", numberFormat: "0,000.00", value: "0.00", labelWidth: "125", position: "label-left", style: "margin-left:50px;", name: "totalSales", icon: "icon-input"},
        {_idd: "2557", type: "newcolumn"},
        {_idd: "2558", type: "label", numberFormat: "0,000.00", value: "0.00", labelWidth: "100", style: "", name: "taxExempt"},
        {_idd: "2559", type: "newcolumn"},
        {_idd: "2560", type: "label", numberFormat: "0,000.00", value: "0.00", labelWidth: "100", style: "", name: "finalSale"},
        {_idd: "2561", type: "newcolumn"},
        {_idd: "2562", type: "label", numberFormat: "0,000.00", value: "0.00", labelWidth: "100", name: "finalSaleAdj", style: ""}
      ]},
      {type: "block", width: "auto", name:"blockFortaxTypeBLOCK", blockOffset: 0, list: [
      {_idd: "2563", type: "block", width: "auto", name: "taxTypeBLOCK", blockOffset: 0, list: [
        {_idd: "2566", type: "label", label: "<h2>SALES TAX:</h2>", labelWidth: "150"}
      ]}
    ]},
      {_idd: "2567", type: "block", width: "auto", blockOffset: 0, list: [
        {_idd: "2570", type: "label", inputWidth: 100, label: "<b>TAX TOTALS:</b>", labelWidth: "320"},
        {_idd: "2571", type: "newcolumn"},
        {_idd: "2572", type: "label", inputWidth: 100, name: "regTapeTaxTOTAL", labelWidth: "100", numberFormat: "0,000.00", value: "0.00", icon: "icon-label"},
        {_idd: "2573", type: "newcolumn"},
        {_idd: "2574", type: "label", inputWidth: 100, name: "taxAdjAdj", labelWidth: "100", numberFormat: "0,000.00", value: "0.00"},
        {_idd: "2575", type: "newcolumn"},
        {_idd: "2576", type: "label", inputWidth: 100, name: "taxAdjTotalTotal", labelWidth: "100", numberFormat: "0,000.00", value: "0.00"}
      ]},
      {_idd: "2577", type: "block", width: "auto", name: "finalAdjBlock", blockOffset: 0, list: [
        {_idd: "2580", type: "label", inputWidth: 100, labelWidth: "380", name: "adjSalesTaxesTOTALLABEL", label: "<b>TOTAL SALES + TOTAL TAXES:</b>", numberFormat: "0,000.00", value: "0.00"},
        {_idd: "2581", type: "label", inputWidth: 100, labelWidth: "380", name: "adjSalesTaxesTOTAL", numberFormat: "0,000.00", value: "0.00"},
        {_idd: "2580", type: "label", inputWidth: 100, labelWidth: "380", name: "adjFINALTOTALLABEL", label: "<b>ADJUSTED SALES + TAXES:</b>", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
        {_idd: "2581", type: "label", inputWidth: 100, labelWidth: "380", name: "adjFINALTOTAL", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
      ]},
      {_idd: "2582", type: "block", width: "auto", name: "lblBLock", blockOffset: 0, list: [
        {_idd: "2585", type: "label", name: "totalChargeLBL", label: "<h2>TOTAL PAYMENTS:</h2>", labelWidth: "200", offsetTop: "30"},
        {_idd: "2586", type: "block", name: "payMainBlock", width: "auto", blockOffset: 0, list: [
          {_idd: "2589", type: "fieldset", label: "CASH & CHECK NET DEPOSIT", style: "width:100%;", width: "auto", blockOffset: 20, list: [
            {_idd: "2592", type: "block", name: "CASHBLOCK", width: "auto", blockOffset: 0, list: [
              {_idd: "2597", type: "label", inputWidth: 130, labelWidth: 150, label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>CASH IN REGISTER:</span>", position: "label-top", name: "cashLogTotalMIMICLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2597", type: "label", inputWidth: 130, labelWidth: 150, position: "label-top", name: "cashLogTotalMIMIC", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2598", type: "newcolumn"},
              {_idd: "2599", type: "label", inputWidth: 130, labelWidth: 150, label: "<span style=\'font-weight:bold; margin-top:5px;\'>Register Cash Sales:</span>", position: "label-top", name: "CASHLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2599", type: "label", inputWidth: 130, labelWidth: 150, position: "label-top", name: "CASH", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2600", type: "newcolumn"},
              {_idd: "2601", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "cashDIFFLABEL", label: "<span style=\'font-weight:bold; color: red; margin-top:5px;\'>Difference:</span>"},
              {_idd: "2601", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "cashDIFF", icon: "icon-input"},
              {_idd: "2602", type: "newcolumn"},
              {_idd: "2603", type: "label", inputWidth: 130, labelWidth: 135, position: "label-top", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>", name: "cashADJLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2603", type: "label", inputWidth: 130, labelWidth: 135, position: "label-top", name: "cashADJ", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2606", type: "newcolumn"},
              {_idd: "2607", type: "label", inputWidth: 120, labelWidth: 135, offsetLeft: 10, position: "label-top", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Sales Adjustment:</span>", name: "cashSalesADJLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2607", type: "label", inputWidth: 120, labelWidth: 135, offsetLeft: 10, position: "label-top", name: "cashSalesADJ", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2610", type: "newcolumn"},
              {_idd: "2611", type: "label", inputWidth: 150, offsetLeft: 10, labelWidth: 180, position: "label-top", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Over/Short Adjustments:</span>", name: "cashADJSHORTLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2611", type: "label", inputWidth: 150, offsetLeft: 10, labelWidth: 180, position: "label-top", name: "cashADJSHORT", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2616", type: "newcolumn"},
              {_idd: "2617", type: "label", inputWidth: 110, labelWidth: 130, position: "label-top", label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>CASH ADJ. TOTAL:</span>", name: "cashADJTOTALLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2617", type: "label", inputWidth: 110, labelWidth: 130, position: "label-top", name: "cashADJTOTAL", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "cashNotes"}
          ]},
          {_idd: "2620", type: "fieldset", label: "CHECKS", style: "width:100%;", width: "auto", blockOffset: 0, list: [
            {_idd: "2623", type: "block", offsetTop: 15, name: "CHECKBLOCK", width: "auto", blockOffset: 0, list: [
              {type: "label", inputWidth: 100, labelWidth: 100, label: "<span style=\'font-weight:bold; color: blue; margin-top:5px;\'>Count Sheet:</span>", position: "label-top", name: "csLABEL", numberFormat: "0,000.00", value: "0.00"},
              {type: "label", inputWidth: 100, labelWidth: 100, position: "label-top", name: "countSheetCK", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2629", type: "newcolumn"},
              {_idd: "2628", type: "label", inputWidth: 100, labelWidth: 100, label: "<span style=\'font-weight:bold; margin-top:5px;\'>Register Tape:</span>", position: "label-top", name: "CKLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2628", type: "label", inputWidth: 100, labelWidth: 100, position: "label-top", name: "CK", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2629", type: "newcolumn"},
              {type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "ckDIFFLABEL", label: "<span style=\'font-weight:bold; color: red; margin-top:5px;\'>Difference:</span>"},
              {type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "checkDIFF", icon: "icon-input"},
              {_idd: "2629", type: "newcolumn"},
              {_idd: "2630", type: "label", inputWidth: 130, labelWidth: 135, position: "label-top", label: "<span style=\'font-weight:bold; color: orange;\'>Payment Adjustment:</span>", name: "ckADJLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2630", type: "label", inputWidth: 130, labelWidth: 135, position: "label-top", name: "ckADJ", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2633", type: "newcolumn"},
              {_idd: "2634", type: "label", inputWidth: 120, labelWidth: 140, offsetLeft: 10, position: "label-top", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Sales Adjustment:</span>", name: "checkSalesADJLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2634", type: "label", inputWidth: 120, labelWidth: 140, offsetLeft: 10, position: "label-top", name: "checkSalesADJ", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2637", type: "newcolumn"},
              {_idd: "2638", type: "label", inputWidth: 150, labelWidth: 165, position: "label-top", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Over/Short Adjustments:</span>", name: "checkADJSHORTLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2638", type: "label", inputWidth: 150, labelWidth: 165, position: "label-top", name: "checkADJSHORT", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2641", type: "newcolumn"},
              {_idd: "2642", type: "label", offsetTop: 5, label: "<h2>=</h2>"},
              {_idd: "2643", type: "newcolumn"},
              {_idd: "2644", type: "label", inputWidth: 110, labelWidth: 130, position: "label-top", label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>CHECK ADJ. TOTAL:</span>", name: "checkADJTOTALLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2644", type: "label", inputWidth: 110, labelWidth: 130, position: "label-top", name: "checkADJTOTAL", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
            ]},
            {_idd: "2647", type: "block", name: "CASHTOTALBLOCK", width: "auto", blockOffset: 0, list: [
              {_idd: "2650", type: "block", style: "margin-left:930px;", width: "auto", blockOffset: 0},
              {_idd: "2653", type: "label", inputWidth: 110, position: "label-top", labelWidth: "150", label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>TOTAL CASH + CHECK:</span>", name: "totalCASHLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2653", type: "label", inputWidth: 110, position: "label-top", labelWidth: "150", name: "totalCASH", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "CKNotes"}
          ]},

             {_idd: "2654", type: "fieldset", label: "DEBIT", width: "auto", blockOffset: 0, list: [
            {_idd: "2657", type: "block", name: "DEBITBLOCK", width: "auto", blockOffset: 0, list: [
              {_idd: "2660", type: "label", labelWidth: "150", label: "DEBIT", position: "label-left"},
              {_idd: "2661", type: "newcolumn"},
              {_idd: "2662", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 120, inputWidth: 100, name: "debitSettlementTapeLABEL", label: "<span style=\'font-weight:bold; color: blue; margin-top:5px;\'>Settlement Tape:</span>"},
              {_idd: "2662", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 120, inputWidth: 100, name: "debitSettlementTape", icon: "icon-input"},
              {_idd: "2663", type: "newcolumn"},
              {_idd: "2664", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "DEBITLABEL", label: "<span style=\'font-weight:bold; margin-top:5px;\'>Register Tape:</span>"},
              {_idd: "2664", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "DEBIT", icon: "icon-input"},
              {_idd: "2665", type: "newcolumn"},
              {_idd: "2666", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "debitDIFFLABEL", label: "<span style=\'font-weight:bold; color: red; margin-top:5px;\'>Difference:</span>"},
              {_idd: "2666", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "debitDIFF", icon: "icon-input"},
              {_idd: "2667", type: "newcolumn"},
              {_idd: "2668", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 150, inputWidth: 150, name: "debitADJLABEL", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>"},
              {_idd: "2668", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 150, inputWidth: 150, name: "debitADJ", icon: "icon-input"},
              {_idd: "2671", type: "newcolumn"},
              {_idd: "2672", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 125, inputWidth: 115, name: "debitSalesADJ<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Sales Adjustment:</span>"},
              {_idd: "2672", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 125, inputWidth: 115, name: "debitSalesADJ", icon: "icon-input"},
              {_idd: "2675", type: "newcolumn"},
              {_idd: "2676", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 160, inputWidth: 155, label: "<span style=\'font-weight:bold; color: orange;\'>Over/Short Adjustment:</span>", name: "amxSHORTADJ<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>"},
              {_idd: "2676", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 160, inputWidth: 155, name: "debitSHORTADJ", icon: "icon-input"},
              {_idd: "2679", type: "newcolumn"},
              {_idd: "2680", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "150", inputWidth: 110, name: "totalDEBITLABEL", label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>Amex Adj. Total:</span>"},
              {_idd: "2680", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "150", inputWidth: 110, name: "totalDEBIT", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "DEBITNotes"}
          ]},


          {_idd: "2654", type: "fieldset", label: "AMERICAN EXPRESS", width: "auto", blockOffset: 0, list: [
            {_idd: "2657", type: "block", name: "AMEXBLOCK", width: "auto", blockOffset: 0, list: [
              {_idd: "2660", type: "label", labelWidth: "150", label: "AMEX", position: "label-left"},
              {_idd: "2661", type: "newcolumn"},
              {_idd: "2662", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 120, inputWidth: 100, name: "amxSettlementTapeLABEL", label: "<span style=\'font-weight:bold; color: blue; margin-top:5px;\'>Settlement Tape:</span>"},
              {_idd: "2662", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 120, inputWidth: 100, name: "amxSettlementTape", icon: "icon-input"},
              {_idd: "2663", type: "newcolumn"},
              {_idd: "2664", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "AMEXLABEL", label: "<span style=\'font-weight:bold; margin-top:5px;\'>Register Tape:</span>"},
              {_idd: "2664", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "AMEX", icon: "icon-input"},
              {_idd: "2665", type: "newcolumn"},
              {_idd: "2666", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "amxDIFFLABEL", label: "<span style=\'font-weight:bold; color: red; margin-top:5px;\'>Difference:</span>"},
              {_idd: "2666", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "amxDIFF", icon: "icon-input"},
              {_idd: "2667", type: "newcolumn"},
              {_idd: "2668", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 150, inputWidth: 150, name: "amxADJLABEL", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>"},
              {_idd: "2668", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 150, inputWidth: 150, name: "amxADJ", icon: "icon-input"},
              {_idd: "2671", type: "newcolumn"},
              {_idd: "2672", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 125, inputWidth: 115, name: "amxSalesADJ<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Sales Adjustment:</span>"},
              {_idd: "2672", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 125, inputWidth: 115, name: "amxSalesADJ", icon: "icon-input"},
              {_idd: "2675", type: "newcolumn"},
              {_idd: "2676", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 160, inputWidth: 155, label: "<span style=\'font-weight:bold; color: orange;\'>Over/Short Adjustment:</span>", name: "amxSHORTADJ<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>"},
              {_idd: "2676", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 160, inputWidth: 155, name: "amxSHORTADJ", icon: "icon-input"},
              {_idd: "2679", type: "newcolumn"},
              {_idd: "2680", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "150", inputWidth: 110, name: "totalAMXLABEL", label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>Amex Adj. Total:</span>"},
              {_idd: "2680", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "150", inputWidth: 110, name: "totalAMX", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "AMEXNotes"}
          ]},
          {_idd: "2683", type: "fieldset", label: "OTHER CREDIT CARDS", width: 1380, blockOffset: 0, list: [
            {_idd: "2686", type: "block", width: "auto", name: "DISCOVERBLOCK", blockOffset: 0, list: [
              {_idd: "2689", type: "label", labelWidth: "150", label: "DISCOVER CARD", position: "label-left", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2690", type: "newcolumn"},
              {_idd: "2691", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 120, inputWidth: 100, name: "discSettlementTapeLABEL", label: "<span style=\'font-weight:bold; color: blue; margin-top:5px;\'>Settlement Tape:</span>"},
              {_idd: "2691", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 120, inputWidth: 100, name: "discSettlementTape", icon: "icon-input"},
              {_idd: "2692", type: "newcolumn"},
              {_idd: "2693", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "DISCLABEL", label: "<span style=\'font-weight:bold; margin-top:5px;\'>Register Tape:</span>"},
              {_idd: "2693", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "DISC", icon: "icon-input"},
              {_idd: "2694", type: "newcolumn"},
              {_idd: "2695", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "discDIFFLABEL", label: "<span style=\'font-weight:bold; color: red; margin-top:5px;\'>Difference:</span>"},
              {_idd: "2695", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "discDIFF", icon: "icon-input"},
              {_idd: "2696", type: "newcolumn"},
              {_idd: "2697", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 150, inputWidth: 150, label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>", name: "discADJLABEL"},
              {_idd: "2697", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 150, inputWidth: 150, name: "discADJ", icon: "icon-input"},
              {_idd: "2700", type: "newcolumn"},
              {_idd: "2701", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "125", inputWidth: 110, name: "discSalesADJLABEL", label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Sales Adjustment:</span>"},
              {_idd: "2701", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "125", inputWidth: 110, name: "discSalesADJ", icon: "icon-input"},
              {_idd: "2704", type: "newcolumn"},
              {_idd: "2705", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "150", inputWidth: 150, label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Over/Short Adjustment:</span>", name: "discCASHSHORTADJLABEL"},
              {_idd: "2705", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: "150", inputWidth: 150, name: "discCASHSHORTADJ", icon: "icon-input"},
              {_idd: "2708", type: "newcolumn"},
              {_idd: "2709", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 100, inputWidth: 110, label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>Adj. Total:</span>", name: "discADJTOTALLABEL", offsetLeft: "5"},
              {_idd: "2709", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 100, inputWidth: 110, name: "discADJTOTAL", offsetLeft: "5", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "DISCNotes"},
            {_idd: "2712", type: "block", width: "auto", name: "MASTERCARDBLOCK", blockOffset: 0, list: [
              {_idd: "2715", type: "label", labelWidth: "150", label: "MASTER CARD", position: "label-left", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2716", type: "newcolumn"},
              {_idd: "2717", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 110, inputWidth: 100, name: "masterSettlementTape", icon: "icon-input"},
              {_idd: "2718", type: "newcolumn"},
              {_idd: "2719", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 110, inputWidth: 100, offsetLeft: 15, name: "MAST", icon: "icon-input"},
              {_idd: "2720", type: "newcolumn"},
              {_idd: "2721", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 110, inputWidth: 100, offsetLeft: 7, name: "mastCDIFF", icon: "icon-input"},
              {_idd: "2722", type: "newcolumn"},
              {_idd: "2723", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 150, inputWidth: 150, offsetLeft: 6, name: "masterADJ", icon: "icon-input"},
              {_idd: "2726", type: "newcolumn"},
              {_idd: "2727", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 130, inputWidth: 110, name: "masterSALESADJ", icon: "icon-input"},
              {_idd: "2730", type: "newcolumn"},
              {_idd: "2731", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 150, inputWidth: 150, name: "masterCASHSHORTADJ", icon: "icon-input"},
              {_idd: "2734", type: "newcolumn"},
              {_idd: "2735", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, offsetLeft: 5, inputWidth: 110, name: "masterADJTOTAL", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "MCNotes"},
            {_idd: "2738", type: "block", width: "auto", name: "VISABLOCK", blockOffset: 0, list: [
              {_idd: "2741", type: "label", labelWidth: "150", label: "VISA", position: "label-left"},
              {_idd: "2742", type: "newcolumn"},
              {_idd: "2743", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 110, inputWidth: 100, name: "visaSettlementTape"},
              {_idd: "2744", type: "newcolumn"},
              {_idd: "2745", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 110, inputWidth: 100, offsetLeft: 15, name: "VISA"},
              {_idd: "2746", type: "newcolumn"},
              {_idd: "2747", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 100, inputWidth: 100, offsetLeft: 7, name: "visaDIFF"},
              {_idd: "2748", type: "newcolumn"},
              {_idd: "2749", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 150, inputWidth: 150, offsetLeft: 6, name: "visaADJ"},
              {_idd: "2752", type: "newcolumn"},
              {_idd: "2753", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 130, inputWidth: 110, name: "visaSalesADJ"},
              {_idd: "2756", type: "newcolumn"},
              {_idd: "2757", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, labelWidth: 150, inputWidth: 150, name: "visaCASHSHORTADJ"},
              {_idd: "2760", type: "newcolumn"},
              {_idd: "2761", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 20, offsetLeft: 5, labelWidth: 110, inputWidth: 110, name: "visaADJTOTAL"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "VISANotes"},
            {_idd: "2764", type: "block", width: "auto", name: "totalCredBLOCK", blockOffset: 0, list: [
              {_idd: "2767", type: "label", labelWidth: "150", label: "<h2>TOTAL:</h2>", position: "label-left", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2768", type: "newcolumn"},
              {_idd: "2769", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, labelWidth: 110, inputWidth: 100, name: "totalSettlementTape"},
              {_idd: "2770", type: "newcolumn"},
              {_idd: "2771", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, inputWidth: 100, offsetLeft: 15, name: "totalRegTape"},
              {_idd: "2772", type: "newcolumn"},
              {_idd: "2773", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, inputWidth: 100, offsetLeft: 7, name: "totalDIFF"},
              {_idd: "2774", type: "newcolumn"},
              {_idd: "2775", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, inputWidth: 150, offsetLeft: 6, name: "totalPayAdj", labelWidth: "150"},
              {_idd: "2776", type: "newcolumn"},
              {_idd: "2777", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, inputWidth: 110, name: "totalSalesAdj"},
              {_idd: "2778", type: "newcolumn"},
              {_idd: "2779", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, inputWidth: 150, name: "totalOSAdj"},
              {_idd: "2780", type: "newcolumn"},
              {_idd: "2781", type: "label", numberFormat: "0,000.00", value: "0.00", offsetTop: 25, inputWidth: 110, name: "totalCREDIT", offsetLeft: "5"}
            ]}
          ]},
          {_idd: "2782", type: "fieldset", label: "GIFT CERTIFICATE", style: "width:100%;", width: "auto", blockOffset: 20, list: [
            {_idd: "2785", type: "block", width: "auto", name: "CRTBLOCK", blockOffset: 0, list: [
              {_idd: "2790", type: "label", labelWidth: 140, inputWidth: 130, name: "GIFTUCRTLABEL", label: "<span style=\'font-weight:bold; margin-top:5px;\'>Gift Certificate:</span>", position: "label-top", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2790", type: "label", labelWidth: 140, inputWidth: 130, name: "GIFTUCRT", position: "label-top", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2791", type: "newcolumn"},
              {_idd: "2792", type: "label", labelWidth: 100, inputWidth: 100, name: "UCRTLABEL", label: "<span style=\'font-weight:bold; margin-top:5px;\'>Register Tape:</span>", position: "label-top", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2792", type: "label", labelWidth: 100, inputWidth: 100, name: "UCRT", position: "label-top", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2793", type: "newcolumn"},
              {_idd: "2794", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "crtDIFFLABEL", label: "<span style=\'font-weight:bold; color: red; margin-top:5px;\'>Difference:</span>"},
              {_idd: "2794", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", labelWidth: 110, inputWidth: 100, name: "crtDIFF", icon: "icon-input"},
              {_idd: "2795", type: "newcolumn"},
              {_idd: "2796", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", name: "crtADJLABEL", labelWidth: 170, inputWidth: 160, label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Payment Adjustment:</span>"},
              {_idd: "2796", type: "label", numberFormat: "0,000.00", value: "0.00", position: "label-top", name: "crtADJ", labelWidth: 170, inputWidth: 160, icon: "icon-input"},
              {_idd: "2799", type: "newcolumn"},
              {_idd: "2800", type: "label", labelWidth: 150, inputWidth: 150, label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Sales Adjustment:</span>", position: "label-top", name: "salesCERTADJLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2800", type: "label", labelWidth: 150, inputWidth: 150, position: "label-top", name: "salesCERTADJ", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2803", type: "newcolumn"},
              {_idd: "2804", type: "label", labelWidth: 165, inputWidth: 150, label: "<span style=\'font-weight:bold; color: orange; margin-top:5px;\'>Over/Short Adjustment:</span>", position: "label-top", name: "giftCERTcsADJLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2804", type: "label", labelWidth: 165, inputWidth: 150, position: "label-top", name: "giftCERTcsADJ", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"},
              {_idd: "2807", type: "newcolumn"},
              {_idd: "2808", type: "label", labelWidth: 150, inputWidth: 150, label: "<span style=\'font-weight:bold; color: green; margin-top:5px;\'>GIFT CERT ADJ TOTAL:</span>", position: "label-top", name: "totalADJGIFTCERTLABEL", numberFormat: "0,000.00", value: "0.00"},
              {_idd: "2808", type: "label", labelWidth: 150, inputWidth: 150, position: "label-top", name: "totalADJGIFTCERT", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
            ]},
            {type: "label", label: "Adj. Reason"},
            {type: "label", name: "CRTNotes"}
          ]}
        ]}
      ]},
      {_idd: "2811", type: "block", width: "auto", name: "totalCHARGEBlock", blockOffset: 0, list: [
        {_idd: "2814", type: "label", inputWidth: 100, labelWidth: 260, label: "<b>TOTAL PAYMENTS:</b>", position: "label-left", name: "totalCHARGELABEL", numberFormat: "0,000.00", value: "0.00"},
        {_idd: "2814", type: "label", inputWidth: 100, labelWidth: 260, position: "label-left", name: "totalCHARGE", numberFormat: "0,000.00", value: "0.00", icon: "icon-input"}
      ]},

        {type: "block", blockOffset: 0, list: [
        {type: "label", labelWidth: 460, label: "<b>CASHIER SIGNATURE:________________________________</b>"},
        {type: "newcolumn"},
        {type: "label", labelWidth: 460, label: "<b>DATE:________________________________</b>"}
      ]},

      {type: "block", blockOffset: 0, list: [
        {type: "label", labelWidth: 460, label: "<b>APPROVAL SIGNATURE:________________________________</b>"},
        {type: "newcolumn"},
        {type: "label", labelWidth: 460, label: "<b>APPROVAL DATE:________________________________</b>"}
      ]}

     
    ]}
  ]}
],

fileUploadFormData: [
	{type: "block", width: 650, blockOffset: 20, list: [
		{type: "block", width: "auto", blockOffset: "0", list: [
			{type: "combo", label: "Location:", position: "label-top", value: "", name: "selectTemplate", inputWidth: "500", required:true},
      {type: "calendar", label: "Business date:", value: "", name: "businessDate", position: "label-top", labelWidth: "150", required:true},
      {type: "combo", inputWidth:100, required:true,  position:"label-top", label:"Shift:", name:"shiftType", options:[
        {text: "Shift 1", value: "1"},
        {text: "Shift 2", value: "2"},
        {text: "Shift 3", value: "3"},
        {text: "Shift 4", value: "4"}
      ]},
		]},
		{type: "block", width: "auto", blockOffset: "0", list: [
			{type: "button", label: "New Input", value: "OK", name: "ok"},
			{type: "newcolumn"},
			{type: "button", label: "New Input", value: "Cancel", name: "cancel"}
		]}
	]}
],


};

