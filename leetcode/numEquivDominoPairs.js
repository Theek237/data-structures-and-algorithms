/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < dominoes.length; i++) {
    map.set([dominoes[i][0], dominoes[i][1]]);
    if (
      map.has(
        [dominoes[i][0], dominoes[i][1]] || [dominoes[i][1], dominoes[i][0]]
      )
    ) {
      count++;
    }
    map.set([dominoes[i][0], dominoes[i][1]]);
  }
  console.log(count);
};

numEquivDominoPairs([
  [1, 2],
  [2, 1],
  [3, 4],
  [5, 6],
]);
