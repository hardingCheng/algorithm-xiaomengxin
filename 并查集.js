// 并查集的模板
class UnionFind {
  constructor(n) {
    // 初始化，并查集里面的所有节点的父节点都是自己
    this.parent = new Array(n).fill(0).map((value, index) => index);
    this.rank = new Array(n).fill(1);
    this.setCount = n; //连通分量的个数
  }
  // 这个时候父亲节点不是本身了，每个子节点是用节点值记录父亲节点，节点值存储的是父节点的下标
  findSet(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.findSet(this.parent[index]);
    }
    return this.parent[index];
  }
  unite(index1, index2) {
    let root1 = this.findSet(index1),
      root2 = this.findSet(index2);
    if (root1 !== root2) {
      // 判断两个集合里面的节点个数，节点个数少的集合往节点个数多的集合上面合并
      if (this.rank[root1] < this.rank[root2]) {
        [root1, root2] = [root2, root1]; // root1 是节点个数最多的集合
      }
      // 合并根节点
      this.parent[root2] = root1;
      // 计算已经合并的节点数量
      this.rank[root1] += this.rank[root2];
      this.setCount--;
    }
  }
  getCount() {
    return this.setCount;
  }
  connected(index1, index2) {
    // 来判断两个顶点，是否是一个连通分量
    let root1 = this.findSet(index1),
      root2 = this.findSet(index2);
    return root1 === root2;
  }
}
