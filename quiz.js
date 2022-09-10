const formout=document.querySelector(".quiz-form");
const submitBtnClick=document.querySelector(".submit-btn");
const outputBoxArea = document.querySelector("#output")





const correctAnswers = ["90",
"obtuse",
"14,15,26",
"30",
"one right angle"];

function calculateScore(){
let score=0;
let index=0;
const formResults = new FormData(formout);
for(let value of formResults.values()){
    console.log(value);
    if(value== correctAnswers[index])
    score=score+1;
    index++;

}
console.log(score);
outputBoxArea.innerText = "Your score is  " + score;
}

submitBtnClick.addEventListener('click',calculateScore);