
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
function displayCart(){
    const cartItems = document.getElementById("cartItems");
    const totalDisplay = document.getElementById("total");
    const cartCount = document.getElementById("cartCount");
    let total = 0;
    let count = 0;
    if(cartItems && totalDisplay){
        cartItems.innerHTML = "";
    
        for(let i = 0; i < cart.length; i++){
            let item = cart[i];
            let li = document.createElement("li");
        
            li.innerHTML = item.name + " - " + item.price + " x " + item.quantity + 
            '<button onclick= "removeFromCart(' + i + ')">Remove</button>';
            cartItems.appendChild(li);
            total = total + (item.price * item.quantity);
            count = count + item.quantity;
        } 
            totalDisplay.textContent = total.toFixed(2);
        }else{
            for(let i = 0; i < cart.length; i++){
                count = count + cart[i].quantity;
            }
        }
    if(cartCount){
        cartCount.textContent = count;
    }
}
function addToCart(name, price){
    const item = cart.find(i => i.name === name);
    if(item){
        item.quantity++;
    }else{
        cart.push({name, price, quantity:1});
    }
    saveCart();
    displayCart();
}
function removeFromCart(idx){
    if(cart[idx].quantity > 1){
        cart[idx].quantity--;
    }else{
        cart.splice(idx,1);
    }
    saveCart();
    displayCart();
}
function clearCart(){
    cart = [];
    saveCart();
    displayCart();
}
displayCart();