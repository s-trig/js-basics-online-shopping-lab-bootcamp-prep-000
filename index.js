var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length

  if (l === 0){
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for(var i = 0; i < l; i++) {
    let itemsAndPrice = cart[i]
    let item = Object.keys(itemsAndPrice)
    let price = itemsAndPrice[item]

    itemsAndPrices.push(`${item} at $${price}`)
  }

  var comma = itemsAndPrices.join(', ')
  var and = itemsAndPrices.join(' and ')

  if (itemsAndPrices.length > 2) {
    console.log(`In your cart, you have ${comma}`)
  }
  else
   console.log(`In your cart, you have ${and}.`)
}

function total() {
  var total = 0
  var array = []

  for(var i = 0; i < cart.length; i++) {
    let itemsAndPrice = cart[i]
    let item = Object.keys(itemsAndPrice)
    let price = itemsAndPrice[item]

    array.push(price)
    total += array[i]
  }
  return total
}

function removeFromCart(item) {
  var itemInCart = false
    for(var i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty(item)) {
        itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i+1))
    }
  }
    if(!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }

}
