// Write code here that: 
//  - Creates a function 'createCounter' that is exported globally. When called, it returns an object that:
//    - Has property 'current'  
//    - Has method next() that increments counter and returns new value 

function createCounter() {
    return {
        current: 0,
        next: function () { return ++this.current; }
    };
}

window.createCounter = createCounter;