// Create a regular expression object: two ways
// let re = new RegExp('abc');
// let re2 = /abc/;

// Set of characters

// let re = /[0123456789]/;
// console.log(re.test('1'));
// // true
// console.log(re.test('a'));
// // false
// ------------------------------------------

// let re = /[0-9]/;
// console.log(re.test('1'));
// // true
// console.log(re.test('a'));
// // false
// ------------------------------------------

// let re = /[a-z]/;
// console.log(re.test('a'));
// // true
// console.log(re.test('f'));
// // true
// console.log(re.test('z'));
// // true
// console.log(re.test('9'));
// // false
// console.log(re.test('-'));
// // false
// ------------------------------------------

// \d : any digital character
// let re = /\d/;
// console.log(re.test('1'));
// // true
// console.log(re.test('a'));
// // false
// ------------------------------------------

// \w : any alphanumeric character ([a-zA-Z0-9])
// let re = /\w/;
// console.log(re.test('a'));
// // true
// console.log(re.test('B'));
// // true
// console.log(re.test(0));
// // true
// console.log(re.test('ô'));
// // false
// ------------------------------------------

// \s : a space, tab, newline character
// let re = /\s/;
// console.log(re.test(' '));
// // true
// console.log(re.test(' '));
// // true
// console.log(re.test('\n'));
// // true
// console.log(re.test('a'));
// // false
// ------------------------------------------

// // \D :  Any nondigital character
// let re = /\D/;
// console.log(re.test('9'));
// // false
// console.log(re.test('a'));
// // true
// ------------------------------------------

// \W : Any nonalphanumeric character
// let re = /\W/;
// console.log(re.test('a'));
// // false
// console.log(re.test('9'));
// // false
// console.log(re.test('ô'));
// // true
// ------------------------------------------

//  . : Any character except newline character
// let re = /./;
// console.log(re.test('\n'));
// // false
// console.log(re.test('a'));
// // true
// console.log(re.test('9'));
// // true
// console.log(re.test('ô'));
// // true
// ------------------------------------------

// + : one or more times
// let re = /\d+/;
// console.log(re.test('1'));
// // true
// console.log(re.test('12345'));
// // true
// console.log(re.test('-'));
// // false
// ------------------------------------------

// * : zero times or one time or more times
// let re = /\d*/;
// console.log(re.test('-'));
// // true
// console.log(re.test('1'));
// // true
// console.log(re.test('1234'));
// // true
// ------------------------------------------

// ? : zero times or one time
// let re = /neighbou?r/;
// console.log(re.test('neighbor'));
// // true
// console.log(re.test('neighbour'));
// // true
// console.log(re.test('beighbouur'));
// // false
// ------------------------------------------

// ^ : To invert a set of characters -> [^...]
// let re = /[^a-c]/;
// console.log(re.test('a'));
// // false
// console.log(re.test('d'));
// // true

// ------------------------------------------

// {x} : must occur x times.
// let re = /\d{4}/;
// console.log(re.test('a'));
// // false
// console.log(re.test('1'));
// // false
// console.log(re.test('12'));
// // false
// console.log(re.test('123'));
// // false
// console.log(re.test('1234'));
// // true
// console.log(re.test('12345'));
// // true????

/**
 * .test checks if there's any PART of a string that matches your string:
 * This regex: /\d{4}/ can find 2 matches in a string of 4 digits
 *
 * You'll want to the the regex to strictly look at the start and end of the string:
 */

// let re = /^\d{4}$/;
// console.log(re.test('12345'));
// // false

// {x,y} : must occur at leat x times and at most y times
// let re = /\d{2,4}/;
// console.log(re.test('-'));
// // false
// console.log(re.test('1'));
// // false
// console.log(re.test('12'));
// // true
// console.log(re.test('123'));
// // true
// console.log(re.test('1234'));
// // true
// console.log(re.test('12345'));
// // true????????????

// let re = /^\d{2,4}$/;
// console.log(re.test('12345'));
// // false
// ------------------------------------------

// 30-01-2003 15:20
// 3-01-2003 3:20

let dateTime = /^\d{1,2}-\d{2}-\d{4} \d{1,2}:\d{2}$/;
console.log(dateTime.test('30-01-2003 15:20'));
// true
console.log(dateTime.test('3-01-2003 3:20'));
// true
console.log(dateTime.test('123-01-2003 3:20'));
// false
