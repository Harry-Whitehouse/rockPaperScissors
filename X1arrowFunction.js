/*arrow functions are useful becuase they use less code
they allow you to save time.

if the function only contains one expression, you dont have to
include curly braces.

you need an equals sign after the constant name.

You must include parentheses if you have either zero () or 
more than one (a,b,c) parameter - the parentheses go before the
arrow - =>.

however, if you have exactly one argument, you can omitt
the parenthesis.

if the function returns an object, parenthesis are required around
the object, because js will interpret the braces as the function body.
({name:'Harry'})

*/

//this:

const add = (a, b) => a + b;

//is equivalent to:

const add2 = function(a, b) {
    return a + b;
};