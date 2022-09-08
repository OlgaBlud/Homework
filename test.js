import { TheLargestNumber } from './index.js';

const result1 = TheLargestNumber(4, '4.5', '5.6');
const areEqual1 = result1 === "The 3rd number is largest and equal: 5.6";
console.log(areEqual1);

const result2 = TheLargestNumber('5.6', 4, '4.5');
const areEqual2 = result2 === "The 1st number is largest and equal: 5.6";
console.log(areEqual2);

const result3 = TheLargestNumber(4, '5.6', '4.5');
const areEqual3 = result3 === "The 2nd number is largest and equal: 5.6";
console.log(areEqual3);

const result4 = TheLargestNumber(5.6, '5.6', '4.5');
const areEqual4 = result4 === "The 1st and the 2nd number are lagest and equal: 5.6";
console.log(areEqual4);

const result5 = TheLargestNumber(5.6, '4', '5.6');
const areEqual5 = result5 === "The 1st and the 3d number are lagest and equal: 5,6";
console.log(areEqual5);

const result6 = TheLargestNumber(4, '5.6', '5.6');
const areEqual6 = result6 === "The 2nd and the 3d number are lagest and equal: 5,6";
console.log(areEqual6);

const result7 = TheLargestNumber(7.7, '7.7', '7.7');
const areEqual7 = result7 === "All three numbers are equal. And equal: 7.7";
console.log(areEqual7);