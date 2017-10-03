// Write code here that: 
//  - Creates a function 'createCounter' that is exported globally. When called, it returns an object that:
//    - Has property 'current' which is read only  
//    - Has method next() that increments counter and returns new value 
//    - Has only two enumerable members ('current' and 'next')

function createCounter() {
    var _value = 0;

    return { 
        get current() { return _value; },
        next: function () { return ++_value; }
    }; 
}

window.createCounter = createCounter;