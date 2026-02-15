export function updateFace(emotion){

const e1=document.getElementById("eye1");
const e2=document.getElementById("eye2");
const mouth=document.getElementById("mouth");

const eyes=[e1,e2];

eyes.forEach(e=>{
    e.style.height="25px";
    e.style.background="white";
});

mouth.style.borderRadius="0";

switch(emotion){

case "happy":
    mouth.style.borderRadius="0 0 50px 50px";
break;

case "sad":
    mouth.style.borderRadius="50px 50px 0 0";
break;

case "scared":
    eyes.forEach(e=>e.style.height="45px");
break;

case "love":
    eyes.forEach(e=>e.style.background="pink");
break;

case "excited":
    eyes.forEach(e=>e.style.background="cyan");
break;

case "sleepy":
    eyes.forEach(e=>e.style.height="6px");
break;

case "curious":
    eyes.forEach(e=>e.style.background="yellow");
break;

case "confused":
    eyes[0].style.background="red";
    eyes[1].style.background="blue";
break;

default:
    mouth.style.borderRadius="0";
}
}
