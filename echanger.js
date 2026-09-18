
function Echanger(tab, i, j) {
  const temp = tab[i];
  tab[i] = tab[j];
  tab[j] = temp;
}

module.exports = { Echanger };
