import { cart } from "./cartItems.js";
import { checkout, addToCheckout } from "./cart.js";


    function addto(ratingCount){
      let cq=Number(document.querySelector(".cart-quantity").innerHTML);
      cq++;
      document.querySelector(".cart-quantity").innerHTML=cq;
      let item=cart.find((item)=>item.ratingCount===ratingCount);
      console.log(item.name);
      checkout=[{
        image:"images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        price: 1090,
        quantity: 1,
      }];
    };