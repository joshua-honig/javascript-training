(function () {
    var cs = window.codeschool = window.codeschool || {};
    var realConsole = cs.__realConsole = window.console;

    var $ = window.jQuery;
    if ($ == null) {
        throw new Error('jQuery must be loaded first');
        return;
    }

    var $console = $('#console');

    function addLine(line, color) {
        var $line = $('<span></span>').text(line);
        if (color != null) {
            $line.css('color', color);
        }
        $console.append($line);
        $console.append($('<span></span>').text('\r\n'));
    }

    function addLines(lines, color) {
        for (var i = 0; i < lines.length; i++) {
            addLine(lines[i], color);
        }
    }

    var console_proxy = Object.create(realConsole);

    console_proxy.log = function () {
        realConsole.log.apply(realConsole, arguments);
        addLines(arguments);
    };

    console_proxy.warn = function () {
        realConsole.warn.apply(realConsole, arguments);
        addLines(arguments, 'orange')
    };

    window.console = console_proxy; 
})();