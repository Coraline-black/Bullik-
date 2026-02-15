import { seePerson, pet, ignore } from "./brain.js";

// делаем функции доступными из консоли и кнопок
window.seePerson = seePerson;
window.pet = pet;
window.ignore = ignore;

// стартовое состояние питомца
document.addEventListener("DOMContentLoaded", () => {
    console.log("Pet AI started");

    // начальная эмоция
    seePerson("stranger");

    // автоматическое поведение
    setInterval(()=>{
        const moods=["neutral","curious","sleepy"];
        const mood=moods[Math.floor(Math.random()*moods.length)];
        window.dispatchEvent(new CustomEvent("mood",{detail:mood}));
    },10000);
});
