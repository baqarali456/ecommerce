const container = document.querySelector("#lists");

let shopitems = [
  {
    id: 0,
    img: "images/mi12.webp",
    title: "REDMI 12",
    price: "Rs 10,499",
    desc: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
  },
  {
    id: 1,
    img: "images/iphone13.webp",
    title: "Iphone 13",
    price: "Rs 52,290",
    desc: "128 GB ROM A15 Bionic Chip Processor",
  },
  {
    id: 2,
    img: "images/realme11pro.webp",
    title: "Realme 11 Pro+5G",
    price: "Rs 25,999",
    desc: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
  },
  {
    id: 3,
    img: "images/s22.webp",
    title: "Samsung S22 5G",
    desc: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
    price: "Rs 27,999",
  },
];

let str = "";

function showLists() {
  str = "";
  for (list of shopitems) {
    const { id, img, title, desc, price } = list;
    str += `
            <div class="card mx-2 px-2" style="width: 18rem;">
              <img src=${img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${desc}</p>
                  <p class="card-text">${price}</p>
                  <button  onclick="onAddCart(${id})" class="goToCart btn btn-primary">Add Cart</button>
                </div>
            </div>
          `;
  }
  container.innerHTML = str;
  const goToCart = document.querySelectorAll('.goToCart');
  goToCart.forEach(cart=>{
   console.log(cart.classList.contains('save-cart'));
   
  })
  const heading = document.getElementById('heading');
  if(heading){
    heading.remove();
  }
}

// rendering lists;
showLists();

// onclick on add cart

let index = 0;
let AddedCart = [];
function onAddCart(i){
  index++;
  const notification = document.querySelector('.notification');
  notification.innerText = index;
  notification.classList.add('active');
  const goToCart = document.querySelectorAll('.goToCart');
  goToCart[i].innerHTML = "Go To Cart";
  goToCart[i].classList.add('save-cart')
  goToCart[i].disabled = "true";
  AddedCart.push(shopitems[i]);
  
}

// show Cart Items;

const cartDetails = document.getElementById('cartDetails');

cartDetails.addEventListener('click',()=>{
  if(AddedCart.length === 0){
    let h2 = document.createElement('h2');
    h2.innerHTML = `No Items in Cart` ;
    container.innerHTML = "";
    container.appendChild(h2)
    cartDetails.disabled = true;
  }
  else{
    showCart(AddedCart);
    pricesCalculate();
    cartDetails.disabled = true;
  }
});

function showCart(carts){
  str = "";
  for (cart of carts) {
    const { id, img, title, desc, price } = cart;
    str += `
            <div class="card mx-2 px-2" style="width: 18rem;">
              <img src=${img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${desc}</p>
                  <p class="card-prices card-text">${price}</p>
                  <button onclick="onremoveCart(${id})" class="btn btn-primary">Remove Item</button>
                </div>
            </div>
          `;
  }
  container.innerHTML = str;
  
  
  
}

 // price calculate in Cart
function pricesCalculate(){
  const heading = document.createElement('h1');
  heading.id = "heading";
  const cardPrices = document.querySelectorAll('.card-prices');
  let priceheading = "";
  cardPrices.forEach(price=>{
    let costPrices = price.innerText.slice(2).replace(',',"")
    priceheading = parseInt(priceheading + parseInt(costPrices));
    
  })
  heading.innerText = `Your Total amount is ${priceheading}`;
  container.after(heading);
}

// addEventListener click on Home;

const Home = document.getElementById('Home');
Home.addEventListener('click',()=>{
  
  showLists();
  cartDetails.disabled = false;
})


// onclick on onremoveCart

function onremoveCart(id){
   index--;
   const notification = document.querySelector('.notification');
   if(index === 0){
     notification.classList.remove('active');
   }
   else{
    notification.innerText = index;
    notification.classList.add('active');
   }
   AddedCart = AddedCart.filter(item=>item.id !== id);
   if(AddedCart.length === 0){
    let h2 = document.createElement('h2');
    h2.innerHTML = `No Items in Cart` ;
    container.innerHTML = "";
    container.appendChild(h2)
    const heading = document.querySelectorAll('h1');
    heading.forEach((head)=>head.remove());
   }
   else{
     showCart(AddedCart);
     const heading = document.getElementById("heading");
     const cardPrices = document.querySelectorAll('.card-prices');
     let priceheading = "";
     cardPrices.forEach(price=>{
       let costPrices = price.innerText.slice(2).replace(',',"")
       priceheading = parseInt(priceheading + parseInt(costPrices));
       
     })
     heading.innerText = `Your Total amount is ${priceheading}`;
   }
  
}
