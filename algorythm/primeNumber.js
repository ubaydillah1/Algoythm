// me version fail
function isPrimeNumber1(n) {
  if (n <= 1) return false;
}

// codeevolution

function isPrimeNumber2(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrimeNumber2(5));
console.log(isPrimeNumber2(4));
console.log(isPrimeNumber2(16));
console.log(isPrimeNumber2(23));
// Big - O = O(sqrt(n))
