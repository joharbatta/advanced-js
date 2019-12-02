/**Update Topic Name */
document.getElementById('topic-display').innerHTML = 'Closures';

//Nested Functions
// function parentFunc() {
//     var a = 1;

//     function nestedFunc() {
//       var b = 4; // parentFunc can't use this
//       return a + b; 
//     }
//     return nestedFunc(); // 5
//   }
// console.log(parentFunc());

//Closures
// a closure is created whenever you use a function inside another function.
//Also, an inner function Closure in JavaScript keeps a copy of the state of its local variables and the variables that it refers to in the parent function.
var x = "cookie";

function dessert() {
     var x = "doughnut";

     function print() {
          console.log(x); // prints "doughnut"
     };
     print();
};

dessert();

//TODO: Count example from https://www.w3schools.com/js/js_function_closures.asp