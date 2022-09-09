// season
var monthNumber = prompt('Enter month number (1-12)', '');
if ((monthNumber == 12) || (monthNumber <= 2)) {
    alert( 'winter' );
} else if (monthNumber <= 5) {
    alert( 'spring' );
} else if (monthNumber <= 8) {
    alert( 'summer' );
} else if (monthNumber <= 11) {
    alert( 'autmn' );
} else {
    alert( 'Make choice 1-12' );
}
// max

var firstNumber = prompt('Enter first number');
var secondNumber = prompt('Enter second number');
var thirdNumber = prompt('Enter third number');
let result = Math.max(+firstNumber, +secondNumber, +thirdNumber);
alert (result);

