/**
 * CHAPTER 09 - REGULAR EXPRESSIONS
 */

/**
 * 01 - CREATING A REGULAR EXPRESSION
 */

/**
 * A regular expression is a type of object. It can be either constructed with the RegExp constructor or
 * written as a literal value by enclosing a pattern in forward slash (/) characters.
 */

// let re1 = new RegExp('abc');
// let re2 = /abc/;

// console.log(typeof re1);
// // object
// console.log(typeof re2);
// // object

/**
 * Both of those regular expression objects represent the same pattern: an a character followed by a b
 * followed by a c.
 *
 * When using the RegExp constructor, the pattern is written as a normal string, so the usual rules
 * apply for backslashes.
 *
 * The second notation, where the pattern appears between slah characters, treats backslashes somewhat
 * differently. First, since a forward slash ends the pattern, we need to put a backslash before any
 * foward slash that we want to be part of the pattern. In addition, backslashes that aren't part
 * of special codes (like \n) will be preserved, rather than ignored as they are in strings,
 * and change the meaning in regular expression. Some characters, such as question marks and plus signs,
 * have special meaning in regular expressions and must be preceded by a backslash if they are meant to
 * represent the character itself.
 */

// let eighteenPlus = /eighteen\+/;
// -------------------------------------------------------------------------------------------------------

/**
 * 02 - TESTING FOR MATCHES
 */

/**
 * Regular expression objects have a number of methods. The simplest one is test. If you pass it a string,
 * it will return a Boolean telling you whether the string contains a match of the pattern in the expression.
 */

// console.log(/abc/.test('abcde'));
// // -> true
// console.log(/abc/.test('zabc'));
// // -> true
// console.log(/abc/.test('abxde'));
// //  -> false

/**
 * A regular expression consisting of only nonspecial characters simply represents that sequence of characters.
 * If abc occurs anywhere in the string we are testing against (not just at the start), test wil return true.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 03 - SETS OF CHARACTERS
 */

/**
 * Finding out whether a string contains abc could just as well be done with a call to indexOf.
 * Regular expressions allow us to express more complicated patterns.
 *
 * Say we eant to match any number. In a regular expression, putting a set of characters between
 * a square bracket makes that part of expression match any of the characters between the brackets.
 *
 * Both of the following expressions match all strings that contain a digit:
 */

// console.log(/[0123456789]/.test('in 1992'));
// // -> true
// console.log(/[0-9]/.test('in 1992'));
// // -> true

/**
 * Within square brackets, a hyphen (-) between two characters can be used to indicate a range of
 * characters, where the ordering is determined by the character Unicode's number.
 * Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers
 * all of them and matches any digit.
 *
 * A number of common character groups have their own built-in shortcuts.
 * Digits are one of them : \d means the same thing as [0-9].
 * 
    \d  Any digit character
    \w  An alphanumeric character ("word character")
    \s  Any whitespace character (space, tab, newline, and similar)
    \D  A character that is not a digit
    \W  A nonalphanumeric character
    \S  A nonwhitespace character
    .   Any character except for newline

  * So you could match a date and time format like 01-30-2003 15:20 with the following expression:
 */

// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test('01-30-2003 15:20'));
// // true
// console.log(dateTime.test('1-30-2003 15:20'));
// // false
// console.log(dateTime.test('30-jan-2003 15:20'));
// // false

/**
 * That looks completely awful, doesn't it? Half of it is backslashes, producing a background noise that
 * makes it hard to spot the actual pattern expressed.
 * We'll see a slightly improved version of this expression later.
 *
 * These backslash codes can also be used inside square brackets.
 * For example, [\d.] means any digit or a period character. But the period itself, between square brackets,
 * loses its special meaning. The same goes for other special characters, such as +.
 *
 * To invert a set of characters - that is, to express that you want to match any character except the ones
 * in the set - you can write a caret (^) character after the opening bracket.
 */

// let notBinary = /[^01]/;
// console.log(notBinary.test('10001111111111'));
// // false
// console.log(notBinary.test('100012111111111'));
// // true
// -------------------------------------------------------------------------------------------------------

/**
 * 04. REPEATING PARTS OF A PATTERN
 */

/**
 * We know how to match a single digit. What if we want to match a whole number - a sequence
 * of one or more digits?
 *
 * When you put a plus sign (+) after something in regular expression, it indicates that the element
 * may be repeated more than once. Thus, /\d+/ matches one or more digit character.
 */

// console.log(/\d+/.test('123'));
// // true
// console.log(/\d+/.test(''));
// // false

// console.log(/\d*/.test('123'));
// // true
// console.log(/\d*/.test(''));
// // true

/**
 * The star (*) has a similar meaning but also allows the pattern to match zero times.
 * Something with a star after it never prevents a pattern from matching - it'll just
 * match zero instances if it can't find any suitable text to match.
 *
 * A question mark makes a part of a pattern optional, meaning it may occur zero times or
 * one time. In the following example, the u character is allowed to occur, but the pattern
 * also matches when it is missing.
 */

// let neighbor = /neighbou?r/;

// console.log(neighbor.test('neighbor'));
// // true
// console.log(neighbor.test('neighbour'));
// // true
// console.log(neighbor.test('neighbouur'));
// // false

/**
 * To indicate that a pattern should occur a precise number of times, use braces.
 * Putting {4} after an element, for example, requires it to occur exactly four times.
 * It is possible to specify a range this way: {2,4} means the element must occur
 * at least twice and at most four times.
 */

/**
 * Here is another version of the date and time pattern that allows both single- and
 * double-digit days, months, and hours. It is also slightly easier to decipher.
 */

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

// console.log(dateTime.test('01-30-2003 15:20'));
// // true
// console.log(dateTime.test('1-30-2003 15:20'));
// // true
// console.log(dateTime.test('5-6-2021 3:20'));
// // true

/**
 * You can also specify open-ended ranges when using braces by omitting the number after
 * after the comma. So, {5,} means five or more times.
 */

// let re = /\d{5,}/;
// console.log(re.test('123'));
// // false
// console.log(re.test('1234'));
// // false
// console.log(re.test('12345'));
// // true
// console.log(re.test('123456789'));
// // true
// -------------------------------------------------------------------------------------------------------

/**
 * 05.
 */
