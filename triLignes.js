const { Echanger } = require('./echanger');
const { NombreUn } = require('./nombreUn');

function triLignes(M) {
  const m = M.length;

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < m - 1 - i; j++) {
      const nb1_j = NombreUn(M[j]);
      const nb1_j1 = NombreUn(M[j + 1]);

      if (nb1_j > nb1_j1) {
        Echanger(M, j, j + 1);
      }
    }
  }

  return M;
}

module.exports = { triLignes };
