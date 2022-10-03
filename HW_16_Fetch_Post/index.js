fetch('https://catfact.ninja/breeds?limit=10', {
   method: 'GET',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain;charset=UTF-8'
   },
})
   .then((response) => {
      return response.json();
   })
   .then((catbreed) => {
      for (breed of catbreed.data) {
         const breedChoice = document.getElementById('favouriteCatBreed');
         const breedType = document.createElement('option');
         const breedName = document.createTextNode(breed.breed);
         breedType.appendChild(breedName);
         breedChoice.appendChild(breedType);
      }
   })



