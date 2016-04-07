/**
* @fbielejec
*/

var rootURL = "http://localhost:8080";

getSettings = function() {

  $.ajax({
    type: 'GET',
    url: rootURL  + '/settings',
    dataType: "json", // data type of response
    success: function(data, textStatus, jqXHR){

       console.log(data);

    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log("ERROR GET SETTINGS");
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
      console.log("ERROR GET SETTING " + "ID=" + id);
    }
  });

}

// TODO: fix
putSetting = function(id, value) {

  $.ajax({
        type: 'PUT',
        contentType: 'application/json',
        url: rootURL + '/settings',
        dataType: "json",
        data: JSON.stringify({
          "id": "coordinateName",
          "value": "location"
        }),
        success: function(data, textStatus, jqXHR) {

               console.log("SUCCESS");

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
  getSettings : getSettings,
  getSetting : getSetting,
  putSetting : putSetting
};
