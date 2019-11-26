//ANONYMOUS FUNCTION
var s = function (a, b) {
    return a + b
};
 var z = s(7, 8);
 console.log(z);

 //CONSTRUCTOR FUNCTION
 var myFunction = new Function("a", "b", "return a * b");
 var s = myFunction(7, 5);
 console.log(s);


//ARROW FUNCTION
const x = (x, y) => x + y;
console.log(x(5, 5));