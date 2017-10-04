(function () {

    var _repeatCalled = 0;

    var nifty_module = {
        utils: {
            name: 'nifty utils',
            str: {
                repeat: function (value, count) {
                    _repeatCalled++;
                    var result = '';
                    for (var i = 0; i < count; i++) { result += value; }
                    return result;
                }
            }
        }
    };

    window.nifty = nifty_module;
     
    codeschool.exercise.setTest('nifty.utils.str', function (QUnit) {
        var cs = window.codeschool;
        var nifty = window.nifty;
        var $ = window.jQuery;

        QUnit.test('No pollution', function (assert) {
            var newVariables = cs.findPollution('nifty');
            assert.strictEqual(newVariables.length, 0, 'No new global variables');
        });

        QUnit.test('namespaces were augmented', function (assert) {
            assert.strictEqual(nifty, nifty_module, 'nifty wasn\'t clobbered');
            assert.strictEqual(nifty.utils.name, 'nifty utils', 'nifty.utils wasn\'t clobbered');
            assert.strictEqual(nifty.utils.str.name, 'nifty string utils', 'nifty.utils.str wasn\'t clobbered');
            assert.strictEqual(nifty.utils.str.repeat, nifty.__str_repeat, 'nifty.utils.str.repeat wasn\'t clobbered');
        });
         
        QUnit.test('pad', function (assert) {
            var pad = nifty.utils.str.pad;
            _repeatCalled = 0;

            assert.ok($.isFunction(pad), 'nifty.utils.str.pad is a function'); 

            assert.throws(function () { pad('foo'); }, 'pad throws error if only 1 argument');
            assert.throws(function () { pad('foo', 'a'); }, 'pad throws error if length is NaN or not a number');
            assert.throws(function () { pad('foo', 'a', {}); }, 'pad throws error if pad char is not a string');
            assert.throws(function () { pad('foo', 'a', ''); }, 'pad throws error if pad char is an empty string');

            assert.strictEqual(pad(null, 5), '     ', 'null value treated as empty string');
            assert.strictEqual(pad(undefined, 5), '     ', 'undefined value treated as empty string');
            assert.strictEqual(pad('foo', 5), 'foo  ', 'Basic usage');
            assert.strictEqual(pad('foo', -5), '  foo', 'Basic usage, left aligned');
            assert.strictEqual(pad('foo', 2), 'foo', 'If width is less than length, input is returned');
            assert.strictEqual(pad('foo', 5, '_'), 'foo__', 'Custom pad char');
            assert.strictEqual(pad('foo', -5, '_'), '__foo', 'Custom pad char, left aligned');
            assert.strictEqual(pad('foo', 5, '_!='), 'foo__', 'Only first char of custom padding is used');
            assert.strictEqual(pad(123, 5, '0'), '12300', 'number value is converted to string');
            assert.strictEqual(pad(window, 5), '[object Window]', 'object value is converted to string');

            assert.strictEqual(_repeatCalled, 8, 'nifty.utils.str.repeat was called 8 times by these tests');
        });
    });
})();

setTimeout(function () { codeschool.exercise.test(); }, 0);