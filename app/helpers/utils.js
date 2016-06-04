/**
 * @fbielejec
 */

//---MODULE EXPORTS---//

function round(num, place) {
  const pow = Math.pow(10, place);
  return (Math.round(num * pow) / pow);
}

function formDate(dateString) {
  const dateFields = dateString.split("/");
  const year = dateFields[0];
  const month = dateFields[1];
  const day = dateFields[2];
  const date = new Date(year, month, day);
  return (date);
}

function getArrayMax(array) {
  return Math.max.apply(null, array);
}

function puke(obj) {
  return <pre> { JSON.stringify(obj, 2, ' ') } </pre>
}

export {
  round,
  formDate,
  getArrayMax,
  puke
}
