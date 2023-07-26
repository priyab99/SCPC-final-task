function reverseString(string){
    let reversedString= " ";
    for(let i=string.length-1;i>=0;i--){
        reversedString+=string[i];
    }
    return reversedString;
}

const string="hello world";

const reversedString=reverseString(string);
console.log(reversedString);