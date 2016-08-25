(function() {
  'use strict';

var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i],i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
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

var collectValues = function (anObject){
	var valuesArray = [];
	loop(anObject, function(thing){
		valuesArray.push(thing);
	});
	return valuesArray;
};
var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

var listOfValues = collectValues(obj);

console.log(listOfValues) // ['Albrey', 'Inception'];

// 9. containsValue 
var containsValue = function (anObject, target){
	var test = false;
	loop (anObject, function(value){
		if (value === target){
			test = true;
		};
	});
	return test;
};

var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

var targetTest = containsValue(obj, 'Albrey');

console.log(targetTest) // true

// 10. copyObj
var copyObj = function (obj){
	var newObj = {};
	loop (obj, function(value, key){
		newObj[key] = value;
	})
	return newObj;
}
var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

var copyOfObj = copyObj(obj);

console.log(copyOfObj) // {name: 'Albrey', favoriteMovie: 'Inception'};

// 11. extendObj 

var extendObj = function(objOne,objTwo){
	loop(objTwo, function(value, key){
		objOne[key] = value;
	});
	return objOne;
};
  var objOne = {name: 'Albrey', favoriteMovie: 'Inception'};
  var objTwo = {favoriteColor: 'Blue', hungry: true}

  extendObj(objOne, objTwo);

  console.log(objOne) // {name: 'Albrey', favoriteMovie: 'Inception', favoriteColor: 'Blue', hungry: true};


// 12. swapShuffle 

var exampleArray = ['a','q','b','x','m'];

var swapShuffle = function(anArray){


};

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


