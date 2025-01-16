class Graph {
    constructor() {
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }
    

    bfs(startingNode) {
        let visited = {};
        let queue = [];
        
        visited[startingNode] = true;
        queue.push(startingNode);
        
        while (queue.length > 0) {
            let vertex = queue.shift();
            console.log(vertex);
            
            let adjacentNodes = this.AdjList.get(vertex);
            for (let i in adjacentNodes) {
                let adjacentVertex = adjacentNodes[i];
                if (!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true;
                    queue.push(adjacentVertex);
                }
            }
        }
    }

    print() {
        for (let [key, value] of this.AdjList) {
            console.log(`${key} -> ${value.join(", ")}`);
        }
    }
}

// Test implementation
const graph = new Graph();

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');


console.log("Graph structure:");
graph.print();

console.log("\nBFS starting from vertex A:");
graph.bfs('A');