/**
 * https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do
 * 
 * Bean counting
 * You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value
 * will be a string containing only one character (for example, "b"). The first character has position 0,
 * which causes the last one to be found at position string.length - 1. In other words, a two-character
 * string has length 2, and its characters have positions 0 and 1.
 *
 * Write a function countBs that takes a string as its only argument and returns a number that indicates
 * how many uppercase “B” characters there are in the string.
 *
 * Next, write a function called countChar that behaves like countBs, except it takes a second argument
 * that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
 * Rewrite countBs to make use of this new function.
 */

const countChar = (str, target) => {
  let count = 0;

  for (const char of str) {
    if (char === target) {
      count++;
    }
  }

  return count;
};

const countBs = (str) => {
  return countChar(str, 'B');
};

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
