function BankAccount( customername ,balance =0  ){
    this.customername = customername
    this.balance = balance
    this.accountno = Date.now()

    this.deposit = function(amount){
        this.balance += amount;
    } 

    this.withdrawl = function(amount){
        this.balance -= amount
    }
    
}

const acc = document.querySelector("#accountForm");
const name = document.querySelector("#customerName");
const balance = document.querySelector("#balance");
acc.addEventListener("click" , function(e){
    e.preventDefault();
    
})

// const Ram  = new BankAccount("Ram" , 1000);
// const Sham  = new BankAccount("Sham" , 1000);
// Sham.deposit(100);
// Sham.withdrawl(200);
// console.log(Ram , Sham);
