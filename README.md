# Vjs

A Basic validator implementation, which checks if a value is valid and as expected and executes the corresponding callback function as needed:



*usage and explanation:*
validate.js exports two modules:
* Validate <- for validation purposes
* Checks <- the is utilities example isArray is in here.

If you have your own check functions there is _no need_ to import the check functions.

Import the Vjs validate method and the check utils.

```javascript
var v=require('../validate.js').Validate;
var c=require('../validate.js').Check;
```
The v object is instntiated when imported and now it can be used to call the validate method accompanied with the set method to set the validations.

>v.validate([v.set(checkFn,message,failCallback,passCallback)]);

So 

```javascript
var result=v.validate([
    v.set(c.isString('hello'),'is a string',
    	  null,
          null),
    v.set(c.isNumber(inp),'is A number',
	      null,
	      function(msg){console.log('pass: %s',inp,msg);}),
    v.set(c.isArray([]),'is not an array',
	      null,
	  	  function(msg){console.log('pass: %s',inp,msg);}),

    v.set(false,'is false',
	      null,
	      function(msg){console.log('pass: %s',inp,msg);})
]);
```

### Links:

 * 
