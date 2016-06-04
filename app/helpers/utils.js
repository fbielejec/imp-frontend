/**
 * @fbielejec
 */

//---MODULE EXPORTS---//

function round(num, place) {
  var pow = Math.pow(10, place);
  return (Math.round(num * pow) / pow);
}

export {
  round,
}
