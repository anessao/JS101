// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;

// Find and output the starting position of the word "orphans"
var orphansIndex = sonnet.indexOf("orphans"); //this prints 402

// Output the number of characters in the sonnet
var sonnetLength = sonnet.length; //this prints 619

// Replace the first occurance of the string "winter" with "yuletide"
var noWinter = sonnet.replace("winter", "yuletide");

// Replace all occurances of the string "the" with "a large"
var noThe = noWinter.replace(/the\s/g, "a large ");

// Set the content of the sonnet div with the new string
var newSonnet = noThe;
element.innerHTML = newSonnet;
