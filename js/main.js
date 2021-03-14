let nameInput=document.getElementById("name");
let ageInput=document.getElementById("age");
let salaryInput=document.getElementById("salary");
let phoneInput=document.getElementById("phone");
let addBtn=document.getElementById("addBtn");
let inputs=document.getElementsByClassName("form-control");
let addForm=document.getElementById("addForm");
var employees;
/*----------------------------localStorage-------------------------- */

if(localStorage.getItem("employeesList")==null)
{
    employees=[];
}
else
{
    employees=JSON.parse(localStorage.getItem("employeesList"))
    displayData()
}
/*----------------------------localStorage-------------------------- */

addBtn.onclick=function(){
    if(addBtn.innerHTML=="Add Employee")
    {
        addEmployee();
    }
    else
    {
        updateData() 
    };
    displayData();
    resetData();
}
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();  
})



function addEmployee()
{
    let employee=
    {
        name:nameInput.value,
        age:ageInput.value,
        salary:salaryInput.value,
        phone:phoneInput.value
    }
    employees.push(employee);
    localStorage.setItem("employeesList",JSON.stringify(employees))
}

function displayData()
{
    trs="";
    for(var i=0;i<employees.length;i++)
    {
        trs+=`
            <tr>
                <td class="text-white">${employees[i].name}</td>
                <td class="text-white">${employees[i].age}</td>
                <td class="text-white">${employees[i].salary}</td>
                <td class="text-white">${employees[i].phone}</td>
                <td><button onclick="deleteEmployee(${i})" class="btn btn-danger">Delete</button></td>
                <td><button onclick="getEmployeeData(${i})" class="btn btn-warning">Update</button></td>
            </tr>
            `
    }
    $("#myTable").html(trs)
}
/*----------------------------resetData-------------------------- */

function resetData()
{
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].value="";
    }
};
/*----------------------------resetData-------------------------- */

/*----------------------------delete-------------------------- */

function deleteEmployee(index)
{
    employees.splice(index,1)
    displayData()
    localStorage.setItem("employeesList",JSON.stringify(employees))
};
/*----------------------------delete-------------------------- */

/*----------------------------search-------------------------- */

$("#search").keyup(function(){
    search(this.value)
});
function search(searchTxt)
{
    trs="";
    for(var i=0;i<employees.length;i++)
    {
        if(employees[i].name.toLowerCase().includes(searchTxt.toLowerCase()))
        trs+=`
            <tr>
                <td class="text-white">${employees[i].name}</td>
                <td class="text-white">${employees[i].age}</td>
                <td class="text-white">${employees[i].salary}</td>
                <td class="text-white">${employees[i].phone}</td>
                <td><button onclick="deleteEmployee(${i})" class="btn btn-danger">Delete</button></td>
                <td><button onclick="getEmployeeData(${i})" class="btn btn-warning">Update</button></td>
            </tr>
            `
    }
    $("#myTable").html(trs) 
}
/*----------------------------search-------------------------- */

/*----------------------------validation-------------------------- */
addForm.addEventListener('input',()=>{
    let nameRegex=/^[A-Z][a-z]{2,}$/;
    let ageRegex=/^([2-7][0-9]|80)$/;
    let salaryRegex=/^[0-9]{4,5}$/;
    let phoneRegex=/^(010|011|012|015)[0-9]{8}$/;
    if (nameInput.value !=='' && ageInput.value !=='' && salaryInput.value !=='' && phoneInput.value !=='' && nameRegex.test(nameInput.value) && ageRegex.test(ageInput.value) && salaryRegex.test(salaryInput.value) && phoneRegex.test(phoneInput.value))
    {  
        addBtn.removeAttribute("disabled");
    } 
    else{ 
        addBtn.disabled="true"; 
    };
    
})

nameInput.onkeyup=function()
{
    let nameRegex=/^[A-Z][a-z]{2,}$/;
    if(!nameRegex.test(nameInput.value))
    {
        $("#error1").addClass("text-danger")
        $("#error1").html("Your Name is Not Valid (it must start with a capital letter)")
    }
    else
    {
        $("#error1").removeClass("text-danger")
        $("#error1").html("your name is valid")
    }
}

ageInput.onkeyup=function()
{
    let ageRegex=/^([2-7][0-9]|80)$/;
    if(!ageRegex.test(ageInput.value))
    {
        $("#error2").addClass("text-danger")
        $("#error2").html("Entre Valid Age From 20 To 80")
    }
    else
    {
        $("#error2").removeClass("text-danger")
        $("#error2").html("your age is valid")
    }
}

salaryInput.onkeyup=function()
{
    let salaryRegex=/^[0-9]{4,5}$/;
    if(!salaryRegex.test(salaryInput.value))
    {
        $("#error3").addClass("text-danger")
        $("#error3").html("Entre Valid Salary")
    }
    else
    {
        $("#error3").removeClass("text-danger")
        $("#error3").html("your salary is valid")
    }
}

phoneInput.onkeyup=function()
{
    let phoneRegex=/^(010|011|012|015)[0-9]{8}$/;
    if(!phoneRegex.test(phoneInput.value))
    {
        $("#error4").addClass("text-danger")
        $("#error4").html("Entre Valid Phone Number (11 numbers)")
    }
    else
    {
        $("#error4").removeClass("text-danger")
        $("#error4").html("your phone number is valid")
    }
}
/*----------------------------validation-------------------------- */

/*----------------------------update-------------------------- */
function getEmployeeData(index)
{
    nameInput.value=employees[index].name;
    ageInput.value=employees[index].age;
    salaryInput.value=employees[index].salary;
    phoneInput.value=employees[index].phone;
    addBtn.innerHTML="Update Employee";
    currentIndex=index;
}
function updateData()
{
    employees[currentIndex].name=nameInput.value;
    employees[currentIndex].age=ageInput.value;
    employees[currentIndex].salary=salaryInput.value;
    employees[currentIndex].phone=phoneInput.value;
    localStorage.setItem("employeesList",JSON.stringify(employees));
    addBtn.innerHTML="Add Employee";
}
/*----------------------------update-------------------------- */
/*----------------------------particlesJS-------------------------- */

particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
/*----------------------------particlesJS-------------------------- */

