/**
 * https://eloquentjavascript.net/09_regexp.html#i_vDM8PzwQWU
 * 
 * Regexp golf
 * Code golf is a term used for the game of trying to express a particular program in as few characters as
 * possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match
 * a given pattern, and only that pattern.
 * 
 * For each of the following items, write a regular expression to test whether any of the given substrings occur
 * in a string. The regular expression should match only strings containing one of the substrings described. Do
 * not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can
 * make it any smaller.
 * 
 * 1. car and cat
 * 2. pop and prop
 * 3. ferret, ferry, and ferrari
 * 4. Any word ending in ious
 * 5. A whitespace character followed by a period, comma, colon, or semicolon
 * 6. A word longer than six letters
 * 7. A word without the letter e (or E)
 */

const verify = (regexp, yes, no) => {
  // Ignore unfinished exercises
  if (regexp.source === '...') {
    return;
  }

  for (let str of yes) {
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  }

  for (let str of no) {
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
  }
};

verify(
  /ca[tr]/,
  ['my car', 'bad cats'],
  ['camper', 'high art'],
);

verify(
  /pr?op/,
  ['pop culture', 'mad props'],
  ['plop', 'prrrop'],
);

verify(
  /ferr(et|y|ari)/,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A'],
);

verify(
  /\w+ious\b/,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness'],
);

verify(
  /\s[\.,:;]/,
  ['bad punctuation .'],
  ['escape the period'],
);

verify(
  /\w{6,}/,
  ['Siebentausenddreihundertzweiundzwanzig'],
  ['no', 'three small words'],
);

verify(
  /\b[^eE ]+\b/,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape', 'BEET'],
);
