/**
* @fbielejec
*/

var rootURL = "http://localhost:8080";

getServerResponse = function() {

  $.ajax({
    type: 'GET',
    url: rootURL  + '/settings',
    dataType: "json", // data type of response
    success: function(data, textStatus, jqXHR){
      console.log("SUCCESS");

       console.log(data);

    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log("ERROR");
    }
  });

}




module.exports = {
  getServerResponse : getServerResponse
};
