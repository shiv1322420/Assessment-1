//Program Destructuring Assignmetns

//use with array
 var a, rest;
 var arra1=[1,2,3,4,5,6];
 [a, ...rest]=arra1;      //unpack elements from array and put it into variables using rest parameter
console.log(a);               //1
console.log(rest);          //2,3,4,5,6

//use with objects
var obj = {firstname: "shiv", lastname: "kumar", age:23};
var {firstname, lastname, age} = obj;

console.log(firstname); 
console.log(lastname);
console.log(age); 

//we can also swap with the help of  dustructing assignments 
var x=5,y=10;
[x,y]=[y,x];   //swap the values 
console.log("x :"+x);
console.log("y : "+y);


