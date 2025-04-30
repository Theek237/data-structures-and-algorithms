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
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const newArray = new MyArray();

newArray.push("a");
newArray.push("b");
newArray.push("c");
newArray.push("d");
console.log(newArray);

console.log(newArray.get(2));

newArray.pop();
console.log(newArray);

newArray.delete(1);
console.log(newArray);
