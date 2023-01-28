var blueOnBoard = 0;
var redOnBoard = 0;
var blueInHole = 0;
var redInHole = 0;
var blueScore = 0;
var redScore = 0;

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
function nextRound() {
    if (blueOnBoard + (blueInHole * 3) > redOnBoard + (redInHole * 3)) {
        blueScore = blueScore + ((blueOnBoard + (blueInHole * 3)) - (redOnBoard + (redInHole * 3)));
        reset();
    } else if (redOnBoard + (redInHole * 3) > blueOnBoard + (blueInHole * 3)) {
        redScore = redScore + ((redOnBoard + (redInHole * 3)) - (blueOnBoard + (blueInHole * 3)));
        reset();
    } else {
        reset();
    }
    document.getElementById("bluescore").innerHTML = blueScore;
    document.getElementById("redscore").innerHTML = redScore;
}