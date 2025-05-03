const greeting = "Hi Theekshana!";

function revStr(string) {
  let j = string.length;
  let reversedArray = [];
  for (let i = 0; i < string.length; i++) {
    reversedArray.push(string[j - 1]);
    j--;
  }

  return reversedArray.join("");
}

console.log(revStr(greeting));
