import 'dart:html';

var blueOnBoard = 0;
var redOnBoard = 0;
var blueInHole = 0;
var redInHole = 0;
var blueScore = 0;
var redScore = 0;

void reset() {
  blueOnBoard = 0;
  redOnBoard = 0;
  blueInHole = 0;
  redInHole = 0;
}

void updateScore() {
  querySelector("#bluescore")?.innerHtml = blueScore.toString();
  querySelector("#redscore")?.innerHtml = redScore.toString();
}

void main() {
  document.title = "Cornhole Score Counter";
  querySelector("blueHole1")?.onClick.listen((event) {
    blueInHole = 1;
  });
}
