let formid = document.getElementById('formId');
let employeecard = document.getElementById('employeeCard');
let allEmployee = [];
checkLocalAndPush();
function Employee(fullName, department, level,empidValue) {
    this.employeeId = empidValue;
    this.fullName = fullName; // it's an array 
    this.imagePath = `./photos/download.png`
    this.departMent = department;
    this.leVel = level;
    this.salAry = 0;
}

     generateid = () => {
         let a=Math.floor((1000 + Math.random()*9000));
     return a
   }
   
    function render (empo){
        employeecard.innerHTML='';
        for (let i = 0; i < empo.length; i++) {
    let div=document.createElement('div');
    employeecard.appendChild(div);
    div.style.backgroundColor="green";
    div.style.width="250px";
    div.style.height="370px";
    div.style.margin="30px"
    div.style.textAlign="center";
    div.style.color="white"
    

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src',empo[i].imagePath);
    img.setAttribute('alt',empo[i].fullName);
    img.style.width="150px"
    img.style.height="150px";

    let h4=document.createElement('h4');
    div.appendChild(h4);
    h4.textContent=`Name : ${empo[i].fullName} - ID: ${generateid()}     -  Department: ${empo[i].departMent} - Level:${empo[i].leVel}`;
  }
}

function cardSubmit(event) {
    event.preventDefault();
    
    let name = event.target.fullName.value;
    let deb = event.target.department.value;
    let Level = event.target.level.value;

    let emp = new Employee(name, deb, Level);
    // emp.render(); 
    
    
    allEmployee.push(emp);

    let jsonArr = toJSON();

    saveToLocalS(jsonArr);

    render(readFromLocalS());
}
function checkLocalAndPush() {
    if (allEmployee.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmployee = arr;
        }
    }
}
function readFromLocalS() {
    let jsonArr = localStorage.getItem('employeeCard');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function toJSON() {
    let jsonArray = JSON.stringify(allEmployee);
    return jsonArray;
}


function saveToLocalS(jsonArray) {
    localStorage.setItem('employeeCard', jsonArray)
}

render(readFromLocalS());

formid.addEventListener('submit', cardSubmit);



    
// Employee.prototype.calculateSalary = function () {
//     this.salAry = netsalary();
 
//  }  
//  let netsalary=()=>{
//     if (this.leVel === "Senior") {
//         let max = 2000;
//         let min = 1500;
//         let rand = Math.floor(Math.random() * (max - min + 1)) + min;
//         let tax=rand * (7.5 / 100);
//         this.salAry = rand - tax;
//     } else if (this.leVel === "Mid-Senior") {
//         let max = 1500;
//         let min = 1000;
//         let rand = Math.floor(Math.random() * (max - min + 1)) + min;
//         let tax= rand* (7.5 / 100);
//         this.salAry = rand - tax;

//     } else if (this.leVel === "Junior") {
//         let max = 1000;
//         let min = 500;
//         let rand = Math.floor(Math.random() * (max - min + 1)) + min;
//         let tax=rand * (7.5 / 100);
//         this.salAry = rand - tax;

//     }
//  }   
 
    
 // const emplyee1 = new Employee('1000', 'Ghazi Samer', 'Administration','Senior',0);
// const emplyee2 = new Employee('1001	','Lana Ali'	,'Finance'	,'Senior',0);
// const emplyee3 = new Employee('1002	','Tamara Ayoub'	,'Marketing'	,'Senior',0);
// const emplyee4 = new Employee('1003	','Safi Walid'	,'Administration'	,'Mid-Senior',0);
// const emplyee5 = new Employee('1004	','Omar Zaid	','Development	','Senior',0);
// const emplyee6 = new Employee('1005	','Rana Saleh	','Development	','Junior',0);
// const emplyee7 = new Employee('1006	','Hadi Ahmad	','Finance	','Mid-Senior',0);
// let arr=[emplyee1,emplyee2,emplyee3,emplyee4,emplyee5,emplyee6,emplyee7];

// let s1=emplyee1.calculateSalary();
// let s2=emplyee2.calculateSalary();
// let s3=emplyee3.calculateSalary();
// let s4=emplyee4.calculateSalary();
// let s5=emplyee5.calculateSalary();
// let s6=emplyee6.calculateSalary();
// let s7=emplyee7.calculateSalary();
// let arr=[emplyee1,emplyee2,emplyee3,emplyee4,emplyee5,emplyee6,emplyee7];
// for(var i=0;i<arr.length;i++)
// {
// arr[i].render();
// }
// console.table(arr);
// console.log(emplyee1.render)