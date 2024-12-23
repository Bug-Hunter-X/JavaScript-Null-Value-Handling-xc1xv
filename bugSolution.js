function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for better error handling
  }
  return a + b; // Perform addition
}

//Example Usage
console.log(foo(10, 20)); // Output: 30

try {
  console.log(foo(null, 20)); // Throws an error
} catch (error) {
  console.error(error.message); // Catches and handles the error
}

try {
  console.log(foo(10, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Catches and handles the error
}