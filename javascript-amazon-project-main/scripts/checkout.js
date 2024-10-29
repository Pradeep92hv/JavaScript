import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formateCurrency } from "./utils/money.js";
import { removeFromCart ,updateDeliveryOption} from "../data/cart.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'   // named export
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'  // default export
import { deliveryOptions } from "../data/deliveryOptions.js";


hello();
const today= dayjs();
const deliveryDate= today.add(7,'days');  // give next 7 days date,  it add 7 days,  2 paramter -> 1st number , 2nd - 'days or months or years'

console.log(deliveryDate.format('dddd, MMMM D'))    // use dayjs doc or chatgpt



let cartSummaryHTML="";

cart.forEach((cartItem) =>{

    const productId=cartItem.productId;
    
    let matchingProduct;

    products.forEach((product) =>{
        if(product.id === productId){
            matchingProduct=product;
        }
    })
;

   const deliveryOptionId=cartItem.deliveryOptionId;

   let deliveryOption;

   deliveryOptions.forEach((option) =>{
    if(option.id === deliveryOptionId){
      deliveryOption=option;
    }
   });

      const today=dayjs();
      const deliveryDate =today.add(
        deliveryOption.deliveryDate,
      'days'
      );

      const dateString = deliveryDate.format('dddd, MMMM D');

    cartSummaryHTML+=` <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formateCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingProduct,cartItem)}
                </div>
              </div>
            </div>
          </div>`
})

function deliveryOptionsHTML(matchingProduct,cartItem)
{
  let html='';
  deliveryOptions.forEach((deliveryOption) =>{
const today=dayjs();
  const deliveryDate =today.add(
    deliveryOption.deliveryDate,
   'days'
  );
  const dateString = deliveryDate.format('dddd, MMMM D');
  const priceString =deliveryOption.priceCents === 0 ? 'FREE ' : `$${formateCurrency(deliveryOption.priceCents)} -`;

  const isChecked = deliveryOption.id=== cartItem.deliveryOptionId;

  html += `
  <div class="delivery-option js-delivery-option"
     data-product-id="${matchingProduct.id}"
     data-delivery-option-id="${deliveryOption.id}">
    <input type="radio"
       ${isChecked ? 'checked' : ''}
           class="delivery-option-input"
           name="delivery-option-${matchingProduct.id}"
           value="${priceString}">
    <div>
      <div class="delivery-option-date">
        ${dateString}
      </div>
      <div class="delivery-option-price">
        $${priceString} - Shipping
      </div>
    </div>
  </div>
`

  })
  return html
}

document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML

document.querySelectorAll('.js-delete-link')
.forEach((link) =>{
  link.addEventListener("click", () =>{
    //  console.log(link.dataset.productId)

    const productId = link.dataset.productId;
    removeFromCart(productId)

    console.log(cart)
    const container =document.querySelector(`.js-cart-item-container-${productId}`);

    console.log(productId)
    console.log(container)
    container.remove();

  })

})

document.querySelectorAll('.js-delivery-option')
.forEach((element) =>{
  element.addEventListener('click',() =>{
      const {productId,deliveryOptionId}=element.dataset;
  
  updateDeliveryOption(productId,deliveryOptionId)
  });
  
   
});
//