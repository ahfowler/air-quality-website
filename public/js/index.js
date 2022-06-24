// Typewriter Effect: https://codepen.io/gavra/pen/nNRvKX
var aText = new Array(
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <span>aliquip ex ea commodo consequat</span>."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("headline-text");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      iSpeed = Math.random() * 230;
      setTimeout("typewriter()", iSpeed);
    }
  } else {
    iSpeed = Math.random() * 230;
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

// -----------

