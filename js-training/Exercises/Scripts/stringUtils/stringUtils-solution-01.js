// Instructions: 
// Create a simple module 'stringUtls' exported globally
// - Module is created by executing an anonymous function : (function() { /* do stuff */ })();
// - Has the single static function 'pad' with the signature: pad(value: string, length: number, char?: string): string  
//   - pads the input value to the specified length, using the pad character if supplied, otherwise space
//   - if length is negative, pad left-pads to the absolute value of length 
//   - pad should internally call a method 'repeat' with the signature: repeat(value: string, count: number): string
//   - null or undefined value should be treated as empty string
//   - any other non-string argument should be converted to string with String(value) function
//   - other requirements are described in the unit test results...
//   - Examples:
//       stringUtils.pad('hello', 1)         // 'hello'
//       stringUtils.pad('hello', 8)         // 'hello   '
//       stringUtils.pad('hello', -8)        // '   hello'
//       stringUtils.pad('hello', 8, '_')    // 'hello___'
//       stringUtils.pad('hello', 8, 'foo')  // 'hellofff'
//       stringUtils.pad(null, 2)            // '  '
//       stringUtils.pad('hello')            // throws Error
//       stringUtils.pad('hello', 'foo')     // throws TypeError

var stringUtils = window.stringUtils = (function () {

    function repeat(value, count) {
        var result = '';
        for (var i = 0; i < count; i++) { result += value; }
        return result;
    }

    function pad(value, length, char) {
        if (value == null) value = '';
        if (arguments.length < 2) throw new Error('Pad requires at least two arguments');
        length = Math.ceil(+length);
        if (isNaN(length)) throw new TypeError('length must be a number');

        if (arguments.length >= 3) {
            if ('string' != typeof char) throw new TypeError('char must be a string');
            if (('string' == typeof char) && char.length == 0) throw new Error('char cannot be an empty string');
            char = char.charAt(0);
        } else {
            char = ' ';
        }

        if ('string' != typeof value) value = String(value);

        var absLength = Math.abs(length);
        if (value.length >= absLength) return value;

        var padString = repeat(char, absLength - value.length);
        if (length < 0) {
            value = padString + value;
        } else {
            value += padString;
        }

        return value;
    }

    return {
        pad: pad
    }
})();