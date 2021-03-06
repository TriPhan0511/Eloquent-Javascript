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

// class Group {
//   constructor() {
//     this.members = [];
//   }

//   // Method: has
//   has(value) {
//     if (this.members.indexOf(value) !== -1) {
//       return true;
//     }
//     return false;
//   }

//   // Method: add
//   add(value) {
//     if (this.members.indexOf(value) !== -1) {
//       this.members.push(value);
//     }
//   }

//   // Method: delete
//   delete(value) {
//     let index = this.members.indexOf(value);
//     if (index !== -1) {
//       this.members.splice(index, 1);
//     }
//   }

//   // Static method
//   static from(collection) {
//     let group = new Group();
//     for (let element of collection) {
//       if (group.members.indexOf(element) === -1) {
//         group.members.push(element);
//       }
//     }
//     return group;
//   }
// }
// ---------------------------------------------------

/**
 * SOLUTION FROM THE AUTHOR
//  */

// class Group {
//   // Constructor: creates an empty group
//   constructor() {
//     this.members = [];
//   }

//   // Method: adds a value to the group (but only if it isn't a member)
//   add(value) {
//     if (!this.has(value)) {
//       this.members.push(value);
//     }
//   }

//   // Method: removes its argument from the group (it it was a member)
//   delete(value) {
//     this.members = this.members.filter((v) => v !== value);
//   }

//   // Method: returns a Boolean value indicating whether its argument is a member of the group
//   has(value) {
//     return this.members.includes(value);
//   }

//   // Static method: takes an iterable object as argument and creates a group that contains all
//   // the values produced by iterating over it.
//   static from(collection) {
//     let group = new Group();
//     for (let element of collection) {
//       group.add(element);
//     }
//     return group;
//   }
// }

// // ---------------------------------------------------------------

// // Testing
// let group = Group.from([10, 20]);

// console.log(group);

// console.log(group.has(20));
// // -> true
// console.log(group.has(30));
// // -> false

// console.log(group);
// // -> Group {members: Array(2)}
// group.add(20);
// console.log(group);
// // -> Group {members: Array(2)}

// console.log(group.has(10));
// // -> true
// group.delete(10);
// console.log(group.has(10));
// // -> false
// ------------------------------------------------------------------------------------

/**
 * EXERCISE 3: ITERABLE GROUPS
 */

/**
 * Make the Group class from the previous exercise iterable.
 */

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let element of collection) {
      group.add(element);
    }
    return group;
  }

  // NOTE
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

// Testing
for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}

// ------------------------------------------------------------------------------------

/**
 * EXERCISE 4: BORROWING A METHOD
 */
/**
 * Earlier in the chapter I mentioned that an object's hasOwnProperty can be used as
 * a more robust alternative to the in operator when you want ignore the prototype's
 * properties. But what if you map needs to include the word "hasOwnProperty"? You
 * won't be able to call that method anymore because the object's own property hide
 * the method value.
 *
 * Can you think of a way to cal hasOwnProperty on an object that has its own
 * property by that name?
 */

// let map = { firstName: 'Tri', hasOwnProperty: true };

// // console.log(map.hasOwnProperty());
// console.log(Object.prototype.hasOwnProperty.call(map, 'lastName'));
// // false
// console.log(Object.prototype.hasOwnProperty.call(map, 'hasOwnProperty'));
// // true
