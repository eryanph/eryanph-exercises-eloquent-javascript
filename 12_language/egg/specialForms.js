import evaluate from './evaluator.js';

const specialForms = Object.create(null);

specialForms.if = (args, scope) => {
  if (args.length !== 3) {
    throw new SyntaxError('Wrong number of args to if');
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

specialForms.while = (args, scope) => {
  if (args.length !== 2) {
    throw new SyntaxError('Wrong number of args to while');
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }
  return false;
};

specialForms.do = (args, scope) => {
  let value = false;
  try {
    for (const arg of args) {
      if (arg.operator.name !== 'dianne') {
        value = evaluate(arg, scope);
      }
    }
  } catch (e) {
    const lastArg = args[args.length - 1];

    if (lastArg.operator.name === 'dianne') {
      const catchParam = lastArg.args.shift();

      if (catchParam.type === 'word') {
        scope[catchParam.name] = e;
      } else {
        throw new SyntaxError('Expected parameter on dianne');
      }

      value = specialForms.do(lastArg.args, scope);
    } else {
      throw e;
    }
  }
  return value;
};

specialForms.define = (args, scope) => {
  if (args.length !== 2 || args[0].type !== "word") {
    throw new SyntaxError('Incorrect use of define');
  }
  const value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

export default specialForms;
