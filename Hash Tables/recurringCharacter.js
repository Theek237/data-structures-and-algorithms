/*We need to write a function that takes an array of integers
and returns the first recurring character (the first number
that appears more than once in the array). If no numbers recur,
the function should return undefined.*/

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter1(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}

function firstRecurringCharacter(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    console.log("itr ", i, "= ", map);
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = arr[i];
    }
  }
  console.log(map);
  return undefined;
}

/*function firstRecurringCharacter2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}*/

console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     console.log(this);
//   }
// }

// const myHashTable = new HashTable(10);
