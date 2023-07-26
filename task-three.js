function mostfrequentNumberCount(array){
   let maxCount=0;
   let mostfrequentNumber=array[0];

   for(let number of array){
    let count=0;
   for(let otherElement of array){
    if(number===otherElement){
        count++;
    }
   }
   if(count>maxCount){
    maxCount=count;
    mostfrequentNumber=number;
   }
}
return mostfrequentNumber;
}

const array=[3,5,2,5,3,3,1,4,5];
const mostfrequentNumberCounts=mostfrequentNumberCount(array);
console.log(mostfrequentNumberCounts);