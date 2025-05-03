class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // console.log("this before set =", this.data);
    let address = this._hash(key); //generate address based on hash

    //if nothing in the memory
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    //if already exists(just push to exsisting array)
    else {
      this.data[address].push([key, value]);
    }

    // console.log("this after set =", this.data);
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    // console.log(bucket);
    if (!bucket) {
      return undefined;
    }
    //look for the key in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    //key not found
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        //something is in current bucket
        for (let j = 0; j < currentBucket.length; j++) {
          keysArray.push(currentBucket[j][0]);
        }
      }
    }

    return keysArray;
  }

  get1(key) {
    let address = this._hash(key);
    console.log("GET address = ", address);
    console.log(this.data[address]);
    if (this.data[address].length === 0) {
      console.log("Noooo");
      return undefined;
    } else if (
      this.data[address].length === 1 &&
      this.data[address][0][0] === key
    ) {
      console.log("yoo");
      return this.data[address][0][1];
    } else {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) {
          console.log("yooo found");
          return this.data[address][i][1];
        }
      }
      console.log("nooo");
    }
  }
}
const myHashTable = new HashTable(50);
// console.log(myHashTable);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 40);
myHashTable.set("Oranges", 100);
myHashTable.set("Bananas", 10);
myHashTable.set("Mango", 2);

console.log(myHashTable.data);
console.log("----------------------------------------");

console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get(""));
console.log(myHashTable.get("Bananas"));

console.log("--------------------keys--------------------");

console.log(myHashTable.keys());
