const stringArray = ["a", "b", "c", "d"];

//push - add to the end
stringArray.push("e"); //O(1)

//pop - delete from end
stringArray.pop(); //O(1)

//unshift - add to the begining
stringArray.unshift("z"); //O(n)

console.log(stringArray);
//splice - add to specific position
//array.splice(startIndex, deleteCount, item1, item2, ...)
stringArray.splice(2, 0, "boo"); //O(n)
console.log(stringArray);
