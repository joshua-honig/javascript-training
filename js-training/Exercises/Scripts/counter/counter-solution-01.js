// Instructions: 
// Create a function 'createCounter' that is exported globally. 
//   - The body should be a single return statement 
//   - The value returned should be an object literal expression
//   - The object returned from the function:
//     - Has the property 'current', initialized to 0
//     - Has the method next() that increments counter and returns new value 

function createCounter() {
    return {
        current: 0,
        next: function () { return ++this.current; }
    };
}

window.createCounter = createCounter;