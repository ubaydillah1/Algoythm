// me version
function fibonacci1(n) {
  if (n < 1) return [];
  if (n == 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    const resultLength = result.length;
    const newNumber = result[resultLength - 2] + result[resultLength - 1];
    result.push(newNumber);
  }

  return result;
}

console.log(fibonacci1(7));

// GPT version fix my code
function fibonacci2(n) {
  if (n < 1) return [];
  if (n == 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    const newNumber = result[i - 2] + result[i - 1];
    result.push(newNumber);
  }

  return result;
}

console.log(fibonacci2(7));

// Codeevolution version
function fibonacci3(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci3(7));

// Big - O = O(n)


// =======================================================
// Rekursive solution
function fibonacciWithRecursion(n) {
  let i = 0;
  let number = 0;

  if (i == n) return number;

  return fibonacciWithRecursion(n) +fibonacciWithRecursion(n + n);
}

// wrong