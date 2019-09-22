//String and Template litrals

var st1="Hello I am here.";      //String litral
var st2=`Hello I am here`;        //Template literal
var st3 = {
  firstname: 'Shiv',
  lastname: 'Kumar',
};

console.log('Hi, I\'m ' + st3.firstname +" "+st3.lastname+ '! Call me "' + st3.firstname + '".'); //string concatination in string literal;
console.log(`Hi, I'm ${st3.firstname} ${st3.lastname}! Call me "${st3.firstname}".`); //string concatination in Template literal;

 //Multi-line string in normal string litrals
console.log('string text line 1\n' +                   
'string text line 2');

// Multi-line string in template litrals
console.log(`string text line 1                         
string text line 2`);

//use of string.raw
var st4=String.raw`C:\Development\profile\aboutme.html`;
console.log(st4);


