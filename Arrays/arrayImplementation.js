class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //get an item
  get(index) {
    return this.data[index];
  }

  //add to end
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //delete from end
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //delete from a specific position
  delete(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  //add item to specific position
  insert(index, item) {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = item;
    this.length++;
    return this.length;
  }
}

const newArray = new MyArray();

newArray.push("a");
newArray.push("b");
newArray.push("c");
newArray.push("d");
newArray.push("e");
newArray.push("f");
newArray.push("g");
console.log(newArray);

console.log(newArray.get(2));

newArray.pop();
console.log(newArray);

newArray.delete(1);
console.log(newArray);

newArray.insert(2, "boo");
console.log(newArray);
