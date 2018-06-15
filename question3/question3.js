function changePossibilities(amount, denominations) {
  var total = 0;

  for (var i = 0; i < denominations.length; i++) {
    if (denominations[0] + denominations[i] === amount) {
      total += 1;
    } 
  }
  for (var i = 0; i < denominations.length; i++){
  if (denominations[i] * amount === amount) {
    total += 1
    }
  }
  for (var i = 0; i < denominations.length; i++){
  if (amount % denominations[i] === 0) {
    total += 1
    }
  }
  return total;
}

changePossibilities(4, [1, 2, 3]);

// Thought Process
// There may be a possibly faster answer but this came to mind the quickest. 
// This could probably be refactored to have better Big O Notation.
// Run several loops that check for adding, multiplication, and division.
// Make a total variable to keep track of the count. 
// If the amount argument can be divided without a remainder, then a match 
// has been found for one of the combinations. 
// If the number in the iteration can be multiplied times the amount argument
// and it is equal to the argument, then the number 1 has been found.
// If the first number in the denominations array can be added with any other 
// number in the array and it equals the amount argument, a match has been found.
