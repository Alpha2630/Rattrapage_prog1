
function NegatifPositif(tab) {
  let left = 0;
  let right = tab.length - 1;

  while (left <= right) {
    while (left <= right && tab[left] <= 0) {
      left++;
    }
    while (left <= right && tab[right] > 0) {
      right--;
    }
    if (left < right) {
      const temp = tab[left];
      tab[left] = tab[right];
      tab[right] = temp;
      left++;
      right--;
    }
  }

  return tab;
}

module.exports = { NegatifPositif };
