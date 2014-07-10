var arr1 = [3, 6, 11];
var arr2 = [2, 4, 5, 8, 9];
var newMerged = []

var mergeArr = function(a, b) {

	while (arr1.length !== 0 && arr2.length !== 0) {
	if (a[0] < b[0]){
		var smallest = a.shift();
		newMerged.push(smallest);
	}
	else {
		var smallest = b.shift();
		newMerged.push(smallest);
	}

}

	if (a.length < b.length){
		var last = b.shift();
		newMerged.push(last);
	} 
	else{
	var last = a.shift();
	newMerged.push(last);
	}
	return newMerged ;
	}



mergeArr(arr1, arr2);
console.log(newMerged);