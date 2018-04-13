var cart = [];

function getCart() {
 return cart;
}
function setCart(c) {
  cart = c;
  return cart;
}




function addToCart(item) {
  items = {};
  items.itemName = item;
  items.itemPrice = Math.floor((Math.random() * 100) +1);
  cart.push(items)
  return `${items.itemName} has been added to your cart.`;
}

function viewCart() {
  let temp = [];
  let sentence = `in your cart, you have `;
  for(var i = 0; i < cart.length; i++ ){
    if(cart.length === 0){
      return `Your shopping cart is empty.`;
    }
    else{
      
    }temp.push(`${cart[i].itemName} at ${cart[i].itemPrice}`);
  }
  if(cart.length)
  
  return sentence;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
