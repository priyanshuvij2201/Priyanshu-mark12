const angle1=document.querySelector("#a1");
const angle2=document.querySelector("#a2");
const angle3=document.querySelector("#a3");
const checkAngle=document.querySelector("#check-angle")
const outputBoxArea= document.querySelector("#output-boxarea");

function checkIsTriangle()
{   
    if(angle1.value && angle2.value && angle3.value)
    {
    var sum= ((Number(angle1.value)+Number(angle2.value)+Number(angle3.value))/2);
    console.log(sum);
    var total=(sum*(sum-Number(angle1.value))*(sum-Number(angle2.value))*(sum-Number(angle3.value)));
    console.log(total);
    var area = Math.sqrt(total);
    if(angle2.value>0 && angle1.value>0 && angle3.value>0)
    outputBoxArea.innerText="The Area of Triangle  is " + area.toFixed(2);
    else
    {outputBoxArea.innerText="Please Enter Right Values";}
}
else
{
    outputBoxArea.innerText="Please enter all values";
}
}

checkAngle.addEventListener('click',checkIsTriangle)