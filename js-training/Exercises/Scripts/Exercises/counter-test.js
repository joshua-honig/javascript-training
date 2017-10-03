codeschool.exercise.setTest('Counter', function (QUnit) { 
    var cs = window.codeschool;
    var cnt = Counter;

    QUnit.test('Counter class exists', function (assert) {
        assert.ok(cnt != null, 'Counter identifier exists');
        assert.ok(window.Counter != null, 'Counter identifier exists');
        assert.ok('function' == typeof Function, 'Counter is a function');
    });

    QUnit.test('No pollution', function (assert) {
        var newVariables = cs.findPollution('Counter');
        assert.strictEqual(newVariables.length, 0, 'No new global variables');
    });
});