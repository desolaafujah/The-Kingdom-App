//WRITING TESTS IN node.js
import assert from 'node:assert';
import test from 'node:test';

test('that 1 is equal to 1', () => {
    assert.strictEqual(1,1);
});

console.log("test passed!");
