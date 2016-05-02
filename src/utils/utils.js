/**
* @fbielejec
*/

//---MODULE EXPORTS---//

formDate = function(dateString) {

    var dateFields = dateString.split("/");
    var year = dateFields[0];
    var month = dateFields[1];
    var day = dateFields[2];

    var date = new Date(year, month, day);
    // var date = Date.UTC(year, month, day);

    return (date);
  } // END: formDate

  function puke (obj) {
    return <pre> {JSON.stringify(obj, 2, ' ')} </pre>
  }

function round(num, place) {
  var pow = Math.pow(10, place);
  return (Math.round(num * pow) / pow);
}

module.exports = {
  puke : puke,
  formDate : formDate,
  round : round
};
