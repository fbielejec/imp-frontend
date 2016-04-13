/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('react-file-input');
var server = require('../utils/server.js');

//---MODULE EXPORTS---//

// TODO: upload to server as binary string:
// http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api

var LoadTrees = React.createClass({

  getInitialState: function() {
    return {treesfile: null};
  },

  handleChange: function(event) {

   event.preventDefault();

var file = event.target.files[0];
if (!file) {
  return;
}

 // var tmppath = URL.createObjectURL(file);

var reader = new FileReader();
reader.readAsText(file, 'UTF-8');
reader.onload = function(e) {
var content = e.target.result;

console.log(content);

  $.ajax({
    type: 'PUT',
    url: "http://localhost:8080" + '/upload',
    // contentType: false,
    // processData: false,
    // data: content,

    contentType: 'application/json',
    dataType: "json",
    data: JSON.stringify({
      "input": content
    }),
    success: function(data, textStatus, jqXHR) {
      console.log("SUCCESS");
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR");
    }
  });

}




// var formData = new FormData();
// formData.append(file.name, file);
//
// console.log(file);
// console.log(formData);
//
//   $.ajax({
//     type: 'POST',
//     url: "http://localhost:8080" + '/upload',
//     contentType: false,
//     processData: false,
//     data: formData,
//     success: function(data, textStatus, jqXHR) {
//       console.log("SUCCESS");
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log("ERROR");
//     }
//   });




  },

  render: function() {

    return (
      <form>
        <FileInput name="Trees file" accept=".tree,.trees" placeholder="Load trees..." className="btn btn-lg btn-success" onChange={this.handleChange}/>
      </form>
    )

  }
});

module.exports = LoadTrees;
