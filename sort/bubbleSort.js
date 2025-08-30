function bubbleSortMe(arr) {
  let ishaveToRepeat;

  do {
    ishaveToRepeat = false;

    for (let i = 0; i < arr.length; i++) {
      let left = i;
      let right = i + 1;
      let temp;

      if (arr[right] < arr[left]) {
        temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        ishaveToRepeat = true;
      }
    }
  } while (ishaveToRepeat);

  return arr;
}

console.log(bubbleSortMe([-10, 5, 4, 3, 2]));

// codeevolution - Big-O = O(n^2)
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([-10, 5, 4, 3, 2]));
