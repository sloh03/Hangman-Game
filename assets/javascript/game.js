/*

	// Array of all options of guesses
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// Variables holding number of wins and guesses available
    var wins = 0;
    

*/

var answerArray = [];
var combineSpaces;

var keysPressed_PrivateArray = []; // Contains all keys pressed

var guessesRemaining = 15; 


// Array of the word bank
var words = ['MERCURY', 'JUPITER', 'ECLIPSE', 'GALAXY', 'ASTEROID', 'NEBULA', 'EUROPA', 'COMET']

// This function will randomly select a word from the wordbank
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);



//ON PAGE LOAD
// Count the amount of letters in the word and show in spaces '_' on page
function startUp() {
  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
  }
  combineSpaces = answerArray.join(" ");
  document.getElementById("word-spaces").innerHTML = combineSpaces;
}



// This function is run whenever the user presses a key
document.onkeyup = function(event) {

	// Determine which key is pressed, change to upper case and store in array containing all guesses
	var userGuess = event.key; 
	var userGuessUpper = userGuess.toUpperCase();

	keysPressed_PrivateArray.push(userGuessUpper);
	console.log(keysPressed_PrivateArray);

	// Check if key pressed has been pressed before 
	// If (pressed before) 
	if (keysPressed_PrivateArray.indexOf(userGuessUpper) === -1) {  // *** NOT WORKING, STILL TAKING GUESSES AWAY ***
		// Do nothing
	} 

	// Else (not used)
	else {

		// Take away 1 guesses remaining
		guessesRemaining -= 1;
		document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
		
		// Check if key pressed is in word
		// If key pressed is in word
		if (currentWord.includes(userGuessUpper)) { // *** APPROPRIATE USE? ***
			// Find the indices of the guess in the word
			var a=[]; // *** WHERE CAN I FIND CONTENTS OF THIS ARRAY? SHOWS EMPTY IN CONSOLE.LOG ***
			function locations(substring, string) {
				i=-1;
				while((i=string.indexOf(substring, i+1)) >= 0) a.push(i);
				return a;
			}

			console.log(locations(userGuessUpper, currentWord));
			// Change corresponding '_' to key pressed
				/* var ? = '_ _ _ _' */ // *** WHAT VARIABLE IS HOLDING THE SPACES NOW? ***
				/* ?.replaceAt(a, userGuessUpper) */ // *** DOES A HOLD THE INDEX NOW? CAN THIS BE SET TO A VARIABLE? ***
				/* document.getElementById("word-spaces").innerHTML = ?; */ // REPLACE ? WITH VARIABLE HOLDING CHANGE.

			// Place correct guesses in array
			var matched_PrivateArray = []; // *** WHY ONLY STORING 1 LETTER AT A TIME? ***
			matched_PrivateArray.push(userGuessUpper);
			console.log(matched_PrivateArray);
		}
			
		// Else -- key pressed not in word
		else {
			// Display letter in 'letters already guessed' area on screen after filtering duplicates and correct guesses
			// Filter duplicates from original array	
			var uniq = [];
			var uniq = keysPressed_PrivateArray.reduce(function(a,b) { // *** WHY ONLY FILTERS IF FIRST LETTER PRESSED IS DUPLICATE? ***
				if (a.indexOf(b) < 0 ) a.push(b);
				return a;
			},[]);
			console.log(uniq, keysPressed_PrivateArray);
			document.getElementById("incorrect-guesses").innerHTML = uniq; // Temporary testing, remove after filter out correct guesses

			// Filter out correct guesses


			/* document.getElementById("incorrect-guesses").innerHTML = incorrectGuessesDisplay; */
		}
				
	}

}

// When guesses remaining = 0

	// Display game over

	// Restart game

// When all letters in word are matched

	// Display you win

	// Restart game





	

