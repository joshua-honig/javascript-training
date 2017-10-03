// Write code here that: 
//  - Creates a Counter class that is exported globally
//  - Has property 'current' that is read-only
//  - Has method next() that increments counter and returns new value
//  - Has only two enumerable members ('current' and 'next')

function Counter() {
    var _value = 0;

    Object.defineProperty(this, 'current', {
        get: function () { return _value; }
    });

    this.next = function () {
        return ++_value;
    }
}

window.Counter = Counter;