const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	element = [];
  push(element) {
  	this.element.push(element);
    return this.element
  }
  pop() {
  	if (this.element.length){
    	var pop = this.element.pop()
    	return pop
    } else {
    	return undefined
    }
  }
  peek() {
		return this.element[this.element.length-1]
  }
}

module.exports = {
  Stack
};
