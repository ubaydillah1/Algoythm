function quickSortByMe(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortByMe(left), pivot, ...quickSortByMe(right)];
}

const unsortedArray = [2, 4, -1, 6, -8];
console.log(quickSortByMe(unsortedArray));
