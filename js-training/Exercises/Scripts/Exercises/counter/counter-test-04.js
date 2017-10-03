(function () {
    codeschool.exercise.setTest('Counter', function (QUnit) {
        var cs = window.codeschool;
        var Counter = window.Counter;

        QUnit.test('No pollution', function (assert) {
            var newVariables = cs.findPollution('Counter');
            assert.strictEqual(newVariables.length, 0, 'No new global variables');
        });

        QUnit.test('Counter class exists', function (assert) {
            assert.ok(Counter, 'Counter identifier exists');
            assert.ok('function' == typeof Counter, 'Counter is a function');

            var c = new Counter();
            assert.strictEqual(c.constructor.name, 'Counter', 'Constructor is the named function \'Counter\'');
        });

        QUnit.test('counter instance members', function (assert) {
            var c = new Counter();
            assert.strictEqual(c.current, 0, 'Counter initialized with current = 0');
            assert.strictEqual(c.next(), 1, 'next() increments');
            assert.strictEqual(c.current, 1, 'current is now 1');
            assert.strictEqual(c.next(), 2, 'next() increments again');

            // This should do nothing:
            c.current = 42;
            assert.strictEqual(c.current, 2, 'current is now 2');
             
            var c2 = new Counter();
            assert.strictEqual(c2.current, 0, 'new Counter initialized with current = 0');
            assert.strictEqual(c2.next(), 1, 'next() increments');
            assert.strictEqual(c2.current, 1, 'current is now 1');
            assert.strictEqual(c2.next(), 2, 'next() increments again'); 
        });
    });
})();