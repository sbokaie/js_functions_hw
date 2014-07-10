// sillySum(arr)

var myArr = [3, 4, 5, 6];

var sillySum = function (arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
  	total += (arr[i]*i);
  	};
  return total;
};

console.log(sillySum(myArr));