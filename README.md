# **Vjs**

A Basic validator implementation, which checks if a value is valid and as expected and executes the corresponding callback function as needed, and at the end of the check if a callback for the whole test exists it will execute the corresponding callback.

[Live example](https://jsfiddle.net/pharzan/yhqa3zsn/1/)

**Structure:**
validate.js exports two modules:
* Validate <- for validation purposes
* Checks <- the isBlah() utilities are here (for example isArray is in here). 

**Usage and Explanation & consedirations:**

* if the the check function fails
  + if there is no callback or string defined -> the return value will be false
  + if there is a callback or string defined -> the return value will be the string or the return of the function
* if the the check function passes 
  + if there is no callback or string defined -> the return value will be true
  + if there is a callback or string defined -> the return value will be the string or the return of the function
* the return value of validate is an array.
* If you have your own check functions there is _no need_ to import the check functions.

Import the Vjs validate method and the check utils.

```javascript
var v=require('../validate.js').Validate;
var c=require('../validate.js').Check;
```
The v object is instantiated when imported and now it can be used to call the validate method accompanied with the set method to set the validations.

>result=v.validate([v.validate([c.isString('hello'),
	                onFail,
                    onPass
                ],
				[v.validate([c.isString(1984),
	                onFail,
                    onPass
                ],
				[outerFail,outerPass]);
				
onFail and onPass can be a string or a function. On each of the corresponding states either the string is returned or a return value from a function is retuned.
After the validation finishes if there is a fail the outerFail will execute or if all is passed the outerPass is executed.

```javascript
var result=v.validate([
                        c.isString('hello'),
	                    'failed is a string',
    	                'passed is a string')
		  ]);
		  
console.log(result[0]) //  passed is a string
	
var result=v.validate([
                        c.isString('hello'),
	                    'failed is a string',
    	                'passed is a string')
		  ],
		  [
                        c.isString(33),
	                    'failed is a string',
    	                'passed is a string')
		  ]
		  );
		  
console.log(result[0]) //  passed is a string
console.log(result[1]) //  failed is a string
	
```
or in the above examples instead of the strings a function may be used as
```javascript
var myOnFail=function(){
             return 'failed is a string'
	}
var myOnPass=function(){
             return 'passed is a string'
	}
	
	
var result=v.validate([
                        c.isString('hello'),
	                    myOnFail,
    	                myOnPass)
		  ],
		  [
                        c.isString(33),
	                    myOnFail,
    	                myOnPass)
		  ]
		  );
		  
console.log(result[0]) //  passed is a string
console.log(result[1]) //  failed is a string

```
### Tests:
To run the test navigate to the test directory and execute [mocha](http://mochajs.org).
```sh
mocha
```

### Links:

* [GitHub](http://pharzan.github.io/validatorJS) home page
* [GitHub](https://github.com/pharzan/validatorJS) page
* [jsFiddle](https://jsfiddle.net/pharzan/yhqa3zsn/1/)
