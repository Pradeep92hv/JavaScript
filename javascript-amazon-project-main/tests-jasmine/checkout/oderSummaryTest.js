import { renderOderSummary } from "../../scripts/checkout/oderSummary.js";

import { loadFromStorage } from "../../data/cart.js";
describe("test suite: renderOrderSummary ", () => {
  it("displays the cart", () => {
    document.querySelector(".js-test-container").innerHTML = `
         <div class="js-order-summary"></div>
        `;

    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "aad29d11-ea98-41ee-9285-b916638cac4a";
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: "3",
        },
      ]);
    });
    console.log(localStorage.getItem("cart"));
    loadFromStorage();

    renderOderSummary();
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      2
    );
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2"); // it just check wheather match is there ot not

    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 1"); // it just check wheather match is there ot not
  });

  
});

//17:02
