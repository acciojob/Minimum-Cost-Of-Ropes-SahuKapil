function calculateMinCost() {
  const inputElement = document.getElementById("rope-lengths");
  const resultElement = document.getElementById("result");
  
  const ropeLengths = inputElement.value.split(",").map(str => parseInt(str.trim()));
  const minCost = minimumCostOfRopes(ropeLengths);
  
  resultElement.innerText = "Minimum cost: " + minCost;
}

function minimumCostOfRopes(ropes) {
  // Use a priority queue (min heap) to efficiently find the minimum
  const PriorityQueue = require('./priorityQueue'); // Assuming you have the PriorityQueue implementation

  const pq = new PriorityQueue();
  
  for (const rope of ropes) {
    pq.enqueue(rope);
  }

  let totalCost = 0;
  while (pq.size() > 1) {
    const sum = pq.dequeue() + pq.dequeue();
    totalCost += sum;
    pq.enqueue(sum);
  }

  // return totalCost;
	console.log(totalCost);
}
