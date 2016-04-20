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
        dataType: "json"
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET SETTINGS");
      });
  } //END: getSettings

getSetting = function(id) {
    $.ajax({
        type: 'GET',
        url: rootURL + '/settings/' + id,
        dataType: "json"
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET SETTING");
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
        })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN PUT SETTING ID " + id );
      });
  } //END: putSetting

putTrees = function(content) {
    return $.ajax({
        type: 'PUT',
        url: rootURL + '/trees',
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify({
          "input": content
        })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN PUT TREES");
      });
  } //END: putTrees

getAttributes = function() {
    return $.ajax({
        type: 'GET',
        url: rootURL + '/attributes',
        dataType: "json",
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET ATTRIBUTES");
      });
  } //END: getAttributes

  getnTrees = function() {
      return $.ajax({
          type: 'GET',
          url: rootURL + '/ntrees',
          dataType: "json",
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log("ERROR IN GET N TREES");
        });
    } //END: getAttributes


module.exports = {
  rootURL : rootURL,
  settings: settings,
  getSettings: getSettings,
  getSetting: getSetting,
  putSetting: putSetting,
  putTrees: putTrees,
  getAttributes: getAttributes,
  getnTrees: getnTrees
};
