/**
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * 
 * Chessboard
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to
 * separate lines. At each position of the grid there is either a space or a "#" character.
 * The characters should form a chessboard.
 */

const size = 8;
const black = '#';
const white = ' ';

let isWhiteFirst = true;

for (let i = 1; i <= size; i++) {
  let level = '';
  let isWhite = isWhiteFirst;
  for (let j = 1; j <= size; j++) {
    level += isWhite ? white : black;
    isWhite = !isWhite;
  }
  isWhiteFirst = !isWhiteFirst;
  console.log(`${level}${i !== size ? '\n' : ''}`)
}
