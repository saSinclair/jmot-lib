const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.dectotime('1.5'), '1:30');
assert.strictEqual(utils.dectotime('1'), '1:00');
assert.strictEqual(utils.dectotime('1.75'), '1:45');

assert.strictEqual(utils.adddectotime('1.30', '14:00'), '15:18');
assert.strictEqual(utils.adddectotime('1.5', '14:00'), '15:30');

//assert.strictEqual(utils.currenttime(), '16:06');
//assert.strictEqual(utils.currenttime('en'), '04:06 PM');
//assert.strictEqual(utils.currenttime('en-US', 'HH:MM:SS'), '04:06:00 PM');
//assert.strictEqual(utils.currenttime('HH:MM:SS'), '16:06:00');