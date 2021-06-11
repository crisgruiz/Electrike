const currentPricePCB = document.querySelector(".js-currentPricePCB");
const currentPriceCYM = document.querySelector(".js-currentPriceCYM");
let currentHour = new Date().getHours() + ":00";
console.log(typeof currentHour);

const printCurrentPricePCB = (hourlyPrices) => {
  let htmlCode = "";
  let presentPrice = "";
  htmlCode += `<p class="currentPrice__text">Precio actual</p>`;
  htmlCode += `<p class="currentPrice__hour">(${currentHour}):</p>`;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].hour === currentHour) {
      presentPrice = hourlyPrices[i];
    }
  }
  htmlCode += `<p class="currentPrice__price">${presentPrice.PCB} €/kWh</p>`;
  currentPricePCB.innerHTML = htmlCode;
};

const printCurrentPriceCYM = (hourlyPrices) => {
  let htmlCode = "";
  let presentPrice = "";
  htmlCode += `<p class="currentPrice__text">Precio actual</p>`;
  htmlCode += `<p class="currentPrice__hour">(${currentHour}):</p>`;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].hour === currentHour) {
      presentPrice = hourlyPrices[i];
    }
  }
  htmlCode += `<p class="currentPrice__price">${presentPrice.CYM} €/kWh</p>`;
  currentPriceCYM.innerHTML = htmlCode;
};
