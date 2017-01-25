// switch statement
// var day = "Friday";

// switch(day){
// 	case "Monday":
// 		console.log("Boooooo");
// 		break;
// 	case "Friday":
// 		console.log("PARTAY");
// 		break;
// 	default: 
// 		console.log("not Monday");
// }


//ARRAYS

var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(", "); //joining the data of an array.  (<-your joining char->)
console.log("fruitString", fruitString);

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log(catColorsArray);

var reverseFruit = fruit.reverse();
console.log(reverseFruit);

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit)

// All this works great until you have an array of #s

var nums = [9, 6, 8, 2, 4, 11, 66]; //want 2,4,6,8,9,11,66
var numSort = nums.sort(function (a,b) {return a-b});
console.log("numSort", numSort);

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log(animals.indexOf("fish"));

var animals2 = animals.slice(2,4); //copies items out of array, doesn't modify original
console.log("animals2", animals2);

animals.splice(1,1);

var color = ["red","blue","gold","pink","orange"];

//sort, reverse, make a string

var finalAnswer = color.sort().reverse().join(" cat ");
console.log("final Answer", finalAnswer);









