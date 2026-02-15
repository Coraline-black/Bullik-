import { setEmotion } from "./emotions.js";
import { updateFace } from "./face.js";
import { updateNeeds, getMood } from "./needs.js";
import { rememberPerson, getTrust } from "./memory.js";

const API="https://bullik.damp-glade-283e.workers.dev/";

window.seePerson = async(name)=>{

    rememberPerson(name);

    try{
        const res=await fetch(API+"?name="+name);
        const data=await res.json();

        let trust=getTrust(name);

        if(trust>70) setEmotion("love");
        else if(trust>40) setEmotion("happy");
        else if(trust>10) setEmotion("curious");
        else setEmotion("scared");

        updateFace(data.emotion);

    }catch{
        setEmotion("confused");
        updateFace("confused");
    }
};

window.pet=()=>{
    setEmotion("love");
    updateFace("love");
};

window.feed=()=>{
    window.petState.hunger=0;
    setEmotion("happy");
    updateFace("happy");
};

window.ignore=()=>{
    setEmotion("sad");
    updateFace("sad");
};

window.petState={
 hunger:20,
 energy:80,
 boredom:10,
 loneliness:0
};

setInterval(()=>{
 updateNeeds(window.petState);
 setEmotion(getMood(window.petState));
 updateFace(getMood(window.petState));
},6000);
