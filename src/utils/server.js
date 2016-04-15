/**
 * @fbielejec
 */

//---MODULE EXPORTS---//

var rootURL = "http://localhost:8080";

var settings = {
  attribute: "attribute",
  burnin: "burnin",
  nslices: "nslices",
  mrsd: "mrsd"
};

getSettings = function() {
    $.ajax({
      type: 'GET',
      url: rootURL + '/settings',
      dataType: "json", // data type of response
      success: function(data, textStatus, jqXHR) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET SETTINGS");
      }
    });
  } //END: getSettings

getSetting = function(id) {
    $.ajax({
      type: 'GET',
      url: rootURL + '/settings/' + id,
      dataType: "json", // data type of response
      success: function(data, textStatus, jqXHR) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET SETTING " + "ID=" + id);
      }
    });
  } //END: getSetting

putSetting = function(id, value) {
    $.ajax({
      type: 'PUT',
      url: rootURL + '/settings',
      contentType: 'application/json',
      dataType: "json",
      data: JSON.stringify({
        "id": id,
        "value": value
      }),
      success: function(data, textStatus, jqXHR) {
        console.log("SUCCESS");
        getSetting(id);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN PUT SETTING " + "ID=" + id + " VALUE=" + value);
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown)
      }
    });
  } //END: putSetting

putTrees = function(content) {
  return $.ajax({
      type: 'PUT',
      url: rootURL + '/trees',
      // contentType: false,
      // processData: false,
      // data: content,
      contentType: 'application/json',
      dataType: "json",
      data: JSON.stringify({
        "input": content
      }),
      success: function(data, textStatus, jqXHR) {
        console.log("SUCCESS IN PUT TREES");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN PUT TREES");
      }
    });
  } //END: putTrees

// https://stackoverflow.com/questions/16026942/how-do-i-chain-three-asynchronous-calls-using-jquery-promises
  getAttributes = function() {
     return $.ajax({
        type: 'GET',
        url: rootURL + '/attributes',
        dataType: "json", // data type of response
        // success: function(data, textStatus, jqXHR) {
        //  console.log("SUCCESS IN GET SETTINGS");
        // },
        // error: function(jqXHR, textStatus, errorThrown) {
        //   console.log("ERROR IN GET SETTINGS");
        // }
      })
      // .done(function(data) {
      //  console.log("SUCCESS IN GET SETTINGS");
      // })
      .fail(function(jqXHR, textStatus, errorThrown) {
          console.log("ERROR IN GET SETTINGS");
      });
    } //END: getAttributes


module.exports = {
  settings: settings,
  getSettings: getSettings,
  getSetting: getSetting,
  putSetting: putSetting,
  putTrees: putTrees,
  getAttributes : getAttributes
};
