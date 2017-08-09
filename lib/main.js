"use strict";
function main(){
	let result = '';
	for (let i = 99 ; i > 0 ; i --){
		result += (String(i));
		result += ' bottle' ;
		result += ((i!==1)? 's' : '');
		result += ' of beer on the wall, ';
		result += String(i);
		result += ' bottle';
		result += ((i!==1)? 's' : '');
		result += ' of beer.\n';
		result += 'Take one down and pass it around, ';
		if (i - 1 === 0 ){
			result += 'no more' ;
		}
		else {
			result  += String(i - 1) ;
		}
		result += ' bottle';
		result += ((i - 1!==1)? 's': '');
		result += ' of beer.\n'	;
	}
	result += 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles fo beer on the wall.';
	return result ;

}

module.exports = main;
