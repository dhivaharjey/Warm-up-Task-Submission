/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	///Your code Ends here
	///Your code Ends here
	let dx = x2 - x1;
	let dy = y2 - y1;
	return Math.floor(Math.sqrt(dx * dx + dy * dy));
}
/*
Lines For TestCase
getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/