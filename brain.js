import { getEmotion, setEmotion } from "./emotions.js";
import { rememberPerson, isOwner, isKnown } from "./memory.js";
import { reactToPerson, idleBehavior } from "./behavior.js";
import { updateFace } from "./face.js";

let currentPerson = null;

export function seePerson(name){
    currentPerson = name;

    if(isOwner(name)){
        setEmotion("happy");
    }
    else if(isKnown(name)){
        setEmotion("curious");
    }
    else{
        setEmotion("scared");
        rememberPerson(name);
    }

    reactToPerson(name);
    updateFace(getEmotion());
}

export function pet(){
    setEmotion("love");
    updateFace(getEmotion());
}

export function ignore(){
    setEmotion("sad");
    updateFace(getEmotion());
}

setInterval(()=>{
    idleBehavior();
    updateFace(getEmotion());
},4000);
