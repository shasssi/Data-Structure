/*
    Valid Paranthesis Anagram
    @@ returns true or false

    '{()[({})]}' - true
    '{{}}' - true
    '()()' - true
    '([)]' - false
    '())(' - false
    '))((' - false
*/

const isParanthesisValid = (inp) => {
  // hash map
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // use stack approach
  const stack = [];
  for (let i in inp) {
    if (map[inp[i]] && map[inp[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(inp[i]);
    }
  }
  return stack.length ? false : true;
};

console.log(isParanthesisValid("{()[({})]}"));
console.log(isParanthesisValid("{{}}"));
console.log(isParanthesisValid("()()"));
console.log(isParanthesisValid("([)]"));
console.log(isParanthesisValid("))(("));
