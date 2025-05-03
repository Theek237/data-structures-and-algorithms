const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];

  let i = 0;
  let j = 0;
  let arr1Item = arr1[i];
  let arr2Item = arr2[j];

  //check input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);

    if (arr1Item > arr2Item || !arr1Item) {
      mergedArray.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    } else if (arr1Item < arr2Item || !arr2Item) {
      mergedArray.push(arr1Item);
      i++;
      arr1Item = arr1[i];
    } else {
      mergedArray.push(arr1Item);
      mergedArray.push(arr2Item);
      i++;
      j++;
      arr2Item = arr2[j];
      arr1Item = arr1[i];
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays(array1, array2));
