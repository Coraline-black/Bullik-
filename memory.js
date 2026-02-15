let owner = "me";
let known = [];

export function isOwner(name){
    return name === owner;
}

export function rememberPerson(name){
    if(!known.includes(name))
        known.push(name);
}

export function isKnown(name){
    return known.includes(name);
}
