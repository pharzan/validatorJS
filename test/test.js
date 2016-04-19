var v = require('../validate.js').Validate;
var c = require('../validate.js').Check;
var assert = require("assert");

describe('check.isString', function() {

    describe('all true and all false test', function() {
        var result;

        it('one statement which should pass', function() {

            result = v.validate([c.isString('hello'),
                null,
                null
            ]);
            assert.equal(result[0], true);

        });

        it('multiple statements which all pass and different syntax test', function() {
            result = v.validate([c.isString('hello'),
                    null,
                    null
                ], [c.isString('yellow'),
                    null
                ],

                [c.isString('bye')]

            );

            assert.equal(result[0], true);
            assert.equal(result[1], true);
            assert.equal(result[2], true);

        });

        it('one statement which should fail', function() {


            result = v.validate([c.isString(1984),
                null,
                null
            ]);

            assert.equal(result[0], false);

        });

        it('multiple statements which all fail and different syntax test', function() {

            result = v.validate([c.isString(new Date),
                    null,
                    null
                ], [c.isString(function() {
                        return true;
                    }),
                    null
                ],

                [c.isString(1984)]

            );
            assert.equal(result[0], false);
            assert.equal(result[1], false);
            assert.equal(result[2], false);

        });

        it('multiple statements input and should run the callback function', function() {

            result = v.validate([c.isString(new Date),
                    null,
                    null
                ], [c.isString(function() {
                        return true;
                    }),
                    null
                ],

                [c.isString(1984)], [function() {}, function() {}]

            );
            assert.equal(result[0], false);
            assert.equal(result[1], false);
            assert.equal(result[2], false);

        });

    });

    describe('inner callbacks and returns test', function() {
        var result;

        it('inner pass callbacks', function() {

            result = v.validate([c.isString('hello'),
                    null,
                    'this should be the returned'
                ], [c.isString(33),
                    null,
                    'this shouldnt be the returned'
                ],

                [c.isString('some text'),
                    null,
                    function() {
                        return 'callback pass return';
                    }
                ],

                [c.isString(33),
                    function() {
                        return 'callback fail return';
                    },
                    null
                ]

            );

            assert.equal(result[0], 'this should be the returned');
            assert.notEqual(result[1], 'this shouldnt be the returned');
            assert.equal(result[1], false);
            assert.equal(result[2], 'callback pass return');
            assert.equal(result[3], 'callback fail return');

        });

        it('inner fail callbacks', function() {

            result = v.validate([c.isString(22),
                    'this should be the returned',
                    null
                ], [c.isString('33'),
                    'this shouldnt be the returned',
                    null
                ],

                [c.isString('some text'),
                    function() {
                        return 'callback pass return';
                    },
                    null
                ],

                [c.isString(33),
                    function() {
                        return 'callback fail return';
                    },
                    null
                ]

            );

            assert.equal(result[0], 'this should be the returned');
            assert.notEqual(result[1], 'this shouldnt be the returned');
            assert.equal(result[1], true);
            assert.equal(result[2], true);
            assert.equal(result[3], 'callback fail return');
        });

    });

    describe('outer callbacks test', function() {
        var result;
        it('test outer callback pass', function() {
            var temp = 'nothing changed';
            result = v.validate([c.isString('hello'),
                    null,
                    null
                ],

                [function() {
                    temp = 'fail';
                }, function() {
                    temp = 'pass';
                }]);

            assert.equal(temp, 'pass');

        });
        it('test outer callback pass', function() {
            var temp = 'nothing changed';
            result = v.validate([c.isString(33),
                null,
                null
            ], [function() {
                temp = 'fail';
            }, function() {
                temp = 'pass';
            }]);
            assert.equal(temp, 'fail');

        });

    });

})
