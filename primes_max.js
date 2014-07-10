// primes(max)

var max = 100;

var maxPrime = function(num) {
	var primeArr = [];
    for (var i = 2; i < num; i++) {
        if(num%i===0){
            return false;
    	}
    	if(num%i===0){
    		primeArr.push(i);
    		console.log(primeArr);
    	}
    }
    return true;

}

console.log(maxPrime(max))