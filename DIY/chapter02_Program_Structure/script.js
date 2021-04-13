// PROGRAM STRUCTURE

// 1. EXPRESSIONS AND STATEMENTS
// A fragment of code that produces a value is called an expression.
// Every value that is written literally (such as 22 or "psychoanalysis") is an expression.
// An expression between parentheses is also an expression, as is a binary operator applied to
// two expressions or a unary operator aplied to one.

// If an expression corresponds to a sentence fragment, a Javascript statement corresponds to
// a full sentence. A program is a list of statements.

// 2. BINDINGS
// To catch and hold values, Javascript provides a thing called binding, or variable:
let caught = 5 * 5;
console.log(caught); // 25

// After a binding has been defined, its name can be used as an expression.
// The value of such an expression is the value the binding currently holds.
let ten = 10;
console.log(ten * ten); // 100

// When a binding points at a value, that does not mean it is tied to that value forever.
// The = operator can be used at any time on existing binding to disconnect them from their
// current values and have them poin to a new value.
let mood = 'light';
console.log(mood); // light
mood = 'dark';
console.log(mood); // dark

// You should imagine bindings as tentacles, rather than boxes.
// They do not contain values; they grasp them - two bindings can refer to the same value.
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // 105
