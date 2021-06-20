let currentHour = new Date().getHours();
var resolvedOptions = Intl.DateTimeFormat().resolvedOptions();
const currentPricePCB = document.querySelector(".js-currentPricePCB");
const currentPriceCYM = document.querySelector(".js-currentPriceCYM");

const getCurrentPrice = (hourlyPrices) => {
  let presentPrice = null;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].hour === currentHour) {
      presentPrice = hourlyPrices[i];
    }
  }
  return presentPrice.price;
};

const htmlCurrentPrice = (price) => {
  let htmlCode = "";
  htmlCode += `<div class="currentPrice__price">`;
  htmlCode += `<p class="currentPrice__text">Precio actual</p>`;
  htmlCode += `<p class="currentPrice__hour">(${fulltime}):</p>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="currentPrice__price">`;
  htmlCode += `<p class="currentPrice__price">${price} €/kWh</p>`;
  htmlCode += `</div>`;
  return htmlCode;
};

const printCurrentPrice = (hourlyPrices) => {
  currentPCB = getCurrentPrice(hourlyPrices.pcb);
  currentCYM = getCurrentPrice(hourlyPrices.cym);

  currentPricePCB.innerHTML = htmlCurrentPrice(currentPCB);
  currentPriceCYM.innerHTML = htmlCurrentPrice(currentCYM);
};
