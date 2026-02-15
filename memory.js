let people={};

export function rememberPerson(name){
 if(!people[name]){
  people[name]={trust:10};
 } else {
  people[name].trust+=5;
 }
}

export function getTrust(name){
 return people[name]?.trust || 0;
}
