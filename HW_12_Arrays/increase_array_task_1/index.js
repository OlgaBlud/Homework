const array = [0, 1, 2];
function increaseNumbersByOne(numbers) {
   for (let i = 0; i < numbers.length; i++) {
      numbers[i]++;
   }
   return (numbers);
}
const increasedArray = increaseNumbersByOne(array);

console.log(increasedArray);




