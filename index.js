 var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem.itemName = item
  newItem.itemPrice = Math.floor(Math.random() * 100 + 1)
  cart.push(newItem)
  return(`${item}` + " has been added to your cart.")
}

function viewCart() {
var whatsInTheCart = []
for (let i = 0; i <= cart.length; i++) {
  if (cart.length === 0) {
    whatsInTheCart.push("Your shopping cart is empty.")
  }
  if (cart.length === 1) {
    whatsInTheCart.push("In your cart, you have " + `${cart.item[i]}` + " at " + `${cart.itemPrice[i]}` + ".")
  }
  return(whatsInTheCart)
  }
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
