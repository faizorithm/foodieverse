let cart = [];
function displayCart(){
    const cartItems = document.getElementById("cartItems");
    const totalDisplay = document.getElementById("total");
    cartItems.innerHTML = "";
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        let item = cart[i];
        let li = document.createElement("li");
    
        li.innerHTML = item.name + " - $" + item.price + " x " + item.quantity + 
        '<button onclick= "removeFromCart(' + i + ')">Remove</button>';
        cartItems.appendChild(li);
        total = total + (item.price * item.quantity);
    } 
    totalDisplay.textContent = total.toFixed(2);
}
function addToCart(name, price){
    const item = cart.find(i => i.name === name);
    if(item){
        item.quantity++;
    }else{
        cart.push({name, price, quantity:1});
    }
    displayCart();
}
function removeFromCart(idx){
    if(cart[idx].quantity > 1){
        cart[idx].quantity--;
    }else{
        cart.splice(idx,1);
    }
    displayCart();
}
function clearCart(){
    cart = [];
    displayCart();
}
