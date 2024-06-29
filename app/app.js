const toggle = document.querySelector("#toggle");
const priceInfo = document.querySelectorAll(".price");
const pricesMonthly = [19.99, 24.99, 39.99];
const pricesAnually = [199.99, 249.99, 399.99];
let count = 0;

toggle.addEventListener("input", e => {
    if (e.target.checked === true) {
        count = 0;
        priceInfo.forEach((price, i) => {
            price.textContent = pricesMonthly[i];
        }) 
    } else {
        console.log("hola");
        while(count < pricesAnually.length) {
            priceInfo[count].textContent = pricesAnually[count];
            count++;
        }
    }
})