// Instructions: 
// Create a function 'createCounter' that is exported globally.  
//   - The value returned should be an object literal expression
//   - The object returned from the function:
//     - Has the *read-only* property 'current', initialized to 0
//     - Has the method next() that increments counter and returns new value 
//     - Has only two enumerable members ('current' and 'next')

function createCounter() {
    var _value = 0;

    return { 
        get current() { return _value; },
        next: function () { return ++_value; }
    }; 
}

window.createCounter = createCounter;