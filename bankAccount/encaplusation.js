class Employee{
    static companyName = "time_pass_company";
    name;
    department;
    #salary;
    constructor(salary , name , department){
        this.#salary = salary;
        this.department = department;
        this.name = name;
    }
    increas(amount){
        this.#salary += amount
    }
    show(){
        console.log("Salary :- "+this.#salary);
        
    }
}
const s1 = new Employee( 20000,  "JAY" , "IT");
console.log(s1);
s1.show();
console.log("Company name :-"+Employee.companyName);





