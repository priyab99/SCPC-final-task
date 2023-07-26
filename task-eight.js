function secondSmallestElement(array){
    let smallestElement=array[0];
    let secondSmallestElement=array[1];

    for(let i=2;i<array.length;i++){
        if(array[i]<smallestElement){
            secondSmallestElement=smallestElement;
            smallestElement=array[i];
        }
        else if(array[i]<secondSmallestElement){
            secondSmallestElement=array[i];
        }
    }
    return secondSmallestElement;
}

const array=[1,7,6,8,11,15];

const secondSmallestNumber=secondSmallestElement(array);
console.log(secondSmallestNumber);