// fetch('https://api.thecatapi.com/v1/images/search')
//    .then(response => {
//       return response.json();
//    })
//    .then(data => console.log(data))
// async function getCatImg() {
//    let response = await fetch('https://catfact.ninja/facts')
//    let facts = await response.json()
//    data = facts.splice(0, 7)

// }

async function getCatImg() {
   try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      console.log(data);
   } catch (error) {
      console.log(error);
   }
}
getCatImg();

fetch("https://catfact.ninja/facts", {
   method: "GET",
   headers: {
      Accept: "application/json",
      "Content-Type": "text/plain;charset=UTF-8"
   }
})
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      console.log(data);

      function getCatFacts(data) {
         if (data.data) {
            for (let i = 0; i < 7; i++) {
               createListItem(data.data[i].fact);
            }
         }
      }
      function createListItem(text) {
         const list = document.getElementById("cat_facts_list");
         const listItem = document.createElement("li");
         const textNode = document.createTextNode(text);
         listItem.appendChild(textNode);
         list.appendChild(listItem);

      }
      getCatFacts(data);
   });
