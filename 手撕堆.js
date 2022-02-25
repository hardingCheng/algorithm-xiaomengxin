class Heap {
  constructor(data) {
    this.data = data;
    this.compartor = (a, b) => a - b;
    this.heapify();
  }
  size() {
    return this.data.length;
  }
  bubbleUp(index) {
    while (index) {
      let parentIndex = (index - 1) >> 1;
      if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  bubbleDown(index) {
    let lastIndex = this.size() - 1;
    while (index < lastIndex) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex < lastIndex &&
        this.compartor(this.data[leftIndex], this.data[index]) < 0
      ) {
        index = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.compartor(this.data[rightIndex], this.data[index]) < 0
      ) {
        index = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(findIndex, index);
      }
    }
  }
  swap(a, b) {
    if (a === b) {
      return;
    }
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
  peek() {
    if (!this.size()) return null;
    return this.data[0];
  }
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }
  poll() {
    if (!this.size()) return null;
    let res = this.data[0];
    this.data[0] = this.data.pop();
    if (this.size()) {
      this.bubbleDown(0);
    }
    return res;
  }
  heapify() {
    // 只有一个数，不需要调整
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }
}
