//Values v/s Reference Types Example 1
	
	/*	In JS We have 2 categories of types.
		1.Value Types/Primitive Types		2.Reference Types
	*/
	
	/*	1.Value Types/Primitive Types:- 
			Number
			String
			Boolean
			Symbol(new in ES6)
			undefined
			null
	*/
	
	/*	2.Reference Types
			Objects
			Functions
			Arrays	
	*/
	
	
//Primitives Types
	// x & y are two independent variable
		let x = 10;
		let y = x;
		x = 20;
	//write below code on console
	/*	x
		y
	*/
	
//Reference Types
	let a = { value: 10};
	let b = a;
	a.value = 20;
	//write below code on console
	/*	a
		b
	*/
	/*	When we use an object, that object is stored somewhere else in the memory and the address of that
		memory location is stored inside that(b) variable.
		
		The 'b' variable copied the address/reference of the object 'a'.
		
		In other words both 'a' and 'b' are pointing the same object memory.
		
		And when we modify that object using 'a' OR 'b' the changes are immediatly visible to the other 
		variable.
	*/

//CONCLUSION :- 
/*	Primitives are copied by their value.
	Objects are copied their reference/address.
*/