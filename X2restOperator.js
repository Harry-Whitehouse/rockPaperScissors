const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;

        /* validate number scope is created inside
            of the sumUp function, this particular
            function checks if an entered value is                  a number or not, if the value is NaN
            it will return 0.*/
    };
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    resultHandler(sum);
};

const subtractFunc = function() {
    let sum = 0;
    for (const num of arguments) {
        /* you can use the arguments variable when 
            using the function keyword. it is built
            into js - it cant be used in arrow functions etc. */
        sum -= num;
    }
    return sum;
};

const showResult = (result) => {
    alert("the result after adding all numbers is: " + result);
};

sumUp(showResult, 1, 5, 10, -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
console.log(subtractFunc(1, 5, 10, -3, 6, 10));

/* rest operators are a useful paramenter value 
that can be used whne you dont know exactly how many
objects will be used - for exaple in a calculator. */