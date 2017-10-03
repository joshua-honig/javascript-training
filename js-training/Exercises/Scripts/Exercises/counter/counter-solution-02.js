// Write code here that: 
//  - Creates a function 'createCounter' that is exported globally. When called, it returns an object that:
//    - Has property 'current' which is read only  
//    - Has method next() that increments counter and returns new value 

function createCounter() {
    return {
        _value: 0,
        get current() { return this._value; },
        next: function () { return ++this._value; }
    }; 
}

window.createCounter = createCounter;
 
