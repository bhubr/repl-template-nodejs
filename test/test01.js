const interceptor = require('./console-interceptor');

module.exports = () => {
  interceptor.on();
  const ex1 = require('../ex01.js');
  interceptor.off();

  const [out] = interceptor.get();

  const res1 = typeof out[0] === 'number';
  ok(res1, 'myNumber est un nombre');

  const res2 = typeof out[1] === 'string';
  ok(res2, 'myString est une chaîne');

  const res3 = typeof out[2] === 'boolean';
  ok(res3, 'myBoolean est un booléen');
};