const skipSpace = string => {
  let first = string.search(/\S/);
  if (first === -1) {
    return '';
  }
  return string.slice(first);
};

const parseApply = (expr, program) => {
  program = skipSpace(program);
  if (program[0] !== '(') {
    return { expr: expr, rest: program };
  }

  program = skipSpace(program.slice(1));
  expr = { type: 'apply', operator: expr, args: [] };
  while (program[0] !== ')') {
    const arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    if (program[0] === ',') {
      program = skipSpace(program.slice(1));
    } else if (program[0] !== ')') {
      throw new SyntaxError(`Expected ',' or ')'`);
    }
  }

  if (expr.operator.name === 'do') {
    for (let i = 0; i < expr.args.length; i++) {
      if (expr.args[i].operator.name === 'dianne' && i !== expr.args.length - 1) {
        throw new SyntaxError(`Expected dianne to be the last argument in do`);
      }
    }
  }

  return parseApply(expr, program.slice(1));
};

const parseExpression = program => {
  program = skipSpace(program);
  let match, expr;
  if (match = /^"([^"]*)"/.exec(program)) {
    expr = { type: 'value', value: match[1] };
  } else if (match = /^\d+\b/.exec(program)) {
    expr = { type: 'value', value: Number(match[0]) };
  } else if (match = /^[^\s(),#"]+/.exec(program)) {
    expr = { type: 'word', name: match[0] };
  } else {
    throw new SyntaxError('Unexpected syntax: ' + program);
  }

  return parseApply(expr, program.slice(match[0].length));
};

const parse = program => {
  const { expr, rest } = parseExpression(program);
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError('Unexpected text after program');
  }
  return expr;
};

export default parse;
