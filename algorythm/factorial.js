// Me version
const faktorial = (n) => {
  if (n == 0) {
    return 1;
  }

  return n * faktorial(n - 1);
};

console.log(faktorial(5));

// codeevolution version (best version by space compled)
// Big-O = O(n)
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(3));

// recursive function by codeevoulution
// Big-O = O(n)
function factorialRecursvice(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorialRecursvice(n - 1);
}

console.log(factorialRecursvice(100));

// solution for big n
function bigFactorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(bigFactorial(100));
