/**
 * @fbielejec
 */

//---MODULE EXPORTS---//

var exports = module.exports = {};

var margin = {
	top : 50,
	right : 50,
	bottom : 50,
	left : 70,
};

var width = window.innerWidth - margin.left - margin.right;
var height = window.innerHeight - margin.top - margin.bottom;

// var g;
// exports.g = g;

module.exports = {
  margin : margin,
  width : width,
  height : height
};
