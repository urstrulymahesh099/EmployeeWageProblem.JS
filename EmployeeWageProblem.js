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