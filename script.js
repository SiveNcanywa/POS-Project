let products=[{
    title:"Oreo dark chocolate milkshake",
    catergory:" beverage",
    price:"R49.99",
    img:"https://i.postimg.cc/pTVP76FH/spur.jpg",
    
},
{
    title:"Freak Rambling Litchi shake",
    catergory:" beverage",
    price:"R105.85",
    img:"https://i.postimg.cc/4xnL8bdS/roco.jpg",
    
},
{
    title: "strawberry milkshake",
    catergory:" beverage",
    price:"R69.70",
    img:"https://i.postimg.cc/nVP0X9TK/primi.jpg",
    
},
{
    title:"Roman creams&caramel milkshake",
    catergory:" beverage",
    price:"R65.51",
    img:" https://i.postimg.cc/T1dMpYZS/steers.jpg",
} 
];
function displayProduct(products){
    document.getElementById("milk").innerHTML = "";

    products.forEach((products, position) => {
        document.getElementById("milk").innerHTML += `
        <div class="modal fade" id="exampleModal${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Milkshakes<input type="text" id="update-input-${position}" value="${products.catergory}"/>
              Catergory<input type="text" id="update-type-${position}" value="${products.price}"/>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" data-bs-dismiss="modal" onclick="updateResturant(${position})"${products.catergory} >Save changes</button>
            </div>
          </div>
        </div>
      </div>







          <div class="col-6 col-sm-4"><div class="card" style="width: 18rem;">
            <img src="${products.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" >${products.title}</h5>
              <p class="card-text">${products.price}</p>
              <button   onclick="updateProduct()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${position}" >Update</button>
              <button onclick="deleteProduct()"  class="btn btn-primary">Delete</button>
            </div>
          </div>
        `;
    });
}
displayProduct(products);

function createProduct(){
  let myProduct = document.getElementById("milk").value;
  let catergory = document.getElementById("addCatergory").value;

  
  try {
      if(!myProduct)throw new Error("No milkshake input")
      resturants.push({
          name:myProduct,
          type,});
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
  let product = document.querySelector(`#update-input-${position}`).value;
  let type= document.querySelector(`#update-type-${position}`).value;
      console.log(product, type)
  try {
      if(!product)throw new Error(`Please type in a milkshake at ${position} before updating`);
      products[position] = {
          name:product,
          type,
      };
      displayProduct(products);
  
  
  } catch (error) {
      
      alert(error)
  }
  
}


