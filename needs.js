export function updateNeeds(p){

 p.hunger+=3;
 p.energy-=2;
 p.boredom+=4;
 p.loneliness+=2;

 if(p.hunger>100)p.hunger=100;
 if(p.energy<0)p.energy=0;
 if(p.boredom>100)p.boredom=100;
 if(p.loneliness>100)p.loneliness=100;
}

export function getMood(p){

 if(p.hunger>80) return "hungry";
 if(p.energy<20) return "sleepy";
 if(p.loneliness>70) return "sad";
 if(p.boredom>70) return "angry";

 return "neutral";
}
