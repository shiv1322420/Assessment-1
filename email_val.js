//program to validate the email address

var email="sk623520@gmail.co.in";                                             //intialization of string email
var reg=/^([a-z\d\.-]+)@([a-z]{2,10}[.])([a-z]{2,10})(.[a-z]{2,10})?$/g     //intialization of regular expresstion
if(reg.test(email)==true)                                                   //test() validate the string that is paased as argument with regex: and it resturns true or false
{
  console.log("valid email address");
}
else
{
  console.log("not valid email address");
}


