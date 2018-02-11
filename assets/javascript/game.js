var words = ['MERCURY', 'JUPITER', 'ECLIPSE', 'GALAXY', 'ASTEROID', 'NEBULA', 'EUROPA', 'COMET']
var currentWord;
var currentLetters = [];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userGuess;
var newGuesses = []; 
var correctGuesses = [];
var incorrectGuesses = [];

var answerArray = [];
var remainingLetters = [];

var isMatch = null;

var guessesRemaining = 15; 
var wins = 0;
var losses = 0;


// At start of game
function startUp() {

	// GENERATE WORD
	// Choose a random word
	currentWord = words[Math.floor(Math.random() * words.length)];

	// Split current word into array of letters
	currentLetters = currentWord.split("");
	console.log(currentWord + " " + currentLetters);

	// Display corresponding number of spaces
  	for (var i = 0; i < currentLetters.length; i++) {
    	answerArray[i] = "_";
	}
	document.getElementById("word-spaces").innerHTML = answerArray.join(" ");

	// Reset variables upon word generation
	// Set amount of letters left to guess to word length
	remainingLetters = currentLetters.length;
	newGuesses = []; 
	incorrectGuesses = [];
	correctGuesses = [];
	correctGuessesDisplay = [];
	guessesRemaining = 15;
	document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
}

// USER INPUT
// Whenever the user presses a key
document.onkeyup = function(event) {

	// Determine which key is pressed 
	// Change to upper case
	var userGuess = event.key; 
	userGuess = userGuess.toUpperCase();

	// If guess has not been used before and is a valid letter
	if (newGuesses.indexOf(userGuess) == -1 && (alphabet.indexOf(userGuess) != -1) ) {

		// Store in array 'newGuesses'
		newGuesses.push(userGuess);
		console.log("New valid guesses: " + newGuesses);

		// Remove a remaining guess
		guessesRemaining--;
		document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

		// CHECK FOR MATCHES
		// If guess is not a match
		if (currentLetters.indexOf(userGuess) == -1) {
			// Store letter in 'incorrectGuesses' array
			incorrectGuesses.push(userGuess);
			// Display in 'Letters Already Guessed' area on screen
			document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses;
		}
		// If guess is a match
		else {
			// Store letter in 'correctGuesses' array
			correctGuesses.push(userGuess);
			console.log("Correct guesses: " + correctGuesses);

			// Convert '_' to letter -- NOT WORKING
			for (var j = 0; j < currentWord.length; j++) {
				if (currentLetters[j] === userGuess) {
					answerArray[j] = userGuess;
					remainingLetters--;
					document.getElementById("word-spaces").innerHTML = answerArray.join(" ");
					console.log(remainingLetters);
					console.log("Answer Array: " + answerArray);
					if () {
						
					}
				}
			}
		}
	}
}


/*

			
// COVERT SPACE TO LETTER

// Attempt 1
for (var i = 0; i < currentWord.length; i++) {
				if (currentWord[i] === userGuess) {
					answerArray[i] = userGuess;
					document.getElementById("word-spaces").innerHTML = answerArray;
					console.log("Answer Array: " + answerArray);
				}
			}


// Attempt 2
if (correctGuesses.length == 0) {
	for (var i = 0; i < currentLetters.length; i++) {
		correctGuessesDisplay[i] = "_";
	}
} 
else {
	for (var i = 0; i < currentLetters.length; i++) {
		if (correctGuessesDisplay[i] != currentLetters[i]) {
			for (var j = 0; j < correctGuesses.length; j++) {
				if (correctGuesses[j] == currentLetters[i]) {
					correctGuessesDisplay[i] == currentLetters[i];
					document.getElementById("word-spaces").innerHTML = correctGuessesDisplay.join(" ");
				}
				else {
					correctGuessesDisplay[i] = "_";
				}
			}	
		}
	}
}


		document.getElementById("wins").innerHTML = (wins);
		for (var i=0; i < allGuesses.length; i++) {
			
		}

		if (keysPressedTotal.indexOf(userGuessUpper) === -1) { //new letter
			//Add to list of guessed letters
			var newKeysPressed = [];
			newKeysPressed.push(userGuessUpper);
			console.log(newKeysPressed);

	// Check if key pressed has been pressed before 
	// If key has not been pressed before
	if (keysPressedTotal.indexOf(userGuessUpper) === -1) {  
		
	}

		// Take away 1 guesses remaining
		guessesRemaining -= 1;
		document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

		// Check if key pressed is in word
		// If key pressed is in word
		if (currentWord.includes(userGuessUpper)) { // *** APPROPRIATE USE? ***
			// Find the indices of the guess in the word
			var a = [];// *** WHERE CAN I FIND CONTENTS OF THIS ARRAY? SHOWS EMPTY IN CONSOLE.LOG ***
			function locations(substring, string) {
				i=-1;
				while((i=string.indexOf(substring, i+1)) >= 0) a.push(i);
				return a;
			}
			//push to right array*, else push to wrong
			var a = locations(userGuessUpper, currentWord);
			// alert(a);


			for (var i = a.length - 1; i >= 0; i--) {
				currentWord[a[i]] = userGuessUpper;
				alert(currentWord[a[i]]);
			}


			// Change corresponding '_' to key pressed
			// Loop through the word and change the letter to letter guessed at the indices
				/* var ? = '_ _ _ _' */ // *** WHAT VARIABLE IS HOLDING THE SPACES NOW? ***
				/* ?.replaceAt(a, userGuessUpper) */ // *** DOES A HOLD THE INDEX NOW? CAN THIS BE SET TO A VARIABLE? ***
				/* document.getElementById("word-spaces").innerHTML = ?; */ // REPLACE ? WITH VARIABLE HOLDING CHANGE.

			// Place correct guesses in array
/*			var matched_PrivateArray = []; // *** WHY ONLY STORING 1 LETTER AT A TIME? ***
			matched_PrivateArray.push(userGuessUpper);
			console.log(matched_PrivateArray);
		}
			
		// Else -- key pressed not in word
		else {
			// Display letter in 'letters already guessed' area on screen after filtering duplicates and correct guesses
			// Filter duplicates from original array	
			var uniq = [];
			var uniq = keysPressedTotal.reduce(function(a,b) { // *** WHY ONLY FILTERS IF FIRST LETTER PRESSED IS DUPLICATE? ***
				if (a.indexOf(b) < 0 ) a.push(b);
				return a;
			},[]);
			console.log(uniq, keysPressedTotal);
			document.getElementById("incorrect-guesses").innerHTML = uniq; // Temporary testing, remove after filter out correct guesses

			// Filter out correct guesses


			/* document.getElementById("incorrect-guesses").innerHTML = incorrectGuessesDisplay; */
		
		
	// When guesses remaining = 0

		// Restart game

	// When all letters in word are matched

		// Add 1 to Wins

		// Restart game		
/*	} */









	

