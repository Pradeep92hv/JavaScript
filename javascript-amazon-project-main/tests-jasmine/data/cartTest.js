import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite : AddToCart ', () =>{
   it('adds an existing product to the cart',() =>{
    spyOn(localStorage, "setItem"); 
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity :1,
          deliveryOption :'1'
        }
      ]);
    });
    console.log(localStorage.getItem("cart"));
    loadFromStorage();

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2)  // quantity increased

   });

    it("adds a new product to the cart", () => {
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(() =>{
                return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'))
        loadFromStorage();
        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(cart[0].productId).toEqual(
          "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
        );
        expect(cart[0].quantity).toEqual(2);
    });

});