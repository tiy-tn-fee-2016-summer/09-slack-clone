(function() {
  'use strict';

  /* global require */
  const sumFromList = require('exercise/sum-from-list');

  QUnit.module('Sum the numbers from list items');

  test('it calculates the sum of list items', (assert) => {
    const listOne = document.createElement('ul');
    const listTwo = document.createElement('ul');

    listOne.innerHTML = '<li>1</li><li>5</li>';
    listTwo.innerHTML = '<li>200</li><li>50</li><li>190</li>';
    const resultOne = sumFromList(listOne);
    const resultTwo = sumFromList(listTwo);

    assert.equal(resultOne, 6);
    assert.equal(resultTwo, 440);
  });
})();
