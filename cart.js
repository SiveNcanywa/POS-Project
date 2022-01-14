const cart = JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];


console.log(cart);
function readCart(cart){
    document.querySelector("#cart").innerHTML="";

    console.log(cart);

    let total = cart
    .reduce((total,product)=>{
        return total+product.price*product.qty;
    },0)
    .toFixed(2);

cart.forEach((product,position) => {
    document.querySelector("#cart").innerHTML+=`
    <div class="card mb-3" position-relative">
    <button type="button" class="position-absolute top-0 start-100 translate-middle badge btn btn-danger" onclick="removeFromCart(${position})">X</button>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${product.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <div class="d-flex mb-3 justify-content-between">
        <p class="card-text">Individual price:</p>
        <span>${product.price}</span>
        </div>
        <div class="d-flex mb-3 justify-content-between">
        <label class="form-label">Quantity:</label>
        <input type="number" min=1 id="removes${position}"value=${
            product.qty
        } onchange="updateCart(${position})"/>
        </div>
        
    </div>
  </div>
</div>
<div class="cart-footer bg-white d-flex justify-content-between p-0 pt-3">
<p>Total cost:</p>
<span>R${(parseFloat(product.price)*parseInt(product.qty)).toFixed(2)}</span>
</div>
    `;
    
});
// showCartBadge();
document.querySelector("#cart-footer").innerHTML=`
<h3>Total cost:R${total}</h3>
<button class="btn btn-primary btn-lg" onclick="checkout()">Checkout</button>
`;
}

function showCartBadge(){
    document.querySelector("#badge").innerHTML=cart?cart.length:"";
}

readCart(cart);


function updateCart(position){
    let qty =document.querySelector(`#removes${position}`).value;
    cart[position]={ ...cart[position],qty};
    localStorage.setItem("cart",JSON.stringify(cart));
    readCart(cart);

}
function removeFromCart(position){
    let confirmaion=confirm(
        "Are you sure you want to remove this product from the cart?"
    );
    if (confirmaion){
        cart.splice(position,1);
        localStorage.setItem("cart",JSON.stringify(cart));
        readCart(cart);
    }
}
function checkout(){
    let total=cart
    .reduce((total,product)=>{
        return total+product.price*product.qty;
    },0)
    .toFixed(2);
    try{
        if(parseInt(total)==0) throw new Error("Nothing in cart");
        let confirmaion=confirm(`Total payment needed:R${total}`);
        if (confirmaion){
            cart.length=0;
            localStorage.removeItem(cart);
            readCart(cart)
        }
    }catch(err){
        alert(err);
    }
}
