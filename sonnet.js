// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;

console.log("Original Sonnet: ", sonnet);
// Find and output the starting position of the word "orphans"
var orphansIndex = sonnet.indexOf("orphans");
console.log("Position of 'orphans': ", orphansIndex);

// Output the number of characters in the sonnet
var sonnetLength = sonnet.length;
console.log("Characters in sonnet: ", sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide"
var noWinter = sonnet.replace("winter", "yuletide");
console.log("Replace Winter with Yuletide: ", noWinter);

// Replace all occurances of the string "the" with "a large"
var noThe = noWinter.replace(/the\s/g, "a large ");
console.log("No The: ", noThe);

// Set the content of the sonnet div with the new string
var newSonnet = noThe;
element.innerHTML = newSonnet;