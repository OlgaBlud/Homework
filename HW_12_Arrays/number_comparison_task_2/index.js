// variant 1
function filterByMinimalNumber(numbers, minimalNumber) {
   const biggerNumbers = [];
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > minimalNumber) {
         biggerNumbers.push(numbers[i]);
      }
   }
   console.log(numbers);
   console.log(biggerNumbers);
}
filterByMinimalNumber([34, 66, 54, 2, 13, 73, 25, 90, 35], 56);

// variant 2
const numbers = [5, 3, 7, 2, 11];
const minimalNumber = 5;
filterByMinimalNumber2 = (numbers, minimalNumber) => numbers.filter(item => item > minimalNumber);
const biggerNumber2 = filterByMinimalNumber2(numbers, minimalNumber);
console.log(numbers);
console.log(biggerNumber2);


