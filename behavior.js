import { setEmotion } from "./emotions.js";

export function reactToPerson(name){
    if(name==="me"){
        setEmotion("excited");
    }
}

export function idleBehavior(){
    let states = ["neutral","sleepy","curious"];
    let r = states[Math.floor(Math.random()*states.length)];
    setEmotion(r);
}
