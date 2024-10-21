export let cart=[
  {
    productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },
  {
    productId: "aad29d11-ea98-41ee-9285-b916638cac4a",
    quantity:1
  }

];

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
        quantity : 1
      })
      }
  
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
  }