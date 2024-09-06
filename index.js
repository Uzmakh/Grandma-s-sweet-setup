// displaying cart in mobile-view
document.querySelector(".navbar-toggler").addEventListener("click", function () {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart)
})
// displaying cart in desktop-view
document.getElementById("cart-info").addEventListener("click", function () {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart)
})