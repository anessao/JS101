var age = 27;
var secondsYear = ((60 * 60) * 24) * 365;

var hrsYear = 24 * 365;
var minDecade = ((60 * 24) * 365) * 10;

// 1. How many hours are in a year
console.log("Hours a year: ", hrsYear);

// 2. How many minutes are in a decade
console.log("Minutes in a decade: ", minDecade);

// 3. How many seconds old they are
console.log("Person's age in seconds: ", age * secondsYear);

// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
if (age > 40) {
	console.log("I'm old");
} else {
	console.log("I'm young");
}