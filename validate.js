
function V(){
    this.results=[];
    this.validate=function (expressions){
	var self=this;
	expressions.map(function(exp){
	    if(exp.result){
		self.results.push(null);
		if (typeof exp.pass=='function')
		exp.pass(exp.message);
	    }
	    else{
		self.results.push(exp.message);
		if (typeof exp.fail=='function')
		    exp.fail(exp.message);
	    }
	    
	    
	});
    };

    this.isNumber= function(value) {
	
	return typeof value === 'number' && !isNaN(value);
		
    };

    this.isString = function(value){
	return typeof value === 'string';
		
    };

    this.isArray= function(value){
	return Array.isArray(value);
    };

    this.isEmail=function(value){
	var at=(value.indexOf('@')===-1)?false:true,
	    dot=(value.indexOf('.')===-1)?false:true;
	return at && dot;
    };

    this.isAlphaNumeric=function(value){
	return /^[A-Za-z0-9]+$/.test(value);
    };

    this.actions=function(result,msg,failFn,passFn){
	return {result:result,
		message:msg,
		fail:failFn,
		pass:passFn
	       };
    };

    this.errors=function(){
	return this.results;
    };
  
}
var v=new V();


var inp=33;
v.validate([
    v.actions(v.isString(inp),'is not a string',
	      function(msg){console.log('warning: %s',inp,msg);},
	      function(msg){console.log('pass: %s',inp,msg);}
	     ),
    v.actions(v.isNumber(inp),'is A number',
	      null,
	      function(msg){console.log('pass: %s',inp,msg);}),
    v.actions(v.isArray([]),'is not an array',
	      null,
	      function(msg){console.log('pass: %s',inp,msg);})


]);

console.log(v.errors())

console.log(v.isEmail('aad@ '))
console.log(v.isAlphaNumeric('aadaskfjdFASDfajskdh.3138137'))
