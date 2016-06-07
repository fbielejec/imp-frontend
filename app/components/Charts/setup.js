/**
 * @fbielejec
 */

//---MODULE EXPORTS---//

const margin = {
  // top: 50,
  // right: 100,
  // bottom: 100,
  // left: 70,
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
}

// const width = window.innerWidth - margin.left - margin.right;
// const height = window.innerHeight - margin.top - margin.bottom;

const width = 1200 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

export {
  margin,
  width,
  height
};
