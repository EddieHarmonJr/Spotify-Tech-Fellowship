function sortByString(s, t) {

  var repeat = {};
  var newString = '';
  
  for (let i = 0; i < s.length; i++) {
      var letter = s[i];
      if (repeat[letter]) {
          repeat[letter]++;
      } else {
          repeat[letter] = 1;
      }
  }
  for (var i = 0; i < t.length; i++) {
      newString += t[i].repeat(repeat[t[i]]);
  }
  return newString;
  };
  
  sortByString('weather', 'therapyw');

  //Thought Process
  // Have variables to hold repeated letters and the desired reordered string 
  // in the end. 
  // Make a loop that goes through the first string and saves every letter in
  // a variable for later.
  // Keep all repeated letters in the event the function is given words with 
  // more than 1 of the same letter.