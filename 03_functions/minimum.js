/**
 * https://eloquentjavascript.net/03_functions.html#i_XTmO7z7MPq
 * 
 * Minimum
 * The previous chapter introduced the standard function Math.min that returns its smallest argument.
 * We can build something like that now. Write a function min that takes two arguments and returns
 * their minimum.
 */

const min = (a, b) => {
  if (a <= b) {
    return a;
  }
  return b;
};

console.log(min(0, 10));
console.log(min(0, -10));
