
// Tasks:
// 1. Read through code. Read documentation about all new methods, to better understand how to use them. Search for documentation here https://developer.mozilla.org/ru/
// 2. Add missing name for Jacket (3d element)
// 3. Add 3 more grid elements 
// 4. Add and display price of product

// We create array with 3 products (objects)
const products = [
   {
      imageSrc: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODIwNTI&ixlib=rb-1.2.1&q=80',
      name: 'T-Shirt',
      price: 30,
      currency: '€'
   },
   {
      imageSrc: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODI1Njk&ixlib=rb-1.2.1&q=80',
      name: 'Jeans',
      price: 30,
      currency: '€'
   },
   {
      imageSrc: 'https://images.unsplash.com/photo-1593032580308-d4bafafc4f28?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODI4OTE&ixlib=rb-1.2.1&q=80',
      name: 'Jacket',
      price: 30,
      currency: '€'
   },
   {
      imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Jeans',
      price: 30,
      currency: '€'
   },
   {
      imageSrc: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Shoes',
      price: 30,
      currency: '€'
   },
   {
      imageSrc: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80',
      name: 'Dress',
      price: 30,
      currency: '€'
   }
];
// Getting <div> element from HTML to which we will attach grid elements later
const grid = document.getElementById('ecom-products');

// Declaring function which takes in image src and outputs <img> html elememt
function createImage(src) {
   if (!src) throw new Error('Please, provide image src');
   // Creating image element
   const image = document.createElement('img');
   // Adding source to it
   image.setAttribute('src', src);
   // Returning ready image element
   return image;
}

// Declaring function which takes product object and outputs <div> with <img> and text HTML elements
function createGridItem(product) {
   if (!product) throw new Error('Please, provide product');
   // Creating <div> which will contain image and name
   const gridItem = document.createElement('div');

   // Creating image element
   const image = createImage(product.imageSrc);
   // Creating text node. We do not make check if name exists here. 
   // Instead we make this (product.name || ''). Means if product.name exists use it. Otherwise,     // if product.name is undefined (not provided) use empty string.
   const textNode = document.createTextNode(product.name || '');
   //   display price
   var price, currency;
   product.price ? price = product.price : price = '';
   product.currency ? currency = product.currency : currency = '';

   const textNode2 = document.createTextNode(`Price: ${price}${currency}`);



   gridItem.appendChild(textNode);
   // Put image inside of gridItem
   gridItem.appendChild(image);
   // Put text inside of gridItem, will attach after last child, so after image
   gridItem.appendChild(textNode2);
   // Return grid item
   return gridItem;
}

// Iterate through array of products
for (let i = 0; i < products.length; i++) {
   // Body of the loop.
   // On each iteration create an HTML element (grid item) with product
   const product = createGridItem(products[i]);
   // Attach HTML element to the grid
   grid.appendChild(product);
}


