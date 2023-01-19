//UC1-Check Employee Present
class Attendence
{
    attendence()
    {
        const Absent=0;
let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck==Absent)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}
    }
}
let myattendence =new Attendence();
myattendence.attendence();


//Calculate Daily Employee Wage based on part time or full time work

const Part_Time=1;
const Full_Time=2;
const Part_Time_Hours=4;
const Full_Time_Hours=8;
const Wage_per_Hours=20;

 empHrs=0;
empcheck=Math.floor(Math.random()*10)%3;
switch(empcheck)
{
    case Part_Time:
        empHrs=Part_Time_Hours;
        break;
     case Full_Time:
        empHrs=Full_Time_Hours;
        break;
    default:
        empHrs=0;
}
 empWage=empHrs*Wage_per_Hours;
console.log("Emp Wage: " +empWage);
//Refactored Code To Write Function For Dayily Working Hours
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
    case Part_Time:
        return Part_Time_Hours;
        break;
     case Full_Time:
        return Full_Time_Hours;
        break;
     default :
        return 0;
    }
}
    let empHrs=0;
    let empcheck=Math.floor(Math.random()*10)%3;
    empHrs= getWorkingHours(this.empCheck);
    let empWage=empHrs*Wage_per_Hours;
    console.log("Emp Wage: " +empWage);

  // calculating Wages for a Month
    const Num_Of_Working_Days=2;
    let emphrs=0;
    for(let day=0;day<Num_Of_Working_Days;day++)
    {
        let empCheck=Math.floor(Math.random()*10)%3;
        emphrs+=getWorkingHours(empCheck);
    }
    let empwage=emphrs*Wage_per_Hours;
    console.log("Total hrs: " +emphrs+" Emp Wage: " +empwage);
