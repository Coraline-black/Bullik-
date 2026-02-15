let known=[];

export function remember(name){
 if(!known.includes(name))
  known.push(name);
}

export function isKnown(name){
 return known.includes(name);
}
