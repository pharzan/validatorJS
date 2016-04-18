var v=require('../validate.js').Validate;
var c=require('../validate.js').Check;
var assert = require("assert");

// describe('check.isString', function() {
//     describe('isString', function() {
// 	var result;
//       it('checks string "hello" with isString', function() {
	  
// 	  result=v.validate([v.set(c.isString('hello'),
// 				   null,
// 				   null)]);
	  
// 	  assert.equal(result[0],null);
      
//       });
      
//       it('checks not string 33 with isString to see expected value is returned', function() {
	  
// 	  result=v.validate([v.set(c.isString(33),
// 				   function(){return 'is not a string';},
// 				   null)]);
	  
// 	  assert.equal(result[0],'is not a string');
// 	  assert(Array.isArray(result),'check type of result');
//       });
		  
//       it('checks array passed to validate function', function() {
// 	  result=v.validate([v.set(c.isString(69),
// 				   function(){return 'is not string';},
// 				   null),
// 			     v.set(c.isString('hello'),
// 				   function(){return 'is a not string';},
// 				   null)

// 			    ]);
	  
// 	  assert(Array.isArray(result),'check type of result');
// 	  assert.deepEqual(result,[ 'is not string', null ]);
//       });
		  
//       it('checks if no function is passed in still working or not', function() {
// 	  result=v.validate([v.set(c.isString(69),'is a string'),
// 			     v.set(c.isString('hello'),'is a string')
// 			    ]);
	  
// 	  assert(Array.isArray(result),'check type of result');
// 	  assert.deepEqual(result,[ 'is a string', null ]);
//       });
		  
//   });
// });


// var result=v.validate([v.set(c.isString('hello'),
// 			     null,
// 			     null)]);
// console.log(result)

var result=v.validate(
    [c.isString('hello'),null,null]
    //[c.isString(33),null,null]
    // [c.isString('hello'),null,function onPass(){return "Wow! it's a string!";}]
    //[c.isString(33),function onFail(){return "nope! it's not a string!";},null]
    // [c.isString(33),"nope! it's not a string!",null]
    // "nope! it's not a string!"
);

console.log(result);
// console.log(c.isEmail('aad@ '))
// console.log(c.isAlphaNumeric('aadaskfjdFASDfajskdh.3138137'))

