// Instructions: 
// Create a class function 'Counter' that is exported globally.   
//   - Has the *read-only* property 'current', initialized to 0
//   - Has the method next() that increments counter and returns new value  
//   - Has only two enumerable members ('current' and 'next')

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