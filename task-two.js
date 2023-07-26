function sumOfPositiveNumber(array){

    let sumOfPosNums=0;

    for(let number of array){
        if(number>0){
            sumOfPosNums+=number;
        }
       
    }
    return sumOfPosNums;
}

const array=[2,-5,10,-3,7];
const sum=sumOfPositiveNumber(array);
console.log(sum);