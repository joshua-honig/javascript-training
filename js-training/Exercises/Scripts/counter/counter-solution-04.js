// Instructions: 
// Create a class function 'Counter' that is exported globally.  
//   - Constructor body is empty
//   - Has the *read-only* property 'current', initialized to 0
//   - Has the method next() that increments counter and returns new value  

function Counter() { }
 
Object.defineProperty(Counter.prototype, 'current', {
    get: function () { return this._value; }
});

Counter.prototype._value = 0;

Counter.prototype.next = function () {
    return ++this._value;
};

window.Counter = Counter;