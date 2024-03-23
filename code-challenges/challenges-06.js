'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max = -Infinity;
    // write your code here
    for (let i = 0; i < arr.length; i++) {
        
        if(max < arr[i]){
            max = arr[i];
        }
        
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum = 0;
    // write your code here

    for (let e = 0; e < arr.length; e++) {
        
        if(typeof arr[e] !== 'string'){
            sum += arr[e];
        }
        
    }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    // write your code here
    let reversedArray = [];

    for (let k = arr.length-1; k >= 0; k--) {
        
        reversedArray.push(arr[k]);
        
    }

    return reversedArray;
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};