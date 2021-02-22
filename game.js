// START
document.getElementById("btn").addEventListener("click", countdownBeforeStart);

// Globals
let countdownTime = 3;
let score = 0;
let level = 1;
let time = 4;
let isPlaying;
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentLetter = document.querySelector("#text");
const scoreDisplay = document.querySelector("#score-value");
const timeDisplay = document.querySelector("#time-value");
const levelDisplay = document.querySelector("#level-value");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const middleContainerUp = document.querySelector("#middle-container-up");
const middleContainerMiddle = document.querySelector("#middle-container-middle");

// Countdown before start
function countdownBeforeStart(){
timeDisplay.innerHTML = time;
scoreDisplay.innerHTML = score;
levelDisplay.innerHTML = level;
document.getElementById("btn").classList.add("hidden");
currentLetter.innerHTML = "";
middleContainerUp.classList.remove("hidden");
middleContainerUp.style.fontSize = "2rem";
currentLetter.style.fontSize = "3.5rem";
middleContainerMiddle.style.textAlign = "center";
let countdownIntervalLet = setInterval(countdownInterval, 1000);
function countdownInterval (){
    if (countdownTime > 0){
    currentLetter.innerHTML = countdownTime;
    countdownTime--;
    } else {
    clearInterval (countdownIntervalLet);
    init();
};};};

// Initialize Game
function init(){
    // Set autofocus on wordInput
    wordInput.focus();
    // Load letter from array
    showLetter(letters);
    // Show old time, level and check if input matches with letter and start Round
    timeDisplay.innerHTML = time;
    scoreDisplay.innerHTML = score;
    levelDisplay.innerHTML = level;
    wordInput.addEventListener("input", startRound);
    // Call Time Left every second
    function countdownDetermine () {
        if (time < 2) {
            window.int1 = setInterval(countdown, 0);
        } else {
            window.int1 = setInterval(countdown, 1000);
        }};
    countdownDetermine();
    // Check if game is over (all the time)
    window.int2 = setInterval (checkStatus, 50);
    // Check if pressed key equals to letter
};

// Start Match and new Round
function startRound (){
    if(matchInput()){
        isPlaying = true;
        // Determine level, based on score
        determineLevel();
        levelDisplay.innerHTML = level;
        // Determine time, based on level
        determineTime();
        timeDisplay.innerHTML = time;
        showLetter(letters);
        wordInput.value="";
        score++;
        scoreDisplay.innerHTML = score;
    }
} 

//Does the input match the letter
function matchInput (){
    // Clear input if typed value does not match
    if((wordInput.value.length > 0) && (wordInput.value !== currentLetter.innerHTML)){
        wordInput.value = "";
        matchInput ();
    } else if (wordInput.value === currentLetter.innerHTML){
        message.innerHTML = "Correct!";
        // Let the correct word fade away
        correctFade ();
        return true;
    } else {
        message.innerHTML = "";
        return false;
    };
};

// Pick and show random letter
function showLetter(letters){
    // Generate random Index
    const randIndex = Math.floor(Math.random() * letters.length);
    // Output random letter
    currentLetter.innerHTML = letters[randIndex];
};
    

// Time Left
function countdown(){ 
    //Check if time has nog run out
    if(time >= 1){
        // Decrement time
        time--;
} else if (time === 0){
        // Game is over
        isPlaying = false;
    } 
    // Show new time
    timeDisplay.innerHTML = time;
};


// Check Status
function checkStatus(){
    if(level===10){
        finished()
    }
    else if(!isPlaying && time === 0){
        lost();
    };
};

// let correct word fade away
function correctFade (){
    setTimeout(changeCorrect, 300);
}
function changeCorrect(){
    message.innerHTML = "";
};

// Determine level
function determineLevel() {
if (score < 5){
    level = 1;
}    else if (score < 10){
    level = 2; 
} else if (score < 15){
    level = 3;
} else if (score < 20){
    level = 4;
} else if (score < 25){
    level = 5;
} else if (score < 30){
    level = 6;
} else if (score < 35){
    level = 7;
} else if (score < 40){
    level = 8;
} else if (score < 45){
    level = 9;
} else if (score < 50){
    level = 10;};
    };

// Determine time
function determineTime(){
    if (level === 1){
        time = 4;
    }   else if (level === 2){
        time = 3;
    }   else if (level === 3){
            time = 2
    }   else {
        time = 1;
};};

// Lost
function lost (){
currentLetter.innerHTML = "Game Over!!!";
isPlaying = true;
countdownTime = 3;
score = 0;
level = 1;
time = 4;
document.getElementById("btn").classList.remove("hidden");
clearInterval(window.int1);
clearInterval(window.int2);
}

// Finished
function finished (){
currentLetter.innerHTML = "You finished the game!";
isPlaying = true;
countdownTime = 3;
score = 0;
level = 1;
time = 4;
document.getElementById("btn").classList.remove("hidden");
clearInterval(window.int1);
clearInterval(window.int2);
}