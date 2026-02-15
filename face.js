export function updateFace(emotion){

    const eyes = document.getElementById("eyes");
    const mouth = document.getElementById("mouth");

    switch(emotion){

        case "happy":
            eyes.style.height="20px";
            mouth.style.borderRadius="0 0 50px 50px";
            break;

        case "scared":
            eyes.style.height="40px";
            mouth.style.borderRadius="50%";
            break;

        case "love":
            eyes.style.background="pink";
            break;

        case "sad":
            mouth.style.borderRadius="50px 50px 0 0";
            break;

        case "excited":
            eyes.style.background="cyan";
            break;

        case "sleepy":
            eyes.style.height="5px";
            break;

        case "curious":
            eyes.style.background="yellow";
            break;

        default:
            eyes.style.height="25px";
            eyes.style.background="white";
            mouth.style.borderRadius="0";
    }
}
