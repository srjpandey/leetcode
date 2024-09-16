
var createCounter = function(init) {
    let a = init;
    return {
        increment: function() {
            return ++a;
        },
        decrement: function(){
            return --a;
        },
        reset: function(){
            a= init;
            return a;
        }
    };
};

