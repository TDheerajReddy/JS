//Creating object
// 'var' has number of issues when it comes to scoping 
 
 /*	const circle = {};	//Object literal syntax
 */
 
 const circle = {
	 radius: 1,
	 location: {
		 c: 1,
		 y: 1
	 },
	 draw: function() {
		 console.log('draw');
	 }
 };
 // this object has 3 members - "radius", "location" and "draw", and it has one method - "draw".
 
 circle.draw();
 console.log(circle);