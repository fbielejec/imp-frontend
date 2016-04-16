var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var LoadTrees = require('../components/LoadTrees');
var SelectAttributes = require('../components/SelectAttributes');
var BurninSlider = require('../components/BurninSlider');

var LoadTreesContainer = React.createClass({

  getInitialState: function() {
    return {
      treesLoaded: false,
      attributes: [],
      nTrees: 0
    };
  },//END: getInitialState

  handleChange: function(event) {

    event.preventDefault();

    var file = event.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    var self = this;



    reader.onload = function(e) {
      var content = e.target.result;

      $.when(server.putTrees(content)).done(function() {

// TODO: chain multiple calls here
      var attributes_call = server.getAttributes();

  $.when(attributes_call).done(function(attributes) {

                self.setState({
                  treesLoaded: true,
                  attributes: attributes,
                // nTrees: nTrees
                });

});

      });


      }











//     reader.onload = function(e) {
//       var content = e.target.result;
//
// // https://medium.com/coding-design/writing-better-ajax-8ee4a7fb95f#.qlyy0jurn
//
//       server.putTrees(content)
//       .then(
//         function() {
//           server.getAttributes().done(function(attributes) {
//
//             self.setState({
//               treesLoaded: true,
//               attributes: attributes,
//             // nTrees: nTrees
//             });
//
//             // console.log(self.state);
//
//           });
//         });
//
//       }

    }, //END: handleChange

    render: function() {
      return (
        <div
          className="jumbotron col-sm-12 text-center"
          style={{background: "transparent"}}>

          <div className='col-sm-8 col-sm-offset-2'>
            <LoadTrees handleChange={this.handleChange}/>
          </div>

          {this.state.treesLoaded ?
            [
              <div key={0}
                className='col-sm-8 col-sm-offset-2'
                style={{marginTop: '25px'}}>
                <SelectAttributes attributes={this.state.attributes}/>
              </div>
              ,

              <div key={1}
                className='col-sm-8 col-sm-offset-2'
                style={{marginTop: '25px'}}>
                <BurninSlider maxValue={this.state.nTrees}/>
              </div>

            ]
            : null}

          </div>
        );
      }

    });

    module.exports = LoadTreesContainer;
