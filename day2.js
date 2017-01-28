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

// var fruit = ["cherries", "apples", "bananas"];
// var fruitString = fruit.join(", "); //joining the data of an array.  (<-your joining char->)
// console.log("fruitString", fruitString);

// var catColors = 'green,red,yellow,black';
// var catColorsArray = catColors.split(",");
// console.log(catColorsArray);

// var reverseFruit = fruit.reverse();
// console.log(reverseFruit);

// var alphaFruit = fruit.sort();
// console.log("alphaFruit", alphaFruit)

// // All this works great until you have an array of #s

// var nums = [9, 6, 8, 2, 4, 11, 66]; //want 2,4,6,8,9,11,66
// var numSort = nums.sort(function (a,b) {return a-b});
// console.log("numSort", numSort);

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// console.log(animals.indexOf("fish"));

// var animals2 = animals.slice(2,4); //copies items out of array, doesn't modify original
// console.log("animals2", animals2);

// animals.splice(1,1);

// var color = ["red","blue","gold","pink","orange"];

// //sort, reverse, make a string

// var finalAnswer = color.sort().reverse().join(" cat ");
// console.log("final Answer", finalAnswer);
//(;;) 3 positions. (start val; where you want to stop; counter)

for(var i=0; i<5 ; i++) {
	console.log(i);
}
var fruit = ["cherries", "apples", "bananas"];
for(var j=0; j<fruit.length; j++) {
	console.log("fruit", fruit[j]);
}

//write a for loop that increments by 10 each time = 10 times;
for (var k=0; k<100; k=k+10) {
	console.log("k",k);
}

//for loop that pushes the index to an array for 5 times console.log (array) \\ [0,1,2,3,4]
var number = [];
for(var i=0; i<5; i++) {
	number.push(i);
}
console.log(number)

//for loop that starts at 100 and divides by 2 each time, 3 times = 100,50,25

var num = 100;
for (var m = 0; m < 3; m++) {
	console.log("divide: ", num);
	num = num / 2;
}











































