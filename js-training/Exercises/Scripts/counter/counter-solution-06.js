// Instructions: 
// Create a class function 'Counter' that is exported globally and   
//   - Has the *read-only* property 'current', initialized to 0
//   - Has the *read-only* property 'id'. Each new counter as a new id, starting with 1 
//   - Has the method next() that increments counter and returns new value  
//   - Has only three enumerable members ('current', 'next', and 'id') 
 
var _counterID = 0;

function Counter() {
    var _value = 0;
    var _id = ++_counterID;

    Object.defineProperties(this, {
        'current': { get: function () { return _value; } },
        'id': { get: function () { return _id; } }
    });

    this.next = function () {
        return ++_value;
    }
}

window.Counter = Counter;