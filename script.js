let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "custard milkshake",
        catergory: "milkshake",
        price: "49.99",
        img: "https://i.postimg.cc/qR3ttfzJ/custard.jpg",
      },
      {
        title: "vannila milkshake",
        catergory: "milkshake",
        price: "105.85",
        img: "https://i.postimg.cc/RFyc8QnF/Vanilla-Milkshake-4-of-7.jpg",
      },
      {
        title: "strawberry milkshake",
        catergory: "milkshake",
        price: "69.70",
        img: "https://i.postimg.cc/6QDJpgkf/Strawberry-Milkshake4.jpg",
      },
      {
        title: "chocolate milkshake",
        catergory: "milkshake",
        price: "65.51",
        img: " https://i.postimg.cc/MKc7yLNQ/Choc-Milk-Shake-June-2012-36b.jpg",
      },
      {
        title: "cheese burger",
        catergory: "burger",
        price: "95.20",
        img: "https://i.postimg.cc/Px4v1gm1/cheese.jpg",
      },
      {
        title: "chicken burger",
        catergory: "burger",
        price: "125.56",
        img: "https://i.postimg.cc/76WwvX4p/chicken.jpg",
      },
      {
        title: "beef burger",
        catergory: "burger",
        price: "155.56",
        img: "https://i.postimg.cc/JzMn56zq/beef.jpg",
      },
      {
        title: "Beer",
        catergory: "liquor",
        price: "50.00",
        img: "https://i.postimg.cc/SxF8FfN2/beer.jpg",
      },
      {
        title: "Whisky",
        catergory: "liquor",
        price: "140.00",
        img: "https://i.postimg.cc/3JPjrH9w/whisky.jpg",
      },
      {
        title: "Cider",
        catergory: "liquor",
        price: "70.42",
        img: "https://i.postimg.cc/Px2zdpFG/cider.jpg",
      },
      {
        title: "steak",
        catergory: "food",
        price: "230.12",
        img: "https://i.postimg.cc/hvRzWSKF/steak.jpg",
      },
      {
        title: "chicken",
        catergory: "food",
        price: "190.12",
        img: "https://i.postimg.cc/6pfDCz8C/grilled.jpg",
      },
      {
        title: "soda drinks",
        catergory: "drinks",
        price: "25.00",
        img: "https://i.postimg.cc/kgYyrtZk/drinks.jpg",
      },
    ];
let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function displayProduct(products) {
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
              <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})">Add</button>
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
              <
                    option value="Milkshake">Milkshake</>
                    <option value="liquor"> Liquor</option>
                    <option value="Burger"> Burger</option>
                    <option value="Steak">Steak</option>
                    <option value="Chicken">  Chicken</option>
                    <option value="Drinks">Drinks</option>
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

function createProduct() {
  // let myProduct = document.getElementById("milk").value;
  let catergory = document.getElementById("addCatergory").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("resturant").value;
  let title = document.getElementById("title").value;

  try {
    // if(!myProduct)throw new Error("")
    products.push({
      catergory,
      price,
      img,
      title,
    });
    localStorage.setItem("products", JSON.stringify(products));
    displayProduct(products);
  } catch (error) {
    alert(error);
  }
}

function deleteProduct(position) {
  products.splice(position, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProduct(products);
}

function updateProduct(position) {
  // let product = document.querySelector(`#update-input-${position}`).value;
  let price = document.querySelector(`#update-price-${position}`).value;
  let cartegory = document.querySelector(`#update-cartegory-${position}`).value;
  let img = document.querySelector(`#update-img-${position}`).value;
  let title = document.querySelector(`#update-title-${position}`).value;
  try {
    if (!img.startsWith("https")) throw "invalid image link";
    products[position] = {
      cartegory,
      price,
      img,
      title,
    };
    localStorage.setItem("products", JSON.stringify(products));

    displayProduct(products);
  } catch (error) {
    alert(error);
  }
}
function addToCart(position) {
  let qty = document.querySelector(`#addToCart${position}`).value;
  let added = false;
  cart.forEach((product) => {
    if (product.title == products[position].title) {
      alert(
        `You have successfully added ${qty} ${products[position].title} to the cart`
      );
      product.qty = parseInt(product.qty) + parseInt(qty);
      added = true;
    }
  });
  if (!added) {
    cart.push({ ...products[position], qty });
    alert(
      `You have successfully added${qty} ${products[position].title}to the cart`
    );
  }

  //  showCartBadge();
  localStorage.setItem("cart", JSON.stringify(cart));
}

//  function showCartBadge() {
//    document.querySelector("").innerHTML=cart?cart.length:"";

//

function sortCatergory() {
  let catergory = document.querySelector("#sortCatergory").value;

  if (catergory == "All") {
    return displayProduct(products);
  }
  let foundProducts = products.filter((product) => {
    return product.catergory == catergory;
  });
  displayProduct(foundProducts);
  console.log(foundProducts);
}
function sortName() {
  let direction = document.querySelector("#sortName").value;
  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);

  displayProduct(products);
}
function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;
  let sortedProducts = products.sort((a, b) => a.price - b.price);
  console.log(sortedProducts);
  if (direction == "descending") sortedProducts.reverse();
  displayProduct(sortedProducts);
}
