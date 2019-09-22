// Program to check whether the objects have same properties and values or not
var obj1 = {              //creating object           
  name: "shiv",
  class: "11th",
  roll_no: 21,
  age: 23,
};
var obj2 = {
  name: "shiv",
  class: "11th",
  roll_no: 21,
  age: 23,

};
function compare(obj1, obj2) {
  var a = Object.getOwnPropertyNames(obj1);   //intialize properties of object obj1 into varibale a
  var b = Object.getOwnPropertyNames(obj2);   //intialize properties of object obj1 into varibale b
  var av = Object.values(obj1);               //intialize values of object obj1 into varibale av
  var bv = Object.values(obj2);               //intialize values of object obj2 into varibale bv
  if (a.length !== b.length)                  //compare number of propierties of both objects
  {
    return "number of properties are not  equal";
  }
  else {
    if (av.length == bv.length)                 //compare number of values of both objects
    {
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < av.length; j++) {
          if (a[i] !== b[i])                    //compare  properties
          {
            return "properties are not same";
          }
          else {
            if (av[i] !== bv[i])                //compare values
            {
              return "values are not same";
            }
          }
        }

      }
    }
  }
  return "Properties and values are same";

 
}

var result = compare(obj1, obj2);
console.log(result);
