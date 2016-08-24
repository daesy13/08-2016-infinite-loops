(function() {
  'use strict';

var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key]);
    }
  }
};
// var testVowel = function(char){
// 	var vowels = ['a','e','i','o','u'];
// 	loop(vowels, function(element){
// 		if (vowels.indexOf(element)!== -1) {
// 			return true;
// 		}
// 		else {
// 			return false;
// 		}
// 	});
// };

// 1. countVowels
var countVowels = function(myString){
	var vowels = ['a','e','i','o','u'];
	var vowelCounter = 0;
	var arry=myString.split('');
	console.log(arry);
	loop(arry, function(letter){
		if (vowels.indexOf(letter)!== -1){
			vowelCounter++;
	};	
});
	console.log(vowelCounter);
	return vowelCounter;
};
console.log(countVowels('apples'));

// 2. stringReversal
var stringReversal = function (myString){
	var splitArray = myString.split('');
	var reverseArray = [];
	loop(splitArray, function(letter){
		reverseArray.unshift(letter);
	});
	return reverseArray.join("");
};
console.log (stringReversal('apples'));

// 3. isPalindrome
var isPalindrome = function(myString){
	var splitArray = myString.split('');
	var reverseArray = [];
	loop(splitArray, function(letter){
		reverseArray.unshift(letter);
	});
	var reverseString = reverseArray.join("");
	if (myString === reverseString){
		return true;
	}
	else {
		return false;
	}
};
console.log(isPalindrome("hello"));
console.log(isPalindrome("hannah"));

// 4. largestNumber

var largestNumber = function(numbers){
	var biggest = numbers[0];
	loop(numbers, function(num){
		if (num>biggest){
			biggest = num;
		};
	} );
	return biggest;
};
console.log(largestNumber([1,31,97,3]));

// 5. multBy

var multBy = function(anArray,num){
	var newArray = [];
	loop(anArray, function(element){
		newArray.push(element*num);
	});
	return newArray;
}
console.log(multBy([1,2,3,4],5));

// 6. powerOf 

var powerOf = function(anArray, num){
	var newArray =[];
	loop(anArray, function(element){
		newArray.push(Math.pow(element,num));
	});
	return newArray;
};

console.log(powerOf([1,2,3],2));

// 7. capitalizeFirstLetters 

var capitalizeFirstLetters = function(myString){
	var myArray = myString.split(" ");
	var newArray =[]
	loop(myArray, function(word){
		var innerArray = word.split("");
		innerArray[0]=innerArray[0].toUpperCase();
		var capWord = innerArray.join("");
		newArray.push(capWord);
	});
	return newArray.join(" ");
};
console.log(capitalizeFirstLetters('hey how are you?'));

// 8. collectValues 

var collectValues

// 9. containsValue 

// 10. copyObj

// 11. extendObj 

// 12. swapShuffle 


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);


// 13. findBlueCars

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


