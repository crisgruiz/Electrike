const currentPricePCB = document.querySelector(".js-currentPricePCB");
const currentPriceCYM = document.querySelector(".js-currentPriceCYM");
let currentHour = new Date().getHours() + ":00";

const printCurrentPricePCB = (hourlyPrices) => {
  let htmlCode = "";
  let presentPrice = "";
  htmlCode += `<div class="currentPrice__price">`;
  htmlCode += `<p class="currentPrice__text">Precio actual</p>`;
  htmlCode += `<p class="currentPrice__hour">(${currentHour}):</p>`;
  htmlCode += `</div>`;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].hour === currentHour) {
      presentPrice = hourlyPrices[i];
    }
  }
  htmlCode += `<div class="currentPrice__price">`;
  htmlCode += `<p class="currentPrice__price">${presentPrice.PCB} €/kWh</p>`;
  htmlCode += `</div>`;
  currentPricePCB.innerHTML = htmlCode;
};

const printCurrentPriceCYM = (hourlyPrices) => {
  let htmlCode = "";
  let presentPrice = "";
  htmlCode += `<div class="currentPrice__price">`;
  htmlCode += `<p class="currentPrice__text">Precio actual</p>`;
  htmlCode += `<p class="currentPrice__hour">(${currentHour}):</p>`;
  htmlCode += `</div>`;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].hour === currentHour) {
      presentPrice = hourlyPrices[i];
    }
  }
  htmlCode += `<div class="currentPrice__price">`;
  htmlCode += `<p class="currentPrice__price">${presentPrice.CYM} €/kWh</p>`;
  htmlCode += `</div>`;
  currentPriceCYM.innerHTML = htmlCode;
};
