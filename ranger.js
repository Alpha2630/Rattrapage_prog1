const { Echanger } = require('./echanger');

function Ranger(T) {
  let left = 0;
  let right = T.length - 1;

  while (left < right) {
    while (left < right && T[left] === 0) {
      left++;
    }
    while (left < right && T[right] === 1) {
      right--;
    }
    if (left < right) {
      Echanger(T, left, right);
      left++;
      right--;
    }
  }

  return T;
}

module.exports = { Ranger };
