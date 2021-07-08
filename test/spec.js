const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.dectotime('1.5'), '1:30');
assert.strictEqual(utils.dectotime('1'), '1:00');
assert.strictEqual(utils.dectotime('1.75'), '1:45');