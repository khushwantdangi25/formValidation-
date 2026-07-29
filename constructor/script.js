function BankAccount(customername, balance = 0) {
  this.customername = customername;
  this.balance = balance;
  this.accountno = Date.now();
}

BankAccount.prototype.deposit = function(amount){
        this.balance += amount;
  };
BankAccount.prototype.withdrawl = function(amount){
        this.balance -= amount;
  };


const user = [];
const acc = document.querySelector("#accountForm");
const name = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

acc.addEventListener("submit", function (e) {
  e.preventDefault();

  const bank = new BankAccount(name.value, +balance.value);
  const bank2 = new BankAccount(name.value, +balance.value);

  user.push(bank);
  user.push(bank2);

  console.log(user);
});

//deposite working
const limitDepo = 100000;
const depo = document.querySelector("#depositForm");
const accNum = document.querySelector("#accNum");
const amount = document.querySelector("#amnt");

depo.addEventListener("submit", function (e) {
  e.preventDefault();
  const account = user.find((u) => u.accountno === +accNum.value);
  if(+amount.value <= limitDepo){
    account.deposit(+amount.value);
    
    console.log(account);
  }
  else{
    alert("Aukat ke bhar ")
  }
  
});

//withdrawl working


const withdraw = document.querySelector("#withdraw");
const accountNum = document.querySelector("#accountNumber");
const withamount = document.querySelector("#amount");

withdraw.addEventListener("submit", function (e) {
  e.preventDefault();
  const account = user.find((u) => u.accountno === +accountNum.value);
  if(+withamount.value <= limitDepo ){
         account.withdrawl(+withamount.value);
       console.log(account);
  }
  else{
    alert("Nhi hoga")
  }
 
});
