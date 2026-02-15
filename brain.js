import { setEmotion } from "./emotions.js";
import { updateFace } from "./face.js";

const API = "https://bullik.damp-glade-283e.workers.dev/";

export async function seePerson(name){

    try{
        const res = await fetch(API + "?name=" + encodeURIComponent(name));
        const data = await res.json();

        setEmotion(data.emotion);
        updateFace(data.emotion);
    }
    catch(err){
        console.log("Server error",err);
        setEmotion("confused");
        updateFace("confused");
    }
}

export function pet(){
    setEmotion("love");
    updateFace("love");
}

export function ignore(){
    setEmotion("sad");
    updateFace("sad");
}

setInterval(()=>{
    const moods=["neutral","sleepy","curious"];
    const m=moods[Math.floor(Math.random()*moods.length)];
    setEmotion(m);
    updateFace(m);
},8000);
