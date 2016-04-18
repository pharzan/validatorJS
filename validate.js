exports.Validate = (function V() {
    if (!(this instanceof V)) {
        return new V();
    }
    var _results = [];

    this.validate = function(expressions) {
        var self = this;
        if (Array.isArray(expressions)) {
            expressions.map(function(exp) {
                if (exp.result) {
                    _results.push(null);
                    if (typeof exp.pass == 'function')
                        exp.pass(exp.message);
                } else {
                    _results.push(exp.message);
                    if (typeof exp.fail == 'function')
                        exp.fail(exp.message);
                }

            });
	    return _getErrorsThenReset();
        }
        
    };

    this.set = function(result, msg, failFn, passFn) {
        return {
            result: result,
            message: msg,
            fail: failFn,
            pass: passFn
        };
    };


    _getErrorsThenReset = function() {

        var tmpResults = _results;
        _results = [];
        return tmpResults;
    };

})();


exports.Check = (function Check() {

    if (!(this instanceof Check)) {
        return new Check();
    }


    this.isNumber = function(value) {
        return typeof value === 'number' && !isNaN(value);
    };

    this.isString = function(value) {
        return typeof value === 'string';
    };

    this.isArray = function(value) {
        return Array.isArray(value);
    };

    this.isEmail = function(value) {
        var at = (value.indexOf('@') === -1) ? false : true,
            dot = (value.indexOf('.') === -1) ? false : true;
        return at && dot;
    };

    this.isAlphaNumeric = function(value) {
        return /^[A-Za-z0-9]+$/.test(value);
    };


})();
