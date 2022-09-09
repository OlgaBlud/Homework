for (let i = 0; i <= 100; i += 1) {
   let str = '';
   if (i % 3 === 0) {
      str = str + 'Fizz'
   }
   if (i % 5 === 0) {
      str = str + 'Buzz'
   }
   console.log(str || i)
}