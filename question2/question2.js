function decodeString(s) {

  var temporary = '';
  var characters = [];
  var numbers = [];
  var final = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']' && isNaN(parseInt(s[i]))) {
        characters.push(s[i]);
    } else if (parseInt(s[i])) {
        numbers.push(s[i]);
    } else {
        while (
            characters.length !== 0 &&
            characters[characters.length - 1] !== '['
        ) {
            temporary += characters.pop();
        }
        if (characters[characters.length - 1] === '[') {
            characters.pop();
            characters.push(temporary.repeat(numbers.pop()));
        }
        temporary = characters.pop();
    }
  }
    for (var j = temporary.length - 1; j >= 0; j--) {
        final += temporary[j];
    }
    return final;
  };
  
  decodeString("4[ab]");
  
  //Thought Process
  // Iterate through the string argument
  // If the iteration is not an opening bracket AND is not a number, turn it into a number (so "2" will turn into 2) then push it into an array called characters.
  // Otherwise, if it is not a bracket, turn it into a number anyway (since it is still considered a string) and push it into an array called numbers.
  // As long as the characters array has something n it and the last item is NOT an opening bracket, add that last item to the temporary array.
  // If the last item in the characters array IS an opening bracket, remove it, then push into the characters array what's inside the temporary string depending on the last number in the numbers array.
  // Set temporary equal to the last item in characters.
  // Make another loop and set the variable equal to temporary,length - 1 and add each iteration to final and return it. 
  