function generateRandomPassword(length){
    const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    const password=[];
    for(let i=0;i<length;i++){
        password.push(character.charAt(Math.floor(Math.random()*character.length)))

    }
    return password.join(" ");
}

const password=generateRandomPassword(12);
console.log(password);