
let products=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")) :[{
    title:"Oreo dark chocolate milkshake",
    catergory:" beverage",
    price:"49.99",
    img:"https://i.postimg.cc/pTVP76FH/spur.jpg",
    
},
{
    title:"Freak Rambling Litchi shake",
    catergory:" beverage",
    price:"105.85",
    img:"https://i.postimg.cc/4xnL8bdS/roco.jpg",
    
},
{
    title: "strawberry milkshake",
    catergory:" beverage",
    price:"69.70",
    img:"https://i.postimg.cc/nVP0X9TK/primi.jpg",
    
},
{
    title:"Roman creams&caramel milkshake",
    catergory:" beverage",
    price:"65.51",
    img:" https://i.postimg.cc/T1dMpYZS/steers.jpg",
} 
];
let cart =JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];




function displayProduct(products){
    document.getElementById("milk").innerHTML = "";

    products.forEach((products, position) => {

        document.getElementById("milk").innerHTML += `











        <div class="col-6 col-sm-4" >
        <div class="card" >
            <img src="${products.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${products.title}</h5>
              <p class="card-text">${products.price}</p>
              <div class="d-flex mb-3">
              <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
              <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})">add</button>
              </div>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal-${position}" >Update</button>
              <button onclick="deleteProduct(${position})"  class="btn btn-danger">Delete</button>
              
            </div>
          </div>

          <div class="modal fade" id="update-modal-${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">update milkshake</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <select name="type" id="update-cartegory-${position}" placeholder="cartegory">
              <option value="Vanilla special.">Vanilla special.</option>
                    <option value="Strawberry marshallow."> Strawberry marshallow.</option>
                    <option value="Cool mint."> Cool mint.</option>
                    <option value="Blueberry cheesecake.">Blueberry cheesecake.</option>
                    <option value="Raspberry and white chocolate.">  Raspberry and white chocolate.</option>
                    <option value="Triple nut caramel.">Triple nut caramel.</option>
                    <option value="Pina colada.">strawberry milkshake</option>
                    <option value="Pina colada.">Freak Rambling Litchi shake</option>
                    <option value="Pina colada.">Oreo dark chocolate milkshake</option>
                    <option value="Pina colada.">Roman creams&caramel milkshake</option>
              </select>
              <input type="text" id="update-price-${position}"placeholder="price"/>
              <input type="text" id="update-title-${position}"placeholder="title"/>
              <input type="text" id="update-img-${position}"placeholder="image"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" data-bs-toggle="modal" data-bs-target="#update-modal-${position}" onclick="updateProduct(${position})">Save changes</button>
            </div>
          </div>
        </div>
      </div>  
      
      

      
        `;
    });
}
displayProduct(products);
// showCartBadge();       

function createProduct(){
  // let myProduct = document.getElementById("milk").value;
  let catergory = document.getElementById("addCatergory").value;
  let price=document.getElementById("price").value;
  let img=document.getElementById("resturant").value;
  let title=document.getElementById("title").value;

  
  try {
      // if(!myProduct)throw new Error("")
      products.push({
        catergory,
        price,
        img,
        title,
        });
      displayProduct(products);
  } catch (error) {
      
      alert(error)
  }
}

function deleteProduct(position){
  products.splice(position, 1);
  displayProduct(products);
}


function updateProduct(position){
  // let product = document.querySelector(`#update-input-${position}`).value;
  let price= document.querySelector(`#update-price-${position}`).value;
  let cartegory=document.querySelector(`#update-cartegory-${position}`).value;
  let img=document.querySelector(`#update-img-${position}`).value;
  let title=document.querySelector(`#update-title-${position}`).value;


  products[position] = {
    cartegory,
    price,
    img,
    title,

  }
      displayProduct(products);
  
}
 function addToCart(position){
   let qty = document.querySelector(`#addToCart${position}`).value;
   let added= false;
   cart.forEach((product)=>{
     if(product.title==products[position].title) {
       alert(
         `You have successfully added ${qty} ${products[position].title} to the cart`
       );
       product.qty= parseInt(product.qty) + parseInt(qty);
       added=true;
     }
   });
   if(!added){
     cart.push({ ...products[position],qty});
     alert(`You have successfully added${qty} ${products[position].title}to the cart`);
   }

  //  showCartBadge();
   localStorage.setItem("cart",JSON.stringify(cart));
  
 }

//  function showCartBadge() {
//    document.querySelector("").innerHTML=cart?cart.length:"";
   
//  }

