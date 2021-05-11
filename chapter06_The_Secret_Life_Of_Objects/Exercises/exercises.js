/**
 * EXERCISE 1: A VECTOR TYPE
 */

/**
 * Write a class Vec that represents a vector in two-dimensional space. It takes
 * a and y parameters (numbers), which it should save to properties of the same name.
 *
 * Give the Vec prototype two methods, plus and minus, that take another vector
 * as a parameter and return a new vector that has the sum or difference of the
 * two vectors' (this and the parameter) a and y values.
 *
 * Add a getter property length to the prototype that computes the length of the
 * vector - that is, the distance of the point (x, y) from the origin (0, 0).
 */

// // Vector constructor
// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   // plus method
//   plus(other) {
//     return new Vec(this.x + other.x, this.y + other.y);
//   }

//   // minus method
//   minus(other) {
//     return new Vec(this.x - other.x, this.y - other.y);
//   }

//   // getter: length
//   get length() {
//     return Math.sqrt(this.x ** 2 + this.y ** 2);
//   }
// }

// // Testing
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // -> Vec {x: 3, y: 5}

// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // -> Vec {x: -1, y: -1}

// console.log(new Vec(3, 4).length);
// // -> 5
// ------------------------------------------------------------------------------------

/**
 * EXERCISE 2: GROUPS
 */

/**
 * The standard Javascript environment provides another data structure called Set.
 * Like an instance of Map, a set holds a collection of values. Unlike Map, it
 * does not associate other values with those -  it just tracks which values are
 * part of the set. A value can be part of a set only once - adding it again doesn't
 * have any effect.
 *
 * Write a class named Group (since Set is already taken). Like Set, it has add,
 * delete, and has methods. Its constructor creates an empty group, add adds a value
 * to the group (but only if it isn't a member), delete removes its argument from the group
 * (if it was a member), and has returns a Boolean value indicating whether its argument
 * is a member of the group
 *
 * Use the === operator, or something equipvalent such as indexOf, to determine whether
 * two values are the same.
 *
 * Give the class a static from method that takes an iterable object as argument and creates
 * a group that contains all the values produced by iterating over it.
 */

class Group {
  constructor() {
    // return [];
  }

  has(value) {
    if (value in this) {
      return true;
    } else {
      return false;
    }
  }

  add(value) {
    if (this.indexOf(value) !== -1) {
      this.push(value);
    }
  }
}

let group = new Group();

group.add('Alex');
