define([
    'base/klass',
    'util/event'
], function(_k, event, _p) {
    var _pro;
    _p._$$Alert = _k._$klass();
    _pro = _p._$$Alert._$extend(event._$$EventTarget);

    _pro.__reset = function(options) {
        this.__super(options);
    };
});