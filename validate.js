
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

    this.isNumber= function(value,msg) {
	
	return typeof value === 'number' && !isNaN(value);
		
    };

    this.isString = function(value,msg){
	return typeof value === 'string';
		
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
    this.test=function(){
	console.log('1')
	return this
    }
    
    
    this.test1=function(){
	console.log('2')
	return this
    }
    
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
	      function(msg){console.log('pass: %s',inp,msg);})
]);

console.log(v.errors())
v.test().test1()
