"use strict";
function main(number){
	let result ;
	if(number === 0 ){
		result = 'No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.';
	}	
	else	if (number === 1){
		result = '1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.';
	}
	else if(number ===2 ){
		result = '2 bottles of beer on the wall, 2 bottles of beer.  Take one down and pass it around, 1 bottle of beer on the wall.';
	}
	else {
		result = String(number) + ' bottles of beer on the wall, ' + String(number) +  ' bottles of beer.  Take one down and pass it around, ' + String(number -1 ) + ' bottle of beer on the wall.';
	}
	return result ;
}

module.exports = main;
