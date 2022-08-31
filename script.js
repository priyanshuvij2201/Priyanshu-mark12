const angle1=document.querySelector("#a1");
const angle2=document.querySelector("#a2");
const angle3=document.querySelector("#a3");
const checkAngle=document.querySelector("#check-angle")
const outputBoxArea= document.querySelector("#output-boxarea");

function checkIsTriangle()
{   
    if(angle1.value && angle2.value && angle3.value)
    {
    const sum= Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    
    if(sum==180 && angle2.value>0 && angle1.value>0 && angle3.value>0)
    console.log("It is a triangle");
    else
    {console.log("It is not a triangle");}
}
else
{
    console.log("POlease enter all values");
}
}

checkAngle.addEventListener('click',checkIsTriangle)