
function NombreUn(tab) {
  let count = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === 1) {
      count++;
    }
  }
  return count;
}

module.exports = { NombreUn };
