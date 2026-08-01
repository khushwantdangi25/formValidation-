// // class
// class BankAccount{
//     customerName;
//     accountNumber;
//     balance = 0;

// // ye constructor object ko value assigin karega
//     constructor(customerName , balance){
//         this.customerName = customerName;
//         this.balance = balance;
//     }

// //prototype me jayega ye directly
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }
// const kk = new BankAccount("kk" , 100);
// kk.deposit(1000);
// console.log(kk);

// constructor bankaccount with some prototype and call function

// function BankAccount(accountNumber , balance , customerName){
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//     this.customerName = customerName;
// }

// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount;
// }
// BankAccount.prototype.withdraw = function(amount){
//     this.balance -= amount;
// }

// const a1 = new BankAccount(12334 , 10000 , "jay");
// const a2 = new BankAccount(12332, 1000 , "dev");

// function CurrentAccount(accountNumber , balance , customerName){
//      BankAccount.call(this , accountNumber , balance , customerName);
//     this.take = function(){
//         console.log("loan")
//     }
// }

// const jj = new CurrentAccount(123 , 100000 , "rohan");
// console.log(jj);
// function SavingAccount(accountNumber , balance , customerName){
//      BankAccount.call(this , accountNumber , balance , customerName);
//     this.loan = function(){
//         console.log("loan")
//     }
// }
// const ajju = new SavingAccount(12399 , 1 , "kaju");
// console.log(ajju);

// same with class

// class BankAccount{
//     customerName;
//     accountNumber;
//     balance = 0;
//     constructor(customerName , accountNumber , balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//         this.customerName = customerName;
//     }

//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }

// class CurrentAccount extends BankAccount{
//        branch;
//     constructor(customerName , balance , branch){
//        super( customerName, balance)
//        this.branch = branch;
//     }

//     takeBusinessLoan(amount){
//         console.log("Taking loan" + amount);
//     }
// }

// class SavingAccount extends BankAccount{
//     constructor(balance , accountNumber , customerName){
//         super(balance,accountNumber,customerName)
//     }
//      personalLoan(amount){
//         console.log("Taking loan " + amount);
//     }
// }

// const Daku = new SavingAccount(10000 , 123456789 , "Daku");
// console.log(Daku);
// const kaju = new CurrentAccount("kaju" , 100 , "udz");
// console.log(kaju);

// console.log(Daku.personalLoan(100));

//car

class Car {
  brand;
  color;
  price = 0;

  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  start() {
    console.log(this.brand + " car started.");
  }

  stop() {
    console.log(this.brand + " car stopped.");
  }
}

class ElectricCar extends Car {
  battery;
  constructor(brand, color, price, battery) {
    super(brand, color, price);
    this.battery = battery;
  }
  charge() {
    console.log(this.brand + " is charging.");
  }
}
class PetrolCar extends Car {
  fuelType;
  constructor(brand, color, price, fuelType) {
    super(brand, color, price);
    this.fuelType = fuelType;
  }
  fillFuel() {
    console.log("Filling " + this.fuelType + " fuel.");
  }
}

const tesla = new ElectricCar("Tesla", "White", 50000, "100 kWh");
console.log(tesla);

tesla.start();
tesla.charge();

const bmw = new PetrolCar("BMW", "Black", 70000, "Petrol");
console.log(bmw);

bmw.start();
bmw.fillFuel();
bmw.stop();
