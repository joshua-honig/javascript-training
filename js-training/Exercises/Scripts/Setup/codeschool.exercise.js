(function () {

    var _globals = {};
    for (var k in window) {
        _globals[k] = window[k];
    }

    function findPollution() {
        var newKeys = [];
        var allowedKeys = [];

        for (var i = 0; i < arguments.length; i++) {
            allowedKeys[arguments[i]] = true;
        }

        for (var k in window) {
            if (_globals.hasOwnProperty(k)) continue;
            if (allowedKeys.hasOwnProperty(k)) continue;
            newKeys.push(k);
        }

        return newKeys;
    }

    function addGlobal(name, value) {
        _globals[name] = window[name] = value;
    }

    var cs = window.codeschool = window.codeschool || {};

    cs.__realConsole = window.console;

    cs.exercise = {
        name: '',
        _test: function (QUnit) { },
        test: function () {
            var QUnit = window.QUnit;
            QUnit.module(this.name);
            this._test(QUnit);
        },
        setTest: function (name, fnTest) {
            this.name = name;
            this._test = fnTest;
        }
    };

    cs.findPollution = findPollution;

    cs.addGlobal = addGlobal;

    addGlobal('codeschool', cs);
})();