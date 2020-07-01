// TODO create global variable "guessInt" initialized to the value of 6
var guessInt = 6;
// TODO create global variable "guessStr" initialized to "You have ", 
//      concatenated with variable "guessInt", concatenated with " tries left" 
var guessStr = "You have " + guessInt + " tries left.";
// TODO declare function "getWord" with no parameters
function getWord()
{
	// TODO create an Array "words" using the condensed method populated with a minimum of
	// 	    15 words of your choosing
	var words = ["steadfast","oranges","theory","unbiased","wind","fire","stamp","beg","erratic","shock","alert","sedate","elated","waiting","level"];
	
	// TODO create variable "index" set equal to function call Math.floor()
	//      passing as an argument function call (Math.random() multiplied by the 
	//      length of "words" array)
	var index = Math.floor(Math.random() * words.length);
	// TODO return reference to "words" array using "index" as the index value
	return words[index];
}

// TODO define function "getDisplay" receiving parameter "word"
	function getDisplay(word)
{   
	// TODO create variable "display" initialized to an empty string
	var display = "";
	// TODO write a for loop with looping variable "i" that starts at index 0
	//      loops until "i" is less than the length of parameter "word", 
	//      incrementing "i" by 1 for each iteration
	for (var i=0; i < word.length; i++)
	{
		// TODO update variable "display" setting it equal to itself concatenated with
		//      explicit text "-"
		display = display + "-";
	}
	
	// TODO return variable "display"
	return display;
	}

// TODO declare function "isLetterInWord" receiving as parameters "word" and "letter"
	function isLetterInWord(word,letter)
{		
	// TODO using the conditional "if" statement check is parameter "word" is equal to the
	//      value of null OR variable "guessInt" is equal to the value of 0
		if (word === null || guessInt === 0)
	{
		// TODO if the condition evaluates true "return"
			return true;
	}
	// TODO using the "else" leg of the condition
		else
	{
		// TODO using the conditional "if" statement check if function call ".search()"
		//      on parameter "word" passing parameter "letter" as an argument is NOT equal to value -1 
				if (word.search(letter) != -1)
		{   
			// TODO if the condition evaluates true call function "setLetter" passing
			//      as arguments parameter "word", parameter "letter", and HTML element with
			//      id "theDashes" .innerHTML **HINT: use method document.getElementById().innerHTML
				setLetter(word,letter,document.getElementById("theDashes").innerHTML);
		}
		// TODO using the "else" leg of the condition
				else
		{
			// TODO decrement the value of variable "guessInt" by the value of 1
					guessInt--;
			// TODO updated variable "guessStr" to "You have ", 
			//      concatenated with variable "guessInt", concatenated with 
			//      " tries left"
				var guessStr = "You have " + guessInt + " tries left.";
			// TODO set HTML element with id "guesses" equal to variable guessStr
				document.getElementById("guesses").innerHTML = guessStr;
		}
		
		// TODO call function isFinished, passing as arguments variable "word", 
		// HTML element with id "theDashes" innerHTML, and variable "guessInt"
			isFinished(word,document.getElementById("theDashes").innerHTML, guessInt);
	}
}

// TODO declare function "setLetter" receiving arguments "word", "letter", and "display"
function setLetter(word,letter,display)
{
	// TODO using the conditional "if" statement check is parameter "word" is equal to the
	//      value of null OR variable "guessInt" is equal to the value of 0
	if (word === null || guessInt === 0)
	{
		// TODO if the condition evaluates true "return"
		return true;
	}
	// TODO using the "else" leg of the condition
	else
	{
		// TODO using the looping "while" statement check if function call ".search()"
		//      on parameter "word" passing parameter "letter" as an argument is NOT equal to value -1 
			while ( word.search(letter) != -1 )
		{
			// TODO declare variable index set equal to .search() method on variable
			//      "word" passing parameter "letter" as an argument
				var index = word.search(letter);
			// TODO update parameter "display" set equal to method call .substr() on
			//      parameter "display" passing arguments 0 and variable "index"
			//      concatenated with parameter "letter" concatenated with method call
			//      .substr() on parameter "display" passing as an argument parameter
			//      index plus the value of 1
			display = display.substr (0,index) + letter + display.substr (index + 1);
			// TODO update parameter "word" set equal to method call .substr() on
			//      parameter "word" passing arguments 0 and variable "index"
			//      concatenated with an explicit "-" concatenated with method call
			//      .substr() on parameter "word" passing as an argument parameter
			//      index plus the value of 1
			word = word.substr(0,index + "-" + word.substr(index + 1));
		}
		
		// TODO update HTML element with id "theDashes" followed .innerHTML set equal 
		//      to parameter "display"
			document.getElementById("theDashes").innerHTML = display; 
		}
}

// TODO declare function "isFinished" receiving parameters "word", "display", and "left"
function isFinished(word,display,left)
{
	// TODO using the conditional "if" statement check is parameter "left" is greater
	//      than the value 0
	if (left > 0)
	{
		// TODO using the conditional "if" statement check is parameter "word" is equal
		//      to the parameter "display"
		if (word == display)
		{
			// TODO update HTML element with id "theStatus" followed .innerHTML set equal 
			//      to explicit text "Congratulations! You won!"
			document.getElementById("theStatus").innerHTML = "Congratulations! You won!";
		}
	}
	// TODO using the "else" leg of the condition
	else
	{
		// TODO update HTML element with id "theStatus" followed .innerHTML set equal 
		//      to explicit text "HANGMAN! Your man has been hanged! The word was " 
		//      concatenated with parameter "word"
		document.getElementById("theStatus").innerHTML = "HANGMAN! Your man has been hanged! The word was " + word + ".";
	}
}

// TODO declare function "start" with no parameters
function start()
{
	// TODO update variable "guessInt" initialized to the value of 6
	guessInt = 6;
	// TODO update variable "guessStr" initialized to "You have ", 
	//      concatenated with variable "guessInt", concatenated with " tries left" 
	guessStr = "You have " + guessInt + " tries left.";
	// TODO declare variable "word" set equal to function call "getWord"
	var word = getWord();
	// TODO declare variable "display" set equal to function call getDisplay passing 
	//      variable "word" as an argument 
	var display = getDisplay(word);
	// TODO update HTML element with id "guesses" followed .innerHTML set equal 
	//      to variable "guessStr"
	document.getElementById("guesses").innerHTML = guessStr;
	// TODO update HTML element with id "theWord" followed .innerHTML set equal 
	//      to variable "word"
	document.getElementById("theWord").innerHTML = word;
	// TODO update HTML element with id "theDashes" followed .innerHTML set equal
	//      to variable "display"
	document.getElementById("theDashes").innerHTML = display;
	// TODO update HTML element with id "theStatus" followed .innerHTML set equal
	//      an explicit empty string
	document.getElementById("theStatus").innerHTML = '';
}
