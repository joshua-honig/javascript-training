(function () {
    var cs = window.codeschool = window.codeschool || {};
    var realConsole = cs.__realConsole = window.console;

    var $ = window.jQuery;
    if ($ == null) {
        throw new Error('jQuery must be loaded first');
        return;
    }

    var console_handle = {
        $console: $([]),
        attached: false
    };

    $(function () {
        console_handle.$console = $('#console');
        console_handle.attached = true;

        for (var i = 0; i < _pendingLines.length; i++) {
            var info = _pendingLines[i];
            addLine(info.text, info.color);
        }
    });

    _pendingLines = [];
    _consoleLines = [];

    function addLine(line, color, noPush) {
        _consoleLines.push(line);
        if (!console_handle.attached) {
            _pendingLines.push({ text: line, color: color });
            return;
        }

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

    function getStackTrace(popDepth) {
        var stackTrace = '';
        try {
            throw new Error('Not a real error')
        } catch (err) {
            var stackLines = err.stack.split(/[\r\n]+/);
            stackLines.shift();  // Error message
            stackLines.shift();  // getStackTrace frame
            popDepth = +popDepth;
            if (!isNaN(popDepth)) {
                for (var i = 0; i < popDepth; i++) {
                    if (stackLines.length > 0) stackLines.shift();
                }
            }
            stackTrace = stackLines.join('\r\n');
        }
        return stackTrace;
    }

    var console_proxy = Object.create(realConsole);

    console_proxy.log = function () {
        realConsole.log.apply(realConsole, arguments);
        addLines(arguments);
    };

    console_proxy.warn = function () {
        realConsole.warn.apply(realConsole, arguments);
        addLines(arguments, 'orange')
        addLine(getStackTrace(1), 'orange');
    };

    console_proxy.clear = function () {
        realConsole.clear.apply(realConsole);
        $console.html('');
        _consoleLines = [];
    };

    cs.console = Object.create(console_proxy);
    cs.console.getLines = function () { return _consoleLines.concat(); };

    window.console = console_proxy;
})();