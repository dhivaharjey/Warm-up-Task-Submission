/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	if (typeof num === 'number') {
		// Check if the given value is an integer
		if (num % 1 === 0) {
			// Return the opposite value
			return -num;
		} else {
			// Return -1 if the given value is not an integer
			return -1;
		}
	} else {
		// Return -1 if the given value is not a number
		return -1;
	}
}
/*
Lines For TestCase

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/