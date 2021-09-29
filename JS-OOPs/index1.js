/*	Procedural programming :- that divided a program into a set of functions , so we have data stored in a
	bunch of variables and functions that operate on the data.
	This type of programming  is very simple and straightforward. It is inter-dependency b/w all these 
	functions, it becomes problematic.
*/

//Procedural implementation
/*
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
function getWage(baseSalary, overtime, rate)
{
	return baseSalary + (overtime * rate);
}
console.log(getWage(30000,10,20));
*/

/*
 	In OOP we combine a group of elated variables and functions into a unit, We call that unit an "Object". 
	We refer to these variables as 'properties' and the functions as 'methods'.

	OOPs is a paradigm centered around 'objects' rather than 'functions'.
	OOPs is a style of programming or a programming paradigm(example), it is not a programming language or a
	tool many of the popular 'Frameworks' are using OOP concepts, "Angular" is an example of these Frameworks.

*/
// Write below code on the console
 /*
	localStorage
 */
 
 /*	every browser has a local storage object that allows you to store data locally. This local storage object
	has a property, like- "length" which returns the number of objects in the storage and methods like - 
	"removeItem" and "setItem" and etc.
*/

/*	So in OOP we group related variables and functions that operate on them into objects, and this is called 
	ENCAPSULATION
*/

//OOP implementation
	//it is better because, here is no parameters in "getWage" function. 
		let employee = {
			baseSalary : 30_000,
			overtime : 10,
			rate : 20,
			getWage: function()
			{
				return this.baseSalary + (this.overtime * this.rate);
			}
		};
		console.log(employee.getWage());
		
		//"The best functions are those with no parameters."