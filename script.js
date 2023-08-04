function calculateMinCost() {
  // Get the rope lengths from the input field.
  var ropeLengths = document.getElementById("rope-lengths").value;
  var ropeLengthsArray = ropeLengths.split(",");

  // Create a min-heap to store the rope lengths.
  var minHeap = new PriorityQueue();
  for (var i = 0; i < ropeLengthsArray.length; i++) {
    minHeap.enqueue(parseInt(ropeLengthsArray[i]));
  }

  // Initialize the minimum cost to 0.
  var minCost = 0;

  // While there are more than two ropes in the min-heap.
  while (minHeap.size() > 2) {
    // Extract the two smallest ropes from the min-heap.
    var rope1 = minHeap.dequeue();
    var rope2 = minHeap.dequeue();

    // Calculate the cost of connecting the two ropes.
    var cost = rope1 + rope2;

    // Add the cost to the minimum cost.
    minCost += cost;

    // Enqueue the new rope into the min-heap.
    minHeap.enqueue(cost);
  }

  // Get the remaining rope from the min-heap.
  var rope = minHeap.dequeue();

  // Add the cost of connecting the remaining rope to the minimum cost.
  minCost += rope;

  // Set the result text.
  document.getElementById("result").innerHTML = minCost;
}
