// Me version
const faktorial = (n) => {
  if (n == 0) {
    return 1;
  }

  return n * faktorial(n - 1);
};

console.log(faktorial(5));

// codeevolution version
function factorial(n) {
  let result = 1; 

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(2));


