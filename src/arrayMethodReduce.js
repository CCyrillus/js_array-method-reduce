'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let resultCall = initialValue;

    const start = arguments.length > 1 ? 0 : 1;

    for (let index = start; index < this.length; index++) {
      resultCall = callback(resultCall, this[index], index, this);
    }

    return resultCall;
  };
}

module.exports = applyCustomReduce;
