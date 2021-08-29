module.exports = function check(str, bracketsConfig) {
  const firstBracket = ['(', '[', '{', '1', '3', '5'];
  const doubleBracket = ['|', '7', '8']
  const bracketPairs = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let thisSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if (firstBracket.includes(thisSymbol)) {
      stack.push(thisSymbol);
    }
    else if (doubleBracket.includes(thisSymbol) && stack.includes(thisSymbol)) {
      stack.pop();
    }
    else if (doubleBracket.includes(thisSymbol)) {
      stack.push(thisSymbol);
    }
    else {
      if (bracketPairs[thisSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }

    }
  }
  return stack.length === 0
}
