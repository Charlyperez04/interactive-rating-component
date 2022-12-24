const containerRating=document.querySelector('.container-rating');
const containerStars=document.querySelector('.container-submitted');
const button1=document.querySelector('.select-button-1');
const button2=document.querySelector('.select-button-2');
const button3=document.querySelector('.select-button-3');
const button4=document.querySelector('.select-button-4');
const button5=document.querySelector('.select-button-5');
const submitButton=document.querySelector('.submit-button');
let starNumbersContainers=document.querySelector('#starNumbersContainer');
let starNumbers=0;

button1.addEventListener('click',changeColor1);
button2.addEventListener('click',changeColor2);
button3.addEventListener('click',changeColor3);
button4.addEventListener('click',changeColor4);
button5.addEventListener('click',changeColor5);
submitButton.addEventListener('click',changeView);

function changeView(){
    containerRating.classList.add('inactive');
    containerStars.classList.remove('inactive');
}
function changeColor1() {
    button2.style.backgroundColor ="var(--Dark-Blue)"
    button2.style.color="var(--Medium-Grey)";
    button2.style=':hover{color:"var(--Medium-Grey}'
    button3.style.backgroundColor ="var(--Dark-Blue)"
    button3.style.color="var(--Medium-Grey)";
    button3.style=':hover{color:"var(--Medium-Grey}'
    button4.style.backgroundColor ="var(--Dark-Blue)"
    button4.style.color="var(--Medium-Grey)";
    button4.style=':hover{color:"var(--Medium-Grey}'
    button5.style.backgroundColor ="var(--Dark-Blue)"
    button5.style.color="var(--Medium-Grey)";
    button5.style=':hover{color:"var(--Medium-Grey}'
    button1.style.backgroundColor="var(--Orange)";
    button1.style.color="white";
    starNumbers=1;
    starNumbersContainers.innerText="You selected "+starNumbers+" out of 5";
}
function changeColor2() {
    button1.style.backgroundColor ="var(--Dark-Blue)"
    button1.style.color="var(--Medium-Grey)"
    button1.style=':hover{color:"var(--Medium-Grey}'
    button3.style.backgroundColor ="var(--Dark-Blue)"
    button3.style.color="var(--Medium-Grey)"
    button3.style=':hover{color:"var(--Medium-Grey}'
    button4.style.backgroundColor ="var(--Dark-Blue)"
    button4.style.color="var(--Medium-Grey)"
    button4.style=':hover{color:"var(--Medium-Grey}'
    button5.style.backgroundColor ="var(--Dark-Blue)"
    button5.style.color="var(--Medium-Grey)"
    button5.style=':hover{color:"var(--Medium-Grey}'
    button2.style.backgroundColor="var(--Orange)";
    button2.style.color="white";
    starNumbers=2;
    starNumbersContainers.innerText="You selected "+starNumbers+" out of 5";
}
function changeColor3() {
    button1.style.backgroundColor ="var(--Dark-Blue)"
    button1.style.color="var(--Medium-Grey)"
    button1.style=':hover{color:"var(--Medium-Grey}'
    button2.style.backgroundColor ="var(--Dark-Blue)"
    button2.style.color="var(--Medium-Grey)"
    button2.style=':hover{color:"var(--Medium-Grey}'
    button4.style.backgroundColor ="var(--Dark-Blue)"
    button4.style.color="var(--Medium-Grey)"
    button4.style=':hover{color:"var(--Medium-Grey}'
    button5.style.backgroundColor ="var(--Dark-Blue)"
    button5.style.color="var(--Medium-Grey)"
    button5.style=':hover{color:"var(--Medium-Grey}'
    button3.style.backgroundColor="var(--Orange)";
    button3.style.color="white";
    starNumbers=3;
    starNumbersContainers.innerText="You selected "+starNumbers+" out of 5";
}
function changeColor4() {
    button1.style.backgroundColor ="var(--Dark-Blue)"
    button1.style.color="var(--Medium-Grey)"
    button1.style=':hover{color:"var(--Medium-Grey}'
    button2.style.backgroundColor ="var(--Dark-Blue)"
    button2.style.color="var(--Medium-Grey)"
    button2.style=':hover{color:"var(--Medium-Grey}'
    button3.style.backgroundColor ="var(--Dark-Blue)"
    button3.style.color="var(--Medium-Grey)"
    button3.style=':hover{color:"var(--Medium-Grey}'
    button5.style.backgroundColor ="var(--Dark-Blue)"
    button5.style.color="var(--Medium-Grey)"
    button5.style=':hover{color:"var(--Medium-Grey}'
    button4.style.backgroundColor ="var(--Orange)"
    button4.style.color="white";
    starNumbers=4;
    starNumbersContainers.innerText="You selected "+starNumbers+" out of 5";
}
function changeColor5() {
    button1.style.backgroundColor ="var(--Dark-Blue)"
    button1.style.color="var(--Medium-Grey)"
    button1.style=':hover{color:"var(--Medium-Grey}'
    button2.style.backgroundColor ="var(--Dark-Blue)"
    button2.style.color="var(--Medium-Grey)"
    button2.style=':hover{color:"var(--Medium-Grey}'
    button3.style.backgroundColor ="var(--Dark-Blue)"
    button3.style.color="var(--Medium-Grey)"
    button3.style=':hover{color:"var(--Medium-Grey}'
    button4.style.backgroundColor ="var(--Dark-Blue)"
    button4.style.color="var(--Medium-Grey)"
    button4.style=':hover{color:"var(--Medium-Grey}'
    button5.style.backgroundColor ="var(--Orange)"
    button5.style.color="white";
    starNumbers=5;
    starNumbersContainers.innerText="You selected "+starNumbers+" out of 5";
}

function changeColorSubmit() {
    submitButton.style.backgroundColor="var(--White)";
    submitButton.style.color="var(--Orange)";
}
