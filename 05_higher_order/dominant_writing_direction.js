/**
 * https://eloquentjavascript.net/05_higher_order.html#i_4ccl4J1nOw
 * 
 * Dominant writing direction
 * Write a function that computes the dominant writing direction in a string of text. Remember that each
 * script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or
 * "ttb" (top to bottom).
 * 
 * The dominant direction is the direction of a majority of the characters that have a script associated
 * with them. The characterScript and countBy functions defined earlier in the chapter are probably
 * useful here.
 */

const SCRIPTS = require('./scripts');

const countBy = (items, groupName) => {
  const counts = [];

  for (const item of items) {
    const name = groupName(item);
    const known = counts.findIndex(c => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }

  return counts;
};

const characterScript = code => {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }

  return null;
};

const dominantDirection = text => {
  const directions = [];

  for (const char of text) {
    const script = characterScript(char.charCodeAt(0));
    if (script) {
      directions.push(script.direction);
    }
  }

  const dominantDirection = countBy(directions, direction => direction)
    .reduce((a, b) => a.count > b.count ? a : b);
  
  return dominantDirection.name;
};

console.log(dominantDirection('Hello!'));
console.log(dominantDirection("Hey, مساء الخير"));
