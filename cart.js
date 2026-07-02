import { cart } from "./cartItems.js";

let checkout=[cart[0]];
export function addToCheckout(product) {
    checkout.push(product);
}
export {checkout};