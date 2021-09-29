const interceptor = require('./console-interceptor');

module.exports = () => {
  interceptor.on();
  const ex2 = require('../ex02.js');
  interceptor.off();

  const [out1, out2] = interceptor.get();

  const expected1 = '1 + 1 donne 2';
  const res1 = out1[0] === expected1;
  ok(res1, `Affiche "${expected1}"`);

  const expected2 = "J'habite en Occitanie";
  const res2 = out2[0] === expected2;
  ok(res2, `Affiche "${expected2}"`);
};