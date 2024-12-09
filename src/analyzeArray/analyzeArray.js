/*analyzeArray([1,8,3,4,2,6])*/

function analyzeArray(arr) {
	const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const length = arr.length;

	return { average, min, max, length };
}

module.exports = analyzeArray;


/*function analyzeArray(array) {
	const average = array.reduce((prev, current) => prev + current) / array.length;
	const minimum = Math.min(...array);
	const maximum = Math.max(...array);
	const arrayLength = array.length;

	return obj = {
		average: average,
		minimum: minimum,
		maximum: maximum,
		length: arrayLength
	}
}*/








/*
let obj = {};
for(let i = 0; i < array.length; i++) {
	obj[i] = array[i];
}*/
