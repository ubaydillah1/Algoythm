function insertionSortMe(arr) {
  for (let i = 1; i < arr.length; i++) {
    let NTI = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > NTI) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = NTI;
  }

  return arr;
}

const arr = [8, 20, -1, -5, 30];

console.log(insertionSortMe(arr));
