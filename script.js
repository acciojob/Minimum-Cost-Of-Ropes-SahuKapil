function calculateMinCost(ropeLengths) {
  //your code here
  let cost = 0;
  let sortedLengths = ropeLengths.sort((a, b) => a - b); // sort the rope lengths in ascending order
  
  while (sortedLengths.length > 1) {
    // take the two smallest ropes
    let smallestRope = sortedLengths.shift();
    let secondSmallestRope = sortedLengths.shift();
    
    // add their lengths and insert the new rope back into the array
    let newRopeLength = smallestRope + secondSmallestRope;
    cost += newRopeLength;
    sortedLengths.push(newRopeLength);
    sortedLengths.sort((a, b) => a - b); // re-sort the array
  }
  
  return cost;
  
  
  
}  
