// me (failed)
function bynarySearchMe(arr, n) {
  let lenghtAfterDevide = arr.length;
  for (let i = 0; i > arr.lenghtAfterDevide; i++) {
    const middleNumber = Math.floor(lenghtAfterDevide / 2);
    if (arr[middleNumber] === n) {
    }
  }
}

// codeevolution - Big-O = O(log n)
function bynarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    console.log("left : ", leftIndex);
    console.log("right : ", rightIndex);
    console.log("middle : ", middleIndex, "\n");

    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}

console.log(bynarySearch([-1, 0, 1, 2, 3, 4, 5], 7));
