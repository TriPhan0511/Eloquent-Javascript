// Solution 1
function factorial(n) {
  let count = 1;
  let result = 1;
  while (count <= n) {
    result *= count;
    count++;
  }
  return result;
}

let num = 5;
console.log(`Factorial : ${factorial(num)}`);
// -----------------------------------------------------------------

// Solution 2
function factorial2(n) {
  let result = 1;
  while (n != 0) {
    result *= n;
    n -= 1;
  }
  return result;
}

console.log(`Factorial 2: ${factorial2(num)}`);
// -----------------------------------------------------------------

// Solution 3: Recursion
function factorial3(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial3(n - 1);
  }
}
console.log(`Factorial 3: ${factorial3(num)}`);
