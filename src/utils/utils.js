var d3 = require('d3');

formDate = function(dateString) {

    var dateFields = dateString.split("/");
    var year = dateFields[0];
    var month = dateFields[1];
    var day = dateFields[2];

    var date = new Date(year, month, day);
    // var date = Date.UTC(year, month, day);

    return (date);
  } // END: formDate

prepareData = function(json) {

    var nTrees = json[d3.keys(json)[0]].length;
    var nSlices = d3.keys(json).length;

    // console.log(nTrees);
    // console.log(nSlices);

    var data = [];
    for (var i = 0; i < nTrees; i++) {

      data[i] = {
        name: "tree_" + i,
        values: []
      }

      for (var j = 0; j < nSlices; j++) {

        var time = d3.keys(json)[j];

        // console.log(formDate(time));

        data[i].values[j] = {
          time: formDate(time),
          distance: +json[time][i]
        };

      } //END: j loop
    } //END: i loop

    return (data);
  } //END: prepareData

module.exports = {
  prepareData: prepareData
};
