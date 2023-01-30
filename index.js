var blueOnBoard = 0;
var redOnBoard = 0;
var blueInHole = 0;
var redInHole = 0;
var blueScore = 0;
var redScore = 0;

function updateScore() {
    document.getElementById("bluescore").innerHTML = blueScore;
    document.getElementById("redscore").innerHTML = redScore;
}
function reset() {
    blueOnBoard = 0;
    redOnBoard = 0;
    blueInHole = 0;
    redInHole = 0;
}

function blueBoard(amount) {
    blueOnBoard = amount;
}
function redBoard(amount) {
    redOnBoard = amount;
}
function blueHole(amount) {
    blueInHole = amount;
}
function redHole(amount) {
    redInHole = amount;
}
function calculateScore() {
    if (blueOnBoard + (blueInHole * 3) > redOnBoard + (redInHole * 3)) {
        blueScore = blueScore + ((blueOnBoard + (blueInHole * 3)) - (redOnBoard + (redInHole * 3)));
        reset();
    } else if (redOnBoard + (redInHole * 3) > blueOnBoard + (blueInHole * 3)) {
        redScore = redScore + ((redOnBoard + (redInHole * 3)) - (blueOnBoard + (blueInHole * 3)));
        reset();
    } else {
        reset();
    }
}
function nextRound() {
    if(blueOnBoard + blueInHole <= 4 && redOnBoard + redInHole <= 4) {
        calculateScore();
        updateScore();
    } else {
        alert("A team cannot have more than four bags.");
        reset();
    }
}
window.onload = function() {
    if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
        document.body.addEventListener('touchstart', function() {}, false);
    }
}

function setBlueScore() {
    score = Number(prompt("Enter a score for blue team", blueScore));
    if (blueScore != NaN) {
        blueScore = score;
        updateScore();
    }
}
function setRedScore() {
    score = Number(prompt("Enter a score for red team", redScore));
    if (redScore != NaN) {
        redScore = score;
        updateScore();
    }
}