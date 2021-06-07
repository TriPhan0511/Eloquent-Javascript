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
 * 05. GROUPING SUBEXPRESSIONS
 */

/**
 * To use an operator like * or + on more than one element at a time, you have to use parentheses.
 * A part of a regular expression that is enclosed in parentheses counts as a single element as far
 * as the operators following it are concerned.
 */

// let cartoonCrying = /boo+(hoo+)+/i;
// console.log(cartoonCrying.test('Boohoooohoohoo'));
// // true

/**
 * The first and second + charactersapply only to the second o in boo and hoo, respectively.
 * The third + applies to the whole group (hoo+), matching one or more sequences like that.
 *
 * The i at the end of the expression in the example makes this regular expression case insensitive,
 * allowing it to match the uppercase B in the input string, even though the pattern is itself all lowercase.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 06. MATCHES AND GROUPS
 */

/**
 * The test method is the absolute simplest way to match a regular expression.
 * It tells you only whether it matched and nothing else. Regular expression also have an
 * exec (execute) method that will return null if no match was found and return an object
 * with information about the match otherwise.
 */

// let match = /\d+/.exec('one two 100');

// console.log(match);
// // -> ["100", index: 8, input: "one two 100", groups: undefined]
// console.log(match.index);
// // -> 8

/**
 * An object returned from exec has an index property that tells us where in the string the
 * successful match begins. Other than that, the object looks like (and in fact is) an array
 * of strings, whose first element is the string that was matched. In the previous example,
 * this is the sequence of digits that we were looking for.
 *
 * String values have a match method that behaves similarly:
 */

// console.log('one two 100'.match(/\d+/));
// // -> ["100", index: 8, input: "one two 100", groups: undefined]

/**
 * When the regular expression contains subexpressions grouped with parentheses, the text that
 * matched those groups will also show up in the array. The whole match is always the first element.
 * The next element is the part matched by the first group (the one whose opening parenthesis comes
 * first in the expression ), then the second group, and so on.
 */

// let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she said 'hello'"));
// // -> ["'hello'", "hello", index: 9, input: "she said 'hello', groups: undefined"]

/**
 * When a group does not end up being matched at all (for example, when followed by a question mark),
 * its position in the output array will hold undefined. Similarly, when a group is matched multiple
 * times, only the last match ends up in the array.
 */

// console.log(/bad(ly)?/.exec('bad'));
// // -> ["bad", undefined, index: 0, input: "bad", groups: undefined]
// console.log(/(\d)+/.exec('123'));
// // -> ["123", "3", index: 0, input: "123", groups: undefined]

/**
 * Groups can be useful for extracting parts of string. If we don't just want to verify whether
 * a string contains a date but also extract it and construct an object that represent it ,
 * we can wrap parentheses around the digit patterns and directly pick the date out the result of exec.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 07. THE DATE CLASS
 */

/**
 * Javascript has a standard class for representing dates - or, rather, points in time.
 * It is called Date. If you simply create a date object using new, you get the current date and time.
 */

// console.log(new Date());
// // -> Sun Jun 06 19:58:40 GMT+0700 (Indochina Time)

/**
 * You can also create an object for a specific time.
 */

// console.log(new Date(2009, 11, 9));
// // -> Wed Dec 09 00:00:00 GMT+0700 (Indochina Time)
// console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// // -> Wed Dec 09 2009 12:59:59 GMT+0700 (Indochina Time)

/**
 * Javascript uses a convention where month numbers start at zero (so December is 11),
 * yet day numbers start at one. This is confusing and silly. Be careful.
 *
 * The last four arguments (hours, minutes, seconds, milliseconds) are optional and taken
 * zero when not given.
 *
 * Timestamps are stored as the number of milliseconds since the start of 1970,
 * in the UTC time zone. This follows a convention set by "Unix time", which was invented
 * around that time. You can use negative numbers for times before 1970.
 * The getTime method on a date object returns this number. It is big, as you can image
 */

// console.log(new Date(2013, 11, 19).getTime());
// // 1387386000000

// console.log(new Date(1387386000000));
// // Thu Dec 19 2013 00:00:00 GMT+0700 (Indochina Time)

/**
 * If you give the Date constructor a single argument, that argument is treated as such a millisecond count.
 * You can get the current millisecond count by creating a new Date object and calling getTime on it or
 * by calling the Date.now function.
 */

// console.log(Date.now());
// // 1622986894837
// console.log(new Date().getTime());
// // 1622986894837

/**
 * Date objects provide methods such as getFullYear, getMonth, getDate, getHours, getMinutes, and
 * getSeconds to extract their components.
 * Besides getFullYear, there's also getYear, which give you the year minus 1990 and is mostly useless.
 */

// let today = new Date();
// console.log(`Full Year: ${today.getFullYear()}`);
// // 2021
// console.log(`Year: ${today.getYear()}`); // useless
// // 121
// console.log(`Month: ${today.getMonth()}`);
// // 5
// console.log(`Date: ${today.getDate()}`);
// // 6
// console.log(`Hours: ${today.getHours()}`);
// // 20
// console.log(`Minutes: ${today.getMinutes()}`);
// // 46
// console.log(`Seconds: ${today.getSeconds()}`);
// // 1

/**
 * Putting parentheses around the part of expression that we are interested in, we can now
 * create a Date object from a string.
 */

// function getDate(string) {
//   let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
//   return new Date(year, month - 1, day);
// }

// console.log(getDate('1-30-2003'));
// // Thu Jan 30 2003 00:00:00 GMT+0700 (Indochina Time)

// console.log(getDate('11-05-1984'));
// // Mon Nov 05 1984 00:00:00 GMT+0700 (Indochina Time)

/**
 * The _ (underscore) binding is ignored and used only to skip the full match element
 * in the array return by exec.
 */
