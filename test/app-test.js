const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
  let result = app.gretting();
  it('gretting should return hey there', () => {
    assert.equal(result, 'Hey there!');
  });

  it('gretting shoud return a string', () => {
    assert.typeOf(result, 'string');
  });
});