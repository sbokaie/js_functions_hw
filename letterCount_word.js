letterCount(word)

var string = "assembly"

var letterCount = function (){
	var count = {};
	for (i=0; i < string.length; i++){
		var letter = string[i];
		if (count[letter] === undefined) {
			count[letter]=1;

		}
		else {
			count[letter]++
		
		}
	}
		return count;
}

var x = letterCount();

console.log(x)