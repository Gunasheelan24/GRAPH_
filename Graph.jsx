class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    } else {
      return false;
    }
  }

  addEdge(nodeOne, nodeTwo) {
    if (this.adjacencyList[nodeOne] && this.adjacencyList[nodeTwo]) {
      this.adjacencyList[nodeOne].push(nodeTwo);
      this.adjacencyList[nodeTwo].push(nodeOne);
      return true;
    } else {
      return false;
    }
  }

  removeEdge(nodeOne, nodeTwo) {
    if (this.adjacencyList[nodeOne] && this.adjacencyList[nodeTwo]) {
      this.adjacencyList[nodeOne] = this.adjacencyList[nodeOne].filter(
        (item) => {
          if (item !== nodeTwo) {
            return item;
          }
        }
      );
      this.adjacencyList[nodeTwo] = this.adjacencyList[nodeTwo].filter(
        (item) => {
          if (item !== nodeOne) {
            return item;
          }
        }
      );
      return true;
    } else {
      return false;
    }
  }

  removeNode(nodeOne) {
    if (!this.adjacencyList[nodeOne]) return undefined;
    while (this.adjacencyList[nodeOne].length) {
      const removeEdge = this.adjacencyList[nodeOne].pop();
      this.removeEdge(nodeOne, removeEdge);
    }
    delete this.adjacencyList[nodeOne];
    return true;
  }
}

const newGraph = new Graph();
newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addEdge('A', 'D');
newGraph.addEdge('D', 'C');
newGraph.addEdge('C', 'B');
newGraph.addEdge('A', 'B');
newGraph.removeNode('A');
newGraph.removeNode('B');
newGraph.removeNode('C');
newGraph.removeNode('D');
console.log(newGraph);
