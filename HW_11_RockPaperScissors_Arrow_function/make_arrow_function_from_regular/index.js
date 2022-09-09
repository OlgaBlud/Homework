// Rewrite code using arrow function

// const plantNeedsWater = function(day) {
//  if (day === 'Wednesday') {
//    return true;
//  } else {
//    return false;
//  }
// };
const plantNeedsWater = day => {
   if (day === 'WEDNESDAY') {
      return true;
   } else {
      return false;
   }
}
let day = prompt('What day is today?');
day = day.toUpperCase();
console.log(plantNeedsWater(day));

