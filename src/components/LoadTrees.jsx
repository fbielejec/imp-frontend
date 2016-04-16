// /**
// * @fbielejec
// */
//
// //---MODULE IMPORTS---//
//
// var React = require('react');
// var PropTypes = React.PropTypes;
// var FileInput = require('react-file-input');
// var server = require('../utils/server.js');
//
// //---MODULE EXPORTS---//
//
// var LoadTrees = React.createClass({
//
//   propTypes : {
// 		treesLoaded : React.PropTypes.bool.isRequired
// 	}, // END: propTypes
//
//   handleChange: function(event) {
//
//     event.preventDefault();
//
//     var file = event.target.files[0];
//     if (!file) {
//       return;
//     }
//
//     var reader = new FileReader();
//     reader.readAsText(file, 'UTF-8');
//
//     reader.onload = function(e) {
//       var content = e.target.result;
//
//       var a1 = server.putTrees(content)
//       .then(
//         function() {
//           server.getAttributes().done(function(data) {
//             console.log(data);
//           });
//         });
//
//       }
//
//       // var a2 = server.getAttributes();
//       // $.when(a1, a2).done(function(r1, r2) {
//       //    //  console.log(r1[0]);
//       //     console.log(r2[0]);
//       // });
//
//
//
//     }, //END: handleChange
//
//
//     render: function() {
//
//       return (
//         <div>
//         <form>
//           <FileInput
//             name="Trees file"
//             accept=".tree,.trees"
//             placeholder="Load trees..."
//             className="btn btn-lg btn-success"
//             onChange={this.handleChange}/>
//         </form>
//
//         <div>
//           {this.props.treesLoaded ?
//             [
//               <span>TREES LOADED</span>,
//               <span>TREES LOADED</span>
//             ]
//           : null}
//         </div>
//           </div>
//
//       )} //END: render
//   });
//
//   module.exports = LoadTrees;
