let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "Naruto Uzumaki Hoodie",
        category: "Hoodie",
        price: 499.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x853/202111/bps/product/inc/hgystm1636879605363.jpg",
      },
      {
        title: "Naruto Uzumaki Sweats",
        category: "Pants",
        price: 349.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202201/bps/product/inc/hvbxpy1641365761840.jpg?fmt=webp&v=1",
      },
      {
        title: "Itachi Uchiha Hoodie",
        category: "Hoodie",
        price: 399.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202111/bps/product/inc/jrgnbe1637223954950.jpg?fmt=webp&v=1",
      },
      {
        title: "Itachi Uchiha Black Hoodie",
        category: "Hoodie",
        price: 399.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202109/bps/product/inc/jyhgbq1632378296164.jpg?fmt=webp&v=1",
      },
      {
        title: "Pink Anime F.R.I.E.N.D.S Hoodie",
        category: "Hoodie",
        price: 399.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202011/ezbtps1606109554258.jpg?fmt=webp&v=1",
      },
      {
        title: "Uzumaki Family Denim Jacket",
        category: "Hoodie",
        price: 899.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202109/bps/product/inc/jhdobw1631967123005.jpg?fmt=webp&v=1    ",
      },
      {
        title: "Sasuke and Itachi Top",
        category: "Top",
        price: 249.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202201/bps/product/inc/qqgfdp1641365755911.jpg?fmt=webp&v=1",
      },
      {
        title: "Akatsuki T-Shirt",
        category: "T-Shirt",
        price: 249.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202101/bps/product/inc/iuccxj1611891501668.jpg?fmt=webp&v=1",
      },
      {
        title: "Itachi Uchiha T-Shirt",
        category: "T-Shirt",
        price: 199.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x853/202105/bps/product/inc/ygypbi1622087557309.jpg?fmt=webp&v=1",
      },
      {
        title: "Naruto Uzumaki Hokage Cosplay",
        category: "Other",
        price: 549.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/201901/fpbjfq1547446559245.jpg?fmt=webp&v=1",
      },
      {
        title: "Akatsuki cloak Cosplay",
        category: "Other",
        price: 549.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202110/bps/product/inc/phqhbl1634810715431.jpg?fmt=webp&v=1",
      },
      {
        title: "Naruto Uzumaki Pants",
        category: "Pants",
        price: 249.99,
        img: "https://litb-cgis.rightinthebox.com/images/640x640/202201/bps/product/inc/wqrlsj1641365763121.jpg?fmt=webp&v=1",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ
function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
          </div>
          
          
          
          </div>
          <div class="d-flex justify-content-end card-footer">
            <button type="button" class="btn btn-muted w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
            <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="btn btn-muted w-50 ms-3" onclick="deleteProduct(${position})" >
            <i class="fas fa-trash-alt"></i>
            </button>
          </div>
      </div>

      <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                          <option value="Hoodie">Hoodie</option>
                          <option value="T-Shirt">T-Shirt</option>
                          <option value="Pants">Pants</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `;
  });
}

readProducts(products);
showCartBadge();

// CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}

// ADD TO CART
function addToCart(position) {
  let qty = document.querySelector(`#addToCart${position}`).value;
  let added = false;
  cart.forEach((product) => {
    if (product.title == products[position].title) {
      alert(
        `You have added ${qty} ${products[position].title} to the cart`
      );
      product.qty = parseInt(product.qty) + parseInt(qty);
      added = true;
    }
  });
  if (!added) {
    cart.push({ ...products[position], qty });
    alert(
      `You have added ${qty} ${products[position].title} to the cart`
    );
  }

  showCartBadge();

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart Badge
function showCartBadge() {
  document.querySelector("#badge").innerHTML = cart ? cart.length : "";
}

// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// SORT BY NAME

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
  readProducts(products);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}
