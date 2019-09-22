//Conversing two arrays in one by using map ,arrow function and iterators.

var a1=[1,2,3,4,5];                 //declaratration and intilization of an array
var a2=[6,7,8,9];    
var a3=[];
a2.map(val=>{                      
  a1.push(val);                    //pushing elemements of a2 at the end of a1;
});
a3=a1[Symbol.iterator]();         //symobl.iterator is protocole that is used to ake array is iteratable
console.log(a3.next().value);     //next().value is fetching the next value untill it the next's property done gets true
console.log(a3.next().value);
console.log(a3.next().value);
console.log(a3.next().value);
console.log(a3.next().value);
console.log(a3.next().value);
console.log(a3.next().value);
console.log(a3.next().value);
console.log(a3.next().value);

