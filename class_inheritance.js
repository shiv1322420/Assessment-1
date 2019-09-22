//Program of inheritance

class Bank{                     //creating class using class keyword
    constructor(balance)
    {
      this.balance=balance; 
    }
    show(amt)
    { 
     //return(" balance is :"+amt);
     return(this.balance=amt);
    }
    DepositProcess(amt)
    {
      let newd=this.balance+amt;
      let a=this.show(newd);
     console.log(`After deposit ${amt} amount is  ${a}`);
    }
    WithdrawProcess(amt)
    {
      let newwith=this.balance-amt;
      let a=this.show(newwith);
     console.log(`After withdraw ${amt} amount is  ${a}`);
    }
    }
    class Customer extends Bank{         //now class Customer inherits the properties of class Bank
    constructor(name,balance)
    {
      super(balance);                   //now we are using super keyword is to access the constructor of class Bank (Base class)
      this.name=name;                  
      console.log("Account holder name: "+this.name);
    }
    Deposit(amount)
    {
    let newd=super.DepositProcess(amount);
    }
    withdraw(amount)
    {
    let newwith=super.WithdrawProcess(amount);  //with super we can also access the methods of base class
    }
    } 
    var c1=new Customer("shiv",1000);
    c1.Deposit(2000);
    c1.withdraw(500);
    


   