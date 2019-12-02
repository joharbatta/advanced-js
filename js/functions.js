/**Update Topic Name */
document.getElementById('topic-display').innerHTML = 'Functions';

//A Function Declaration can be called earlier than it is defined.
//This little magic happens because of Hoisting
//alert(sum(5,2));

/**Function Declaration */
// function sum(a, b) {
//     return a + b;
//   }

/**Function Expression */
//A Function Expression is created when the execution reaches it and is usable only from that moment.
// let sum = function(a, b) {
//     return a + b;
//   };

/**Anonymous Functions */
//The function without a name
//The code block you just tried above was using anonymous function

/**Self-Invoked or Immmediately Invoked Functions */
// (function () {
//     // I will invoke myself
//     alert('I just called myself.');
// })();

/**The Function() Constructor */
// var sum = new Function("a","b","return a + b");
// console.log("Sum is", sum(10,5));

/** ES6 - Arrow Functions */
//Arrow functions do not have their own this. They are not well suited for defining object methods.
// let sum = (a,b) =>{
//     return a + b;
// };


// const sum = (a,b) => a + b;

// console.log(sum(5,2));

/**Call, Apply & Bind */
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },

    fullNameWithParameters: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}

var person2 = {
    firstName: "Alice",
    lastName: "Johnson"
}

//call() and apply() will call the function immediately
var fullNameByCall = person.fullName.call(person1);
console.log(typeof fullNameByCall);
console.log('fullNameByCall', fullNameByCall);

var fullNameByApply = person.fullName.apply(person1);
console.log(typeof fullNameByApply);
console.log('fullNameByApply', fullNameByApply);

//So, what's the difference?
//The difference is:
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

var fullNameByCallAndParameters = person.fullNameWithParameters.call(person1, 'California', 'US');
console.log('fullNameByCallAndParameters', fullNameByCallAndParameters);

var fullNameByApplyAndParameters = person.fullNameWithParameters.apply(person1, ['California', 'US']);
console.log('fullNameByApplyAndParameters', fullNameByApplyAndParameters);

//bind() returns a new function, so you can call the function at a later time
var fullNameByBind = person.fullName.bind(person1);
console.log('typeof fullNameByBind',typeof fullNameByBind);
console.log('fullNameByBind', fullNameByBind());

var fullNameByBindAndParameters = person.fullNameWithParameters.bind(person1, 'California', 'US');
console.log('fullNameByBindAndParameters', fullNameByBindAndParameters());

var fullNameByBindForPerson2= person.fullName.bind(person2);
console.log('fullNameByBindForPerson2',fullNameByBindForPerson2());