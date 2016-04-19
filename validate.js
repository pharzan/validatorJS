exports.Validate = (function V() {
    if (!(this instanceof V)) {
        return new V();
    }
    var _results = [];
    var _errors = [];
    var _failed = false;

    this.validate = function(result, onFail, onPass) {

        for (idx in arguments) {
            var firstArg = arguments[idx][0],
                secondArg = arguments[idx][1] || null,
                thirdArg = arguments[idx][2] || null;
	    
            if (Array.isArray(arguments[idx])){
		console.log(">>>>",firstArg,secondArg,thirdArg)
                _validate(firstArg, secondArg, thirdArg);
	    }
            else if (arguments[idx].length === 2 && idx==arguments.length-1) {
                if ((typeof firstArg == 'function') && (typeof secondArg == 'function')){
		    console.log(_failed)
                }
            } else
                _validate(false, 'format mismatch', null);
        };
        return _getErrorsThenReset();
    };

    _validate = function(result, onFail, onPass) {
        var r;
	
        if (result) {
            if (typeof onPass === 'function') {
                r = onPass.call(this, this);

                if (typeof r !== undefined)
                    _updateErrors(r);

            } else if (typeof onPass === 'string') {
                _updateErrors(onPass);
                return onFail;
            } else
                _updateErrors(true);

        } else if (!result) {
	    _failed=true;
            if (typeof onFail === 'function') {
                r = onFail.call(this, this);
                if (typeof r !== undefined)
                    _updateErrors(r);
            } else if (typeof onFail === 'string') {
                _updateErrors(onFail);
                return onFail;
            } else
                _updateErrors(false);
        }

    };

    _getErrorsThenReset = function() {

        var tmpResults = _errors;
        _errors = [];
        return tmpResults;
    };

    _updateErrors = function(r) {
        _errors.push(r);
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
