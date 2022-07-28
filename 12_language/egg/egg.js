import evaluate from './evaluator.js';
import parse from './parser.js';
import topScope from './topScope.js';

const run = program => {
  // console.log(JSON.stringify(parse(program), null, 2));
  // console.log(parse(program));
  return evaluate(parse(program), Object.create(topScope));
}

export default run;
