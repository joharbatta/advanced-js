//pass by value
function passByWhat(x, y, z) {
    x = x + 5;
    y.name = "chocolate cookie";
    z = {name: "coffee doughnut"};
}

var a = 2;
var b = {name: "plain cookie"};
var c = {name: "plain doughnut"};

passByWhat(a, b, c);

console.log(a);
console.log(b.name);
console.log(c.name);


//by reference

x = [1,2,3]
y = x;
x = [17,18,19];
console.log(x);
console.log(y);