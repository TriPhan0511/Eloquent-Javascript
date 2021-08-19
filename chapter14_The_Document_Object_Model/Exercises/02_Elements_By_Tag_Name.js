/** Way 1 */
// function byTagName(node, tagName) {
//   const tags = [];
//   tagName = tagName.toUpperCase();

//   function find(node) {
//     node = node.firstElementChild;
//     while (node) {
//       if (node.nodeName === tagName) {
//         tags.push(node);
//       }
//       find(node);
//       node = node.nextElementSibling;
//     }
//   }
//   // Calls the find function
//   find(node);

//   return tags;
// }
// -----------------------------------------------------------------------------

/** Way 2 */
function byTagName(node, tagName) {
  const tags = [];
  tagName = tagName.toUpperCase();

  // Defines a function which traverse the DOM starting at the given node
  // and calls the callback function on every node
  // The callback function will be the function which add found nodes to the array named "tags"
  function find(node, callback) {
    node = node.firstElementChild;
    while (node) {
      callback(node);
      find(node, callback);
      node = node.nextElementSibling;
    }
  }

  // Calls the find function
  find(node, (item) => {
    if (item.nodeName === tagName) {
      tags.push(item);
    }
  });

  return tags;
}

// -----------------------------------------------------------------------------

/** SOLUTION FROM THE AUTHOR */
// function byTagName(node, tagName) {
//   const found = [];
//   tagName = tagName.toUpperCase();

//   // function explore(node) {
//   //   node.childNodes.forEach((child) => {
//   //     if (child.nodeType === document.ELEMENT_NODE) {
//   //       if (child.nodeName === tagName) {
//   //         found.push(child);
//   //       }
//   //     }
//   //   });
//   // }

//   function explore(node) {
//     for (let i = 0; i < node.childNodes.length; i++) {
//       const child = node.childNodes[i];
//       if (child.nodeType === document.ELEMENT_NODE) {
//         if (child.nodeName === tagName) {
//           found.push(child);
//         }
//         explore(child);
//       }
//     }
//   }

//   explore(node);
//   return found;
// }

// -----------------------------------------------------------------------------

// Tests
const div = document.getElementsByTagName('div')[0];
console.log(byTagName(div, 'p').length);
// -> 5
console.log(byTagName(div, 'section').length);
// -> 2
console.log(byTagName(div, 'div').length);
// -> 1

console.log(byTagName(document, 'div').length);
// -> 2

// // document.body.childNodes.forEach((node) => console.log(node.nodeType));
// document.body.childNodes.forEach((node) => {
//   // if (node.nodeType === Node.ELEMENT_NODE) {
//   if (node.nodeType === document.ELEMENT_NODE) {
//     console.log('Element');
//   }
// });
