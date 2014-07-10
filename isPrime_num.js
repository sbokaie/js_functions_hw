// isPrime(num) 

var max = 25

var isPrime = function(num) {
    for (var i = 2; i < num; i++) {
        if(num%i===0){
            return false;
    	}
    }
    return true;
}

console.log(isPrime(25));