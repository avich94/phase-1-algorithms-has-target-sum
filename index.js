function hasTargetSum(array, target) {
  const sortedArray = array.sort((a, b) => a - b);
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex < endIndex) {
    const sum = sortedArray[startIndex] + sortedArray[endIndex];
    if (sum === target) {
      return true;
    } 
    if (sum < target) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

O(n)

*/

/* 
  Add your pseudocode here
  initialize two variables used as pointers in the array
  
  sort the array in ascending order

  start a while loop that checks if the start index is less than the end index

    declare a variable that is assigned to the value of start poiner + end pointer

    when the start pointer is less than the end pointer continue to loop

    initialize sum which is assigned to the value of pointers index location added together
      if the sum === target return true
      if the sum is less than the target increment the start index up one
      else decrement the end pointer one value and repeat the while loop


/*
  Add written explanation of your solution here
  This code first sorts the array in ascending value. It initializes two pointers which start on each end of the array.
  When the start pointer is less than the end pointer it initiates the loop. This allows the function to loop through each index and compare if they are
  equal to the sum value. If the sum is equal to the target value it returns true. If it is not it will increment the start index as long as the sum is less than the 
  target. If the sum is more than the end pointer will decrement and the loop will restart. If the function iterates through the whole array without a sum equal to the target
  it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([18, 4, 8], 9));
}

module.exports = hasTargetSum;
