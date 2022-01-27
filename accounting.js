let div = document.getElementById('div');
render =(emp1)=>{ 
let div1 = document.createElement('div');
div.appendChild(div1);
div1.style.width="600px";
div1.style.height="400px";
let table=document.createElement('table');
div1.appendChild(table);
let row_1=document.createElement('tr');
table.appendChild(row_1)
let heading_1=document.createElement('th')
heading_1.innerHTML="Department";
row_1.appendChild(heading_1);
let heading_2=document.createElement('th')
heading_2.innerHTML="Number of emplyees";
row_1.appendChild(heading_2);
let heading_3=document.createElement('th')
row_1.appendChild(heading_3);
heading_3.innerHTML="Avearage salary";
let heading_4=document.createElement('th')
heading_4.innerHTML="Total salary";
row_1.appendChild(heading_4);

let row_2 =document.createElement('tr');
table.appendChild(row_2);
let row_2_data_1=document.createElement('td')
row_2.appendChild(row_2_data_1);
row_2_data_1.innerHTML="Administration";
let row_2_data_2=document.createElement('td')
row_2.appendChild(row_2_data_2);
row_2_data_2.innerHTML="yyyyy";
let row_2_data_3=document.createElement('td')
row_2.appendChild(row_2_data_3);
row_2_data_3.innerHTML=" yyyyy";
let row_2_data_4=document.createElement('td')
row_2.appendChild(row_2_data_4);
row_2_data_4.innerHTML="yyyyy";


let row_3=document.createElement('tr');
table.appendChild(row_3);
let row_3_data_1=document.createElement('td');
row_3.appendChild(row_3_data_1);
row_3_data_1.innerHTML="Marketing";
let row_3_data_2=document.createElement('td')
row_3_data_2.innerHTML="";
let row_3_data_3=document.createElement('td')
row_3_data_3.innerHTML=" ";
let row_3_data_4=document.createElement('td')
row_3_data_4.innerHTML="";

row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);



let row_4=document.createElement('tr');
table.appendChild(row_4)
let row_4_data_1=document.createElement('td')
row_4_data_1.innerHTML="Development";
let row_4_data_2=document.createElement('td')
row_4_data_2.innerHTML="";
let row_4_data_3=document.createElement('td')
row_4_data_3.innerHTML=" ";
let row_4_data_4=document.createElement('td')
row_4_data_4.innerHTML="";
row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);


let row_5=document.createElement('tr');
table.appendChild(row_5)
let row_5_data_1=document.createElement('td')
row_5_data_1.innerHTML="Finance";
let row_5_data_2=document.createElement('td')
row_5_data_2.innerHTML="";
let row_5_data_3=document.createElement('td')
row_5_data_3.innerHTML=" ";
let row_5_data_4=document.createElement('td')
row_5_data_4.innerHTML="";
row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);

}
render(readFromLocalS());
function readFromLocalS() {
    let jsonArr = localStorage.getItem('employeeCard');
    let arr = JSON.parse(jsonArr);
    return arr;
}
