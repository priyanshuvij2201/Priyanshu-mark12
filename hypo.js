const angle1=document.querySelector("#a1");
const angle2=document.querySelector("#a2");
const checkAngle=document.querySelector("#check-angle")
const outputBoxArea= document.querySelector("#output-boxarea");

function checkIsTriangle()
{   
    if(angle1.value && angle2.value)
    {
    const sum= Number(angle1.value*angle1.value) + Number(angle2.value*angle2.value); 
    var hypo= Math.sqrt(sum);
    console.log(hypo.toFixed(2));
    if(angle2.value>0 && angle1.value>0)
    outputBoxArea.innerText="The Hypotenuse is " + hypo.toFixed(2);
    else
    {outputBoxArea.innerText="Please Enter Right Values";}
}
else
{
    outputBoxArea.innerText="Please enter all values";
}
}

checkAngle.addEventListener('click',checkIsTriangle)