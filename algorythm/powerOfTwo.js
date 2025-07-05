// Me
// Time Complexity = O(n)
function isPowerOfTwo1(n) {
  if (n < 0) return false;
  for (let i = 0; i <= n / 2; i++) {
    if (Math.pow(2, i) === n) return true;
  }

  return false;
}

console.log(isPowerOfTwo1(2));
console.log(isPowerOfTwo1(43));

// codeevolution
function isPowerOfTwo2(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

// Big - O = O(log n) top

// Big - O = O(1)
function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo2(2));
console.log(isPowerOfTwo2(43));
