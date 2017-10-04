(function () {
    codeschool.exercise.setTest('stringUtils', function (QUnit) {
        var cs = window.codeschool;
        var stringUtils = window.stringUtils;
        var $ = window.jQuery;

        QUnit.test('No pollution', function (assert) {
            var newVariables = cs.findPollution('stringUtils');
            assert.strictEqual(newVariables.length, 0, 'No new global variables');
        });

        QUnit.test('stringUtils function exists', function (assert) {
            assert.ok(stringUtils, 'stringUtils module exists');
            assert.ok('object' == typeof stringUtils, 'stringUtils is an object');
        });

        QUnit.test('stringUtils members', function (assert) {
            assert.ok($.isFunction(stringUtils.pad), 'stringUtils.pad is a function');
            assert.strictEqual(stringUtils.pad.name, 'pad', 'stringUtils.pad is a named function \'pad\'');

            for (var k in stringUtils) {
                if (k == 'pad') continue;
                throw new Error('Unexpected member \'' + k + '\' in stringUtils module');
            }
        });

        QUnit.test('pad', function (assert) {
            assert.throws(function () { stringUtils.pad('foo'); }, 'stringUtils.pad throws error if only 1 argument');
            assert.throws(function () { stringUtils.pad('foo', 'a'); }, 'stringUtils.pad throws error if length is NaN or not a number');
            assert.throws(function () { stringUtils.pad('foo', 'a', {}); }, 'stringUtils.pad throws error if pad char is not a string');
            assert.throws(function () { stringUtils.pad('foo', 'a', ''); }, 'stringUtils.pad throws error if pad char is an empty string');

            assert.strictEqual(stringUtils.pad(null, 5), '     ', 'null value treated as empty string');
            assert.strictEqual(stringUtils.pad(undefined, 5), '     ', 'undefined value treated as empty string');
            assert.strictEqual(stringUtils.pad('foo', 5), 'foo  ', 'Basic usage');
            assert.strictEqual(stringUtils.pad('foo', -5), '  foo', 'Basic usage, left aligned');
            assert.strictEqual(stringUtils.pad('foo', 2), 'foo', 'If width is less than length, input is returned');
            assert.strictEqual(stringUtils.pad('foo', 5, '_'), 'foo__', 'Custom pad char');
            assert.strictEqual(stringUtils.pad('foo', -5, '_'), '__foo', 'Custom pad char, left aligned');
            assert.strictEqual(stringUtils.pad('foo', 5, '_!='), 'foo__', 'Only first char of custom padding is used');
            assert.strictEqual(stringUtils.pad(123, 5, '0'), '12300', 'number value is converted to string');
            assert.strictEqual(stringUtils.pad(window, 5), '[object Window]', 'object value is converted to string');
        });
    });
})();

setTimeout(function () { codeschool.exercise.test(); }, 0);