document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const symbol = this.querySelector("span");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                symbol.textContent = "+";
            } else {
                answer.style.display = "block";
                symbol.textContent = "−";
            }
        });
    });
});

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;

    let itemsHTML = "";
    cart.forEach(item => {
        itemsHTML += `<p>${item}</p>`;
    });

    document.getElementById("cart-items").innerHTML = itemsHTML;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
}

function openCart() {
    document.getElementById("cart-panel").classList.toggle("active");
}

function clearCart() {
    cart = [];
    updateCartUI();
}

updateCartUI();
function orderViaWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    let message = "Assalamualaikum, I want to order:%0A%0A";

    cart.forEach((item, index) => {
        message += (index + 1) + ". " + item + "%0A";
    });

    message += "%0ADelivery Address:%0A";
    message += "%0AName:%0APhone:%0A";

    let phoneNumber = "92314569626";

    let url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(url, "_blank");
}
