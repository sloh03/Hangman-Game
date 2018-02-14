var words = [
	'MERCURY', 
	'JUPITER', 
	'ECLIPSE', 
	'GALAXY', 
	'ASTEROID', 
	'NEBULA',
	'METEOR', 
	'EUROPA',
	'SATELLITE',
	'COMET', 
	'ASTRONAUT', 
	'SPACESHIP',
	'URANUS',
	'NEPTUNE', 
	'PLANET',
	'MOON',
	'TITAN', 
	'PLUTO', 
	'SUPERNOVA', 
	'ORBIT', 
	'SATURN', 
	'VENUS', 
	'EARTH', 
	'MARS', 
	'WORMHOLE', 
	'STAR' 
];
var currentWord;
var currentLetters = [];

var alphabet = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
	'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var userGuess;
var newGuesses = []; 
var correctGuesses = [];
var incorrectGuesses = [];

var answerArray = [];
var remainingLetters = [];

var guessesRemaining = 15; 
var wins = 0;
var losses = 0;


// START OR RESET GAME
function startUp() {
	// Clear arrays
	answerArray = [];
	newGuesses = []; 
	incorrectGuesses = [];
	correctGuesses = [];
	correctGuessesDisplay = [];

	// GENERATE WORD
	// Choose a random word
	currentWord = words[Math.floor(Math.random() * words.length)];

	// Split current word into array of letters
	currentLetters = currentWord.split("");
	console.log("New word: " + currentWord + " " + currentLetters);

	// Display corresponding number of spaces
  	for (var i = 0; i < currentWord.length; i++) {
    	answerArray[i] = "_";
	}
	document.getElementById("word-spaces").innerHTML = answerArray.join(" ");

	// Reset variables
	// Set amount of letters left to guess to word length
	remainingLetters = currentWord.length;
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
		console.log("Valid new guesses: " + newGuesses);

		// Remove a remaining guess
		guessesRemaining--;
		document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

		// CHECK FOR MATCHES
		// If guess is not a match
		if (currentLetters.indexOf(userGuess) == -1) {
			// Store letter in 'incorrectGuesses' array and display on screen
			incorrectGuesses.push(userGuess);
			document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses.join(" ");
		}
		// If guess is a match
		else {
			// Store letter in 'correctGuesses' array
			correctGuesses.push(userGuess);
			console.log("Correct guesses: " + correctGuesses);

			// Convert '_' to letter
			for (var j = 0; j < currentWord.length; j++) {
				// When guess matches letter at index 'j'
				if (currentLetters[j] === userGuess) {
					// Store guess in answer array at index 'j' and display on screen
					answerArray[j] = userGuess;
					// There is one less letter to guess
					remainingLetters--;
					document.getElementById("word-spaces").innerHTML = answerArray.join(" ");
					console.log("Remaining Letters: " + remainingLetters);
					console.log("Answer Array: " + answerArray);
				}
			}
		}
	}
	// RESTART ON WIN OR LOSS
	// Add win and restart
	if (remainingLetters === 0) {
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startUp();
	}
	// Add loss and restart
	if (guessesRemaining === 0) {
		losses++;
		document.getElementById("losses").innerHTML = losses;
		startUp();
	}
}