// Instructions: 
// Create an ES6 class 'Counter' that is exported globally and   
//   - Has the *read-only* property 'current', initialized to 0
//   - Has the method next() that increments counter and returns new value  

class Counter {
    constructor() { this._value = 0; }
    get current() { return this._value; }
    next() { return ++this._value; }
}

window.Counter = Counter;