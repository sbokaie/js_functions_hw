// numSquare(max)

var perfSquares = 25;

var numSquare = function (maxNum){
	var arr = [];
	for (i=1; i <= maxNum; i++) {
		if (i*i<maxNum) {
		   arr.push(i*i);
	    }	
	}
	return arr;
}

console.log(numSquare(perfSquares))