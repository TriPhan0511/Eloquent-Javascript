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

// -------------------------------------------------------------------------------------------------------

/**
 * 08. WORD AND STRING BOUNDARIES
 */

// console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec('100-1-30000'));
// // ["100-1-3000", "00", "1", "3000"]

/**
 * Unfortunatety, getDate will also happily extract the nonsensical date 00-1-3000
 * from the string "100-1-30000". A match may happen anywhere in the string, so in this case,
 * it'll just start at the second character and end at the second-to-last character.
 *
 * If we want to enforce that the match must span the whole string, we can add the markers ^ and $.
 * The caret matches the start of the input string, whereas the dollar sign matches the end.
 * So, /^\d+$/ matches a string consisting entirely of one or more digits,
 * /^!/ matches any string that starts with an exclamation mark,
 * and /x^/ does not match any string (there cannot be an x before the start of the string)
 *
 * If, on the other hand, we just want to make sure the date starts and ends on a word boundary,
 * we can use the marker \b. A word boundary can be the start or end of the string or any point
 * in the string has a word character (as in \w) on one side and nonword character on the other.
 */

// console.log(/cat/.test('concatenate'));
// // true
// console.log(/\bcat\b/.test('concatenate'));
// // false

/**
 * Note that a boundary marker doesn't match an actual character. It just enforces that the
 * regular expression matches only when a certain condition holds at the place where it appears
 * in the pattern.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 09. CHOICE PATTERN
 */

/**
 * Sy we want to know whether a piece of text contains not only a number but a number follow by
 * one of the words pig, cow, or chicken, or any of their plural forms.
 * We could write three regular expressions and test them in turn, but there is a nicer way.
 * The pipe character (|) denotes a choice between the pattern to its left and the pattern
 * to its right. So I can say:
 */

// let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;

// console.log(animalCount.test('15 pigs'));
// // true
// console.log(animalCount.test('15 pigchickens'));
// // false

/**
 * Parenthese can be used to limit the part of the pattern that the pipe operator applies to,
 * and you can put multiple such operators next to each other to express a choice between
 * more than two alternatives.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 10. THE MECHANICS OF MATCHING
 */

/**
 * Conceptually, when you use exec or test, the regular expression engine looks
 * for a match in your string by trying to match the expression first from the start
 * of the string, then from the second character, and so on, until it finds a match
 * or reaches the end of the string. It'll either return the first match that can be
 * found or fail to find any match at all.
 *
 */

// -------------------------------------------------------------------------------------------------------

/**
 * 11. BACKTRACKING
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 12. THE REPLACE METHOD
 */

/**
 * String values have a replace method that can be used to replace part of the string
 * with another string.
 */

// console.log('papa'.replace('p', 'm'));
// // -> mapa

/**
 * The first argument can also be a regular expression, in which case the first match of
 * the regular expression is replaced. When a g option (for global) is added to the
 * regular expression, all matches in the string will be replaced, not just the first.
 */

// console.log('Borobudur'.replace(/[ou]/, 'a'));
// // Barobudur
// console.log('Borobudur'.replace(/[ou]/g, 'a'));
// // Barabadar

/**
 * It would have been sensible if the choice between replacing one match or all matches was made
 * through an additional argunment to replace or by providing a different method, replaceAll.
 * But for some unfortunate reason, the choice relies on a property of the regular expression instead.
 *
 * The real power of using regular expression with replace comes from the fact that we cab refer to
 * matched groups in the replacement string.
 * For example, say we have a big string containing the names of people, one name per line, in
 * the format Lastname, Firstname. If we want to swap these names and remove the comma to get
 * Firstname Lastname format, we can use the following code:
 */

// console.log('Liskov, Barbara\nMcCarthy, John\nWadler, Philip'.replace(/(\w+), (\w+)/g, '$2 $1'));
// // Barbara Liskov
// // John McCarthy
// // Philip Walder

/**
 * The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern.
 * $1 is replaced by the text that matched against the first group, $2 by the second, and so on,
 * up to $9. The whole match can be referred to with $&.
 *
 * It is possible to pass a function - rather than a string -  as the second argument to replace.
 * For each replacement, the function will be called with the matched groups (as well as the whole match)
 * as arguments, and its return value will be inserted into the new string.
 *
 * Here's a small example:
 */

// let s = 'the cia and fbi';
// console.log(s.replace(/\b(cia|fbi)\b/g, (str) => str.toUpperCase()));
// // the CIA and FBI

/**
 * Here's a more interesting one:
 */

// let stock = '1 lemon, 2 cabbages, and 101 eggs';

// function minusOne(match, amount, unit) {
//   amount = Number(amount) - 1;
//   if (amount === 1) {
//     unit = unit.slice(0, unit.length - 1); // only one left, remove the 's'
//   } else if (amount === 0) {
//     amount = 'no';
//   }
//   return `${amount} ${unit}`;
// }

// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// // no lemon, 1 cabbage, and 100 eggs

/**
 * This takes a string, finds all occurences of a number followed by an alphanumeric word,
 * and returns a string wherein every such occurence is decremented by one.
 *
 * The (\d+) group ends up as the amount argument to the function, and the (\w+) group gets
 * bound to unit. The function converts amount to a number - which always works since it
 * matched \d+ - nad make some adjustments in case there is only one or zero left.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 13. GREED
 */

/**
 * It is possible to use replace to write a function that removes all comments from a piece
 * of Javascript code. Here is a first attempt:
 */

// function stripComments(code) {
//   return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
// }

// console.log(stripComments('1 + /* 2 */3'));
// // 1 + 3
// console.log(stripComments('1 + /*2*/3'));
// // 1 + 3
// console.log(stripComments('x = 10;// ten!'));
// // x = 10;
// console.log(stripComments('1 /* a */+/* b */ 1'));
// // 1 1

/**
 * The part before the or operator matches two slash characters followed by any number of
 * non-newline characters. The part for multiple comments is more involved.
 * We use [^] (any character that is not in the empty set of characters) as a way to match
 * any character. We cannot just use a period here because block comments can continue on
 * a new line, and the period character does not match newline characters.
 *
 * But the output for the last line appears to have gone wrong. Why?
 *
 * The [^]* part of the expression will first match as much as it can.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 14. DYNAMICALLY CREATING REGEXP OBJECTS
 */

/**
 * There are cases where you might not know the exact pattern you need to match against
 * when you are writing your code. Say you want to look for the user's name in a piece of text and
 * and enclose it in underscore characters to make it stand out. Since you will know the name only
 * once the program is actually running, you can't use the slash-based notation.
 *
 * But you can build up a string and use the RegExp constructor on that. Here's an example:
 */

// let name = 'harry';
// let text = 'Harry is a suspicious character.';
// let regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
// console.log(text.replace(regexp, '_$1_'));
// // -> _Harry_ is a suspicious character.

/**
 * When creating the \b boundary markers, we have to use two back slashes because we are
 * writing them in a normal string, not a slash-enclosed regular expression. The second
 * argument to the RegExp constructor contains the options for the regular expression -
 * in this case, "gi" for global and case insensitive.
 *
 * But what if the name is "dea+hl[]rd" because our user is a nerdy teenager?
 * That would result in a nonsensical regular expression that won't actually match
 * the user's name.
 *
 * To work around this, we can add backslashes before any character that has a special meaning.
 */

// let name = 'dea+hl[]rd';
// let text = 'This dea+hl[]rd guy is super annoying';
// let escaped = name.replace(//g)
// -------------------------------------------------------------------------------------------------------

/**
 * 15. THE SEARCH METHOD
 */

/**
 * The indexOf method on strings cannot be called with a regular expression. But there is another method,
 * search, that does expect a regular expression. Like indexOf, it returns the first index on which
 * the expression was found, or -1 when it wasn't found.
 */

// console.log('  word'.search(/\S/));
// // 2
// console.log('  '.search(/\S/));
// // -1

/**
 * Unfortunately, there is no way to indicate that the match should start at a given offset
 * (like we can with the second argument to indexOf), which would often be useful.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * 16. THE LASTINDEX PROPERTY
 */

/**
 * The exec method similarly does not provide a convenient way to start searching  from a given position
 * in the string. But is does provide an inconvenient way.
 *
 * Regular expression objects has properties. One such property is source, which contains the string that
 * expression was created from. Another property is lastIndex, which controls, in some limited circumstances,
 * where the next match will start.
 *
 * Those circumstances are that the regular expression must have the global (g) or sticky (y) option enabled,
 *
 */

// let re = /\d{1,2}-\d{1,2}/;
// console.log(re.exec('05-11-1984'));
// // ["05-11", index: 0, input: "05-11-1984", groups: undefined]
// let match = re.exec('05-11-1984');
// // console.log(match.source);
// console.log(match.input);
// // 05-11-1984
// console.log(match.lastIndex);

// -------------------------------------------------------------------------------------------------------

/**
 * SUMMARY
 */
/**
 * Regular expressions are objects that represent patterns in strings. They use their own language
 * to express these patterns.
 */

//  /abc/     A sequence of characters
//  /[abc]/   Any character from a set of characters
//  /[^abc]/  Any character not in a set of characters
//  /[0-9]/   Any character in a range of characters
//  /x+/      One or more occurences of the pattern x
//  /x+?/     One or more occurences, nongreedy
//  /x*/      Zero or more occurences
//  /x?/      Zero or one occurence
//  /x{2,4}/  Two to four occurences
//  /(abc)/   A group
//  /a|b|c/   Any one of several patterns
//  /\d/      Any digit character
//  /\w/      A alphanumeric character ("word character")
//  /\s/      A whitespace character
//  /./       Any character except newlines
//  /\b/      A word boundary
//  /^/       Start of input
//  /$/       End of input

/**
 * A regular expression has a method testto test whether a given string matches it. It also has a
 * method exec that, when a match is found, returns an array containing all matched groups. Such
 * an array has an index property that indicates where the match started.
 */

/**
 * Strings have a match method to match them against a regular expression and a search method to
 * search for one, returning only the starting position of the match. Their replace method can
 * replace matches of pattern with a replacement string or function.
 */

/**
 * Regular expression can have options, which are written after the closing slash.
 * The i option makes the match case insensitive.
 * The g option makes the expression global, which, among other things, causes the replace method
 * to replace all instances instead of just the first.
 * The y option makes it sticky, which means that it will not search ahead and skip part of the string
 * when looking for a match.
 * The u option turns on Unicode mode, which fixes a number of problems around handling the characters
 * that take up two code units.
 */
