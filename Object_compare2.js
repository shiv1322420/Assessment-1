 //JSON: JavaScript Object Notation.JSON is a syntax for storing and exchanging data from/to server.
  //compare using JSON.stringigy 

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
  }
  function compare(ob1,ob2)
  {
    if(JSON.stringify(obj1)===JSON.stringify(obj2))  //JSON.stringify convert object into string  
    {
      return "objects have same properties ";
    }
    else
    {
      return "objects have not same properties"
    }
  
  }
    
    var result = compare(obj1, obj2);
    console.log(result);
