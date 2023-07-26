function twoSum(array,target){
    let left=0;
    let right=array.length-1;
    let indices=[];

    while(left<right){
        if(array[left]+array[right]===target){
            indices.push(left,right);
            break;
        }
        else if(array[left]+array[right]<target){
            left++;
        }
        else{
            right--;
        }
    }
    return indices;
}
const array=[1,3,6,8,11,15];
const target=9;

const indices=twoSum(array,target);
console.log(indices);