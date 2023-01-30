var blueOnBoard = 0;
var redOnBoard = 0;
var blueInHole = 0;
var redInHole = 0;
var blueScore = 0;
var redScore = 0;


var app = document.getElementById("app");
function start() {
    app.requestFullscreen()
	.then(function() {
		app.style.display = "block";
        document.getElementById("start").style.display = "none";
	})
	.catch(function(error) {
		alert("Fullscreen not supported");
	});
}


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
    if (!Number.isNaN(score)) {
        blueScore = score;
        updateScore();
    } else {
        alert("You did not enter a number.")
    }
}
function setRedScore() {
    score = Number(prompt("Enter a score for red team", redScore));
    if (!Number.isNaN(score)) {
        redScore = score;
        updateScore();
    } else {
        alert("You did not enter a number.")
    }
}
function resetAll() {
    reset();
    blueScore = 0;
    redScore = 0;
    updateScore();
}
function fullscreenchanged() {
    if(!document.fullscreenElement) {
        app.style.display = "none";
        document.getElementById("start").style.display = "inline";
    }
}
app.addEventListener("fullscreenchange", fullscreenchanged)
