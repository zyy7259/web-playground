
function log(msg, clazz) {
    var $logs = $('#logs');
    if ($logs.length === 0) {
        $logs = $('<div id="logs"></div>').appendTo($(document.body));
    }
    
    var isString = typeof msg === 'string';
    if (!isString) {
        logObj(msg);
    } else {
        var $p = $('<p>').addClass('u-log').html(msg);
        if (!!clazz) {
            $p.addClass(clazz);
        }
        $logs.append($p);
        scrollToLogBottom();
    }
}
function error(msg) {
    log(msg, 'error');
}
function warn(msg) {
    log(msg, 'warn');
}
function logProgress(widthPercentage) {
    $('#progressWrap').show();
    $('#progressBar').css({
        width: widthPercentage
    });
    if (parseInt(widthPercentage) === 100) {
        $('#progressWrap').slideUp();
    }
}
function logObj(msg) {
    var $p = $('<p>').addClass('u-log');
    var $code = $('<code>').addClass('u-code');
    $code.text(JSON.stringify(msg, function(key, value) {
        if (typeof value === 'function' || (!!value && !!value.tagName)) {
            return undefined;
        }
        return value;
    }, 4));
    $p.append($code);
    $('#logs').append($p);
    scrollToLogBottom();
}
function scrollToLogBottom() {
    var foo = $('#logs');
    foo.scrollTop(foo[0].scrollHeight);
}
function clearLog() {
    $('#logs').empty();
}
function guid() {
    var _s4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (_s4() + _s4() + _s4() + _s4() + _s4() + _s4() + _s4() + _s4());
}
function undef(o) {
    return typeof o === 'undefined';
}
function notundef(o) {
    return typeof o !== 'undefined';
}
