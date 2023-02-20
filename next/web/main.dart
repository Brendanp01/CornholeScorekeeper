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
  querySelector("#blueHole0")?.onClick.listen((event) {
    blueInHole = 0;
  });
  querySelector("#blueHole1")?.onClick.listen((event) {
    blueInHole = 1;
  });
  querySelector("#blueHole2")?.onClick.listen((event) {
    blueInHole = 2;
  });
  querySelector("#blueHole3")?.onClick.listen((event) {
    blueInHole = 3;
  });
  querySelector("#blueHole4")?.onClick.listen((event) {
    blueInHole = 4;
  });
  querySelector("#redHole0")?.onClick.listen((event) {
    redInHole = 0;
  });
  querySelector("#redHole1")?.onClick.listen((event) {
    redInHole = 1;
  });
  querySelector("#redHole2")?.onClick.listen((event) {
    redInHole = 2;
  });
  querySelector("#redHole3")?.onClick.listen((event) {
    redInHole = 3;
  });
  querySelector("#redHole4")?.onClick.listen((event) {
    redInHole = 4;
  });
  querySelector("#blueBoard0")?.onClick.listen((event) {
    blueOnBoard = 0;
  });
  querySelector("#blueBoard1")?.onClick.listen((event) {
    blueOnBoard = 1;
  });
  querySelector("#blueBoard2")?.onClick.listen((event) {
    blueOnBoard = 2;
  });
  querySelector("#blueBoard3")?.onClick.listen((event) {
    blueOnBoard = 3;
  });
  querySelector("#blueBoard4")?.onClick.listen((event) {
    blueOnBoard = 4;
  });
  querySelector("#redBoard0")?.onClick.listen((event) {
    redOnBoard = 0;
  });
  querySelector("#redBoard1")?.onClick.listen((event) {
    redOnBoard = 1;
  });
  querySelector("#redBoard2")?.onClick.listen((event) {
    redOnBoard = 2;
  });
  querySelector("#redBoard3")?.onClick.listen((event) {
    redOnBoard = 3;
  });
  querySelector("#redBoard4")?.onClick.listen((event) {
    redOnBoard = 4;
  });
  querySelector("#nextRound")?.onClick.listen((event) {});
}
