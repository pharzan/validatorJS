var v=require('../validate.js').Validate;
var c=require('../validate.js').Check;
var assert = require("assert");

describe('check.isString', function() {
    describe('isString', function() {
	var result;
      it('checks string "hello" with isString', function() {
	  
	  result=v.validate(v.set(c.isString('hello'),'is a string',
				   null,
				   null));
	  
	  assert.equal(result,null);
      
      });
      
      it('checks not string 33 with isString to see expected value is returned', function() {
	  
	  result=v.validate(v.set(c.isString(33),'is a string',
				   null,
				   null));
	  
	  assert.equal(result,'is a string');
	  assert(!Array.isArray(result),'check type of result');
      });

		  
      it('checks array passed to validate function', function() {
	  result=v.validate([v.set(c.isString(69),'is a string',
				   null,
				   null),
			     v.set(c.isString('hello'),'is a string',
				   null,
				   null)

			    ]);
	  assert(Array.isArray(result),'check type of result');
	  assert.deepEqual(result,[ 'is a string', null ]);
      });
		  
      
  });
});


// result=v.validate(v.set(c.isString('hello'),'is a string',
// 				   null,
// 			null));
// console.log(result)

//  var inp=33;
// var result=v.validate([
//     v.set(c.isString('hello'),'is a string',null,null),
    
//     v.set(c.isNumber(inp),'is A number',
// 	      null,
// 	      function(msg){console.log('pass: %s',inp,msg);}),
//     v.set(c.isArray([]),'is not an array',
// 	      null,
// 	  function(msg){console.log('pass: %s',inp,msg);}),

//     v.set(false,'is false',
// 	      null,
// 	      function(msg){console.log('pass: %s',inp,msg);})


// ]);

// console.log('>>>>>>>>',result)

// console.log(c.isEmail('aad@ '))
// console.log(c.isAlphaNumeric('aadaskfjdFASDfajskdh.3138137'))

