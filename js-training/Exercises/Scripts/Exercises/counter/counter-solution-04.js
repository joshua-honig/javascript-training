// Write code here that: 
//  - Creates a Counter class that is exported globally
//  - All members are assigned to Counter.protoype
//  - Has property 'current' that is read-only
//  - Has method next() that increments counter and returns new value 

function Counter() { }

// Add members to Counter.prototype here:
Object.defineProperty(Counter.prototype, 'current', {
    get: function () { return this._value; }
});

Counter.prototype._value = 0;

Counter.prototype.next = function () {
    return ++this._value;
};

window.Counter = Counter;