const container = document.querySelector('#lists');


let shopitems = [
    {
     id:0,
     img:"images/mi12.webp",
     title:"REDMI 12",
     price:"Rs 10,499",
     desc:"6 GB RAM | 128 GB ROM | Expandable Upto 1 TB"
    },
    {
     id:1,
     img:"images/iphone13.webp",
     title:"Iphone 13",
     price:"Rs 52,290",
     desc:"128 GB ROM A15 Bionic Chip Processor"
     
      
    },
    {
     id:2,
     img:"images/realme11pro.webp",
     title:"Realme 11 Pro+5G",
     price:"Rs 25,999",
     desc:"6 GB RAM | 128 GB ROM | Expandable Upto 1 TB"

    },
    {
     id:3,
     img:"images/s22.webp",
     title:"Samsung S22 5G",
     desc:"6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
     price:"Rs 27,999",
    },
]
 
str = "";

for(val of shopitems){
    str += `<div class="card mx-3 px-2 py-2" style="width: 18rem;">
    <img src=${val.img} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${val.title}</h5>
    <p class="card-text">${val.desc}</p>
    <h4 class="card-text">${val.price}</h4>
    <button onclick="onAddCart(${val.id})" class="btn btn-primary">AddToCart</button>
    </div>
</div>`
container.innerHTML = str;
    
}

const cartbtn = document.getElementById('cart-btn');
let index = 0;




let shopCart = []
function onAddCart(i){
  index++;
  shopCart.push(shopitems[i]);
  cartbtn.classList.add('active');
  cartbtn.textContent = index;
}

const cartDetails =document.getElementById('cartDetails');
// console.log(cartDetails);

cartDetails.addEventListener('click',(e)=>{
    if(e.target.id === "cartDetails"){
      
      str = ""
      for(cart of shopCart){
        str += `<div class="card mx-3 px-2 py-2" style="width: 18rem;">
        <img src=${cart.img} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cart.title}</h5>
        <p class="card-text">${cart.desc}</p>
        <h4 class="price" class="card-text">${cart.price}</h4>
        </div>
        </div>
        `;
        container.innerHTML = str;
      }
      let heading = document.createElement('h1');
      heading.id = "heading";
      
      const prices = document.querySelectorAll('.price');
      let priceheading = "";
      prices.forEach(price=>{
      let replacecomma =  price.textContent.replace(",","")
        priceheading = parseInt(priceheading + parseInt(replacecomma.slice(2)));
      })
      heading.innerText = `Total Price is Rs ${priceheading}`
      container.after(heading);
    }
    
})




