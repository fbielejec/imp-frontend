/**
* @fbielejec
*/

//---MODULE EXPORTS---//

var rootURL = "http://localhost:8080";
var treesfile = "trees";
var coordinateName = "coordinateName";
var burnin = "burnin";
var nslices = "nslices";
var mrsd = "mrsd";


getSettings = function() {

  $.ajax({
    type: 'GET',
    url: rootURL  + '/settings',
    dataType: "json", // data type of response
    success: function(data, textStatus, jqXHR){
       console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log("ERROR IN GET SETTINGS");
    }
  });

}

getSetting = function(id) {

  $.ajax({
    type: 'GET',
    url: rootURL  + '/settings/' + id,
    dataType: "json", // data type of response
    success: function(data, textStatus, jqXHR){
       console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR IN GET SETTING " + "ID=" + id);
    }
  });

}

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
            console.log("ERROR IN PUT SETTING " + "ID="+ id + " VALUE=" + value);
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown)
        }
    });

}


module.exports = {
  treesfile : treesfile,
  getSettings : getSettings,
  getSetting : getSetting,
  putSetting : putSetting
};
