const cases = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const getNumber = x => cases[x];

const convertDecimal = roman => {
  numbers = roman
    .split("")
    .reverse()
    .map(getNumber);

  return numbers.reduce((acc, curr, i) => {
    if (curr < numbers[i - 1]) {
      return acc - curr;
    }
    return  acc + curr;
  });
};

module.exports = {
  convertDecimal
};
