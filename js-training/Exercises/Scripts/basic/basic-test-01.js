(function () {
    codeschool.exercise.setTest('Hello world', function (QUnit) {
        var cs = window.codeschool;

        QUnit.test('logged Hello World!', function (assert) {
            var lines = cs.console.getLines();
            assert.strictEqual(lines.length, 1, 'Logged 1 line');
            assert.strictEqual(lines[0], 'Hello world!', 'Logged \'Hello world!\'');
        });
    });
})();

setTimeout(function () { codeschool.exercise.test(); }, 0);