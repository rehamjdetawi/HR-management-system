function Employee(empidValue, fullNvalue, depValue, levValue, salVaalue) {
    this.employeeId = empidValue;
    this.fullName = fullNvalue; // it's an array 
    this.imagePath = `./photos/${this.employeeId}.PNG`;
    this.departMent = depValue;
    this.leVel = levValue;
    this.salAry = salVaalue;
}
Employee.prototype.calculateSalary = function () {
    if (this.leVel === "Senior") {
        let max = 2000;
        let min = 1500;
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        let tax=rand * (7.5 / 100);
        this.salAry = rand - tax;
    } else if (this.leVel === "Mid-Senior") {
        let max = 1500;
        let min = 1000;
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        let tax= rand* (7.5 / 100);
        this.salAry = rand - tax;

    } else if (this.leVel === "Junior") {
        let max = 1000;
        let min = 500;
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        let tax=rand * (7.5 / 100);
        this.salAry = rand - tax;

    }

}
Employee.prototype.render=function(){
    document.write(`<p> ${this.fullName} and the salary is${this.salAry} </p>`);

}

const emplyee1 = new Employee('1000', 'Ghazi Samer', 'Administration','Senior',0);
const emplyee2 = new Employee('1001	','Lana Ali'	,'Finance'	,'Senior',0);
const emplyee3 = new Employee('1002	','Tamara Ayoub'	,'Marketing'	,'Senior',0);
const emplyee4 = new Employee('1003	','Safi Walid'	,'Administration'	,'Mid-Senior',0);
const emplyee5 = new Employee('1004	','Omar Zaid	','Development	','Senior',0);
const emplyee6 = new Employee('1005	','Rana Saleh	','Development	','Junior',0);
const emplyee7 = new Employee('1006	','Hadi Ahmad	','Finance	','Mid-Senior',0);
// let arr=[emplyee1,emplyee2,emplyee3,emplyee4,emplyee5,emplyee6,emplyee7];

let s1=emplyee1.calculateSalary();
let s2=emplyee2.calculateSalary();
let s3=emplyee3.calculateSalary();
let s4=emplyee4.calculateSalary();
let s5=emplyee5.calculateSalary();
let s6=emplyee6.calculateSalary();
let s7=emplyee7.calculateSalary();
let arr=[emplyee1,emplyee2,emplyee3,emplyee4,emplyee5,emplyee6,emplyee7];
for(var i=0;i<arr.length;i++)
{
arr[i].render();
}
console.table(arr);
// console.log(emplyee1.render)