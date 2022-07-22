/**
 * https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7
 * 
 * Looping a triangle
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

const numOfCalls = 7;
const char = '#'

for (let i = 1; i <= numOfCalls; i++) {
  let level = '';
  for (let j = 1; j <= i; j++) {
    level += char;
  }
  console.log(`${level}${i !== numOfCalls ? '\n' : ''}`);
}
