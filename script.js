// Write a code snippet to find the length of an array.
let arr=["apple","bannana","orange","mango","grapes"]
console.log(arr)
console.log(arr.length)
// How do you add an element to the end of an array?
arr.push("gova")
console.log(arr)
// How do you remove the last element from an array?
arr.pop()
console.log(arr)
// How do you add an element to the beginning of an array?
arr.unshift("avacoda")
console.log(arr)
// How can you remove the first element from an array?
arr.shift()
console.log(arr)
// How do you reverse the elements in an array?
arr.reverse()
console.log(arr)
// How can you find the index of a specific value in an array?
let position=arr.indexOf("orange")
console.log(position)
// How can you check if a certain value exists in an array?
let check=arr.includes("mango")
console.log(check)
// How can you sort the elements of an array in ascending order?
let arry = [4, 1, 3, 5, 2];
 console.log(arry)
 arry.sort((a, b) => a - b);
  console.log(arry); 
// How can you convert an array to a string using commas as separators?
let arry1 = [1, 2, 3, 4];
console.log(arry1)
let str = arry1.join(',');
 console.log(str); 
//  Write a code snippet that adds an element to the end of an array, then removes the first element.
let arraynum = [1, 2, 3,4,5,6];
arraynum.push(7); 
arraynum.shift(); 
console.log(arraynum); 
// How can you reverse an array and then join the elements into a string?
let arraynum1 = [1, 2, 3, 4];
let reversedString = arraynum1.reverse().join(','); 
console.log(reversedString); 
// Write a code that first sorts an array in ascending order, then removes the last element.
let arraynum3 = [3, 4, 5];
arraynum3.unshift(1, 2); 
arraynum3.shift(); 
// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
let length = arraynum3.length; 
console.log(arraynum3); 
console.log(length); 
// How do you combine two arrays, sort the combined array, and then remove the last element?
let arraynum4 = [4, 2, 5, 1];
arraynum4.sort((a, b) => a - b); 
arraynum4.pop(); 
console.log(arraynum4); 
