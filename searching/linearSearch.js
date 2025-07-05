// me version
// Big-O = O(n)
function linearSearch(arr, n) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return result;

    result += 1;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 1));

// codeevolution
// Big-O = O(n)
function linearSearch2(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }

  return -1;
}

console.log(linearSearch2([1, 2, 3, 4, 5], 5));
