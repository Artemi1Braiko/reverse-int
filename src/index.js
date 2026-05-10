module.exports = function reverse(n) {
  const reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''), 10);
  return n < 0 ? -reversed : reversed;
};
