// Instructions: 
// Create a function 'createCounter' that is exported globally. 
//   - The body should be a single return statement 
//   - The value returned should be an object literal expression
//   - The object returned from the function:
//     - Has the *read-only* property 'current', initialized to 0
//     - Has the method next() that increments counter and returns new value 
 
function createCounter() {
    return {
        _value: 0,
        get current() { return this._value; },
        next: function () { return ++this._value; }
    }; 
}

window.createCounter = createCounter;
 
