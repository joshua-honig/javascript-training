var nv = (function () {
    // Only usable inside module
    var _value = 0;

    function nextValue() {
        return ++_value;
    }

    // Export only what you want to expose
    return nextValue;
})();

console.log(nv())          ; // 1
console.log(nv())          ; // 2
console.log(nv.call(null)) ; // 3
console.log(nv.apply(null)); // 4
console.log(nv.name)       ; // 'nextValue'


var nv = (function () {
    var _value = 0;
     
    // Export 
    return function () {
        return ++_value;
    };
})();

console.log(nv()); // 1
console.log(nv()); // 2
console.log(nv.name); // ''

(function () { /* do stuff */ return 'something' })();
 