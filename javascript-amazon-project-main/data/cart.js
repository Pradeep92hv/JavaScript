export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
  cart=
  [
    {
      productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: "aad29d11-ea98-41ee-9285-b916638cac4a",
      quantity:1,
      deliveryOptionId: '3'
    }
  
  ];
}



function saveToLOcalStorage()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem='';
    
      cart.forEach((cartItem)=> {
        if(productId === cartItem.productId){
          matchingItem=cartItem;
        }
      });
      
      if(matchingItem){
        matchingItem.quantity+=1;
      }
      else
      {
        cart.push({
        productId:productId,
        quantity : 1,
        deliveryOptionId: '1'
      })
      }

      saveToLOcalStorage();
  
  }

export  function removeFromCart(id){
    const newCart=[];

    cart.forEach((cartItem) =>{
      if(id !== cartItem.productId)
      {
       
        newCart.push(cartItem)
      }
    })

    cart=newCart

    saveToLOcalStorage();
  }


  export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem = null; // Use null to represent no match found
    
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem; // If found, assign the cartItem object
        }
    });
    
    if (matchingItem) { // Only proceed if a matching item was found
        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToLocalStorage(); // Ensure function name has correct capitalization
    } 
}
