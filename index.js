
 function doGet(request) {
  return HtmlService.createTemplateFromFile('index').evaluate()
      .addMetaTag('viewport','width=device-width , initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

/**  INCLUDE HTML PARTS, EG. JAVASCRIPT, CSS, OTHER HTML FILES */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function globalVariables(){ 
  var varArray = {
    spreadsheetId   : '1xc1VoUMRWYVlVSlbOV01dAJ2mp24QdjQC6o9J0qAHXE', //** CHANGE !!!
    dataRage        : 'Data!A2:AX',                                    //** CHANGE !!!
    idRange         : 'Data!A2:A',                                    //** CHANGE !!!
    lastCol         : 'AX',                                            //** CHANGE !!!
    insertRange     : 'Data!A1:AX1',                                   //** CHANGE !!!
    sheetID         : '0'                                             //** CHANGE !!! 
  };
  return varArray;
}

/**  PROCESS FORM */
function processForm(formObject){  

  /**--Execute if form passes an ID and if is an existing ID */
  if(formObject.RecId && checkID(formObject.RecId)){

    /**--Update Data */
    updateData(getFormValues(formObject),globalVariables().spreadsheetId,getRangeByID(formObject.RecId));
  }else{ 

    /**--Execute if form does not pass an ID
     **--Append Form Data */
    appendData(getFormValues(formObject),globalVariables().spreadsheetId,globalVariables().insertRange); 
  }
  
  return getAllData();
}


/**  GET FORM VALUES AS AN ARRAY */
function getFormValues(formObject){

/**  ADD OR REMOVE VARIABLES ACCORDING TO YOUR FORM */
  if(formObject.RecId && checkID(formObject.RecId)){
    var values = [[formObject.RecId.toString(),
                  formObject.name,                  
                  formObject.data
                  ]];
                 
  }else{

    /** Reference https://webapps.stackexchange.com/a/51012/244121 */
    var values = [[new Date().getTime().toString(),
                  formObject.name,
                  formObject.data
                  ]];              
  }
  return values;
}


/**  CREATE/ APPEND DATA */
function appendData(values, spreadsheetId,range){
  var valueRange = Sheets.newRowData();
  valueRange.values = values;
  var appendRequest = Sheets.newAppendCellsRequest();
  appendRequest.sheetID = spreadsheetId;
  appendRequest.rows = valueRange;
  var results = Sheets.Spreadsheets.Values.append(valueRange, spreadsheetId, range,{valueInputOption: "RAW"});
}


/**  READ DATA */
function readData(spreadsheetId,range){
  var result = Sheets.Spreadsheets.Values.get(spreadsheetId, range);
  return result.values;
}


/**  UPDATE DATA */
function updateData(values,spreadsheetId,range){
  var valueRange = Sheets.newValueRange();
  valueRange.values = values;
  var result = Sheets.Spreadsheets.Values.update(valueRange, spreadsheetId, range, {
  valueInputOption: "RAW"});
}


/** DELETE DATA */
function deleteData(ID){ 
  var startIndex = getRowIndexByID(ID);
  
  var deleteRange = {
                      "sheetId"     : globalVariables().sheetID,
                      "dimension"   : "ROWS",
                      "startIndex"  : startIndex,
                      "endIndex"    : startIndex+1
                    }
  
  var deleteRequest= [{"deleteDimension":{"range":deleteRange}}];
  Sheets.Spreadsheets.batchUpdate({"requests": deleteRequest}, globalVariables().spreadsheetId);
  
  return getAllData();
}


/**  CHECK FOR EXISTING ID, RETURN BOOLEAN */
function checkID(ID){
  var idList = readData(globalVariables()
  .spreadsheetId,globalVariables().idRange,)
  .reduce(function(a,b){
    return a.concat(b);
    });
  return idList.includes(ID);
}


/**  GET DATA RANGE A1 NOTATION FOR GIVEN ID */
function getRangeByID(id){
  if(id){
    var idList = readData(globalVariables().spreadsheetId,globalVariables().idRange);
    for(var i=0;i<idList.length;i++){
      if(id==idList[i][0]){
        return 'Data!A'+(i+2)+':'+globalVariables().lastCol+(i+2);
      }
    }
  }
}


/**  GET RECORD BY ID */
function getRecordById(id){
  if(id && checkID(id)){
    var result = readData(globalVariables().spreadsheetId,getRangeByID(id));
    return result;
  }
}


/**  GET ROW NUMBER FOR GIVEN ID */
function getRowIndexByID(id){
  if(id){
    var idList = readData(globalVariables().spreadsheetId,globalVariables().idRange);
    for(var i=0;i<idList.length;i++){
      if(id==idList[i][0]){
        var rowIndex = parseInt(i+1);
        return rowIndex;
      }
    }
  }
}


/**DataTable */
function getAllData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheets()[0]
  var range = sheet.getDataRange()
  var values = range.getDisplayValues()
  Logger.log(values)
  return values
}
