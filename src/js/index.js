"use strict";

//Current date
let date = new Date();
let currentDay = date.getDay();
options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "2-digit",
  year: "numeric",
};
let IntlDate = new Intl.DateTimeFormat(
  resolvedOptions.locale,
  options
).format();

let formatDate = IntlDate.slice(0, 10).split("/").reverse().join("-");

const infoDetailPCB = document.querySelector(".js-table");
const hoursPCB = document.querySelector(".js-hourPCB");
const pricesPCB = document.querySelector(".js-pricePCB");
const variationPCB = document.querySelector(".js-varPCB");
const hoursCYM = document.querySelector(".js-hourCYM");
const pricesCYM = document.querySelector(".js-priceCYM");
const variationCYM = document.querySelector(".js-varCYM");
const lowPricePCB = document.querySelector(".js-lowPCB");
const highPricePCB = document.querySelector(".js-highPCB");
const lowPriceCYM = document.querySelector(".js-lowCYM");
const highPriceCYM = document.querySelector(".js-highCYM");

//Llamada al API
const getElectricityPrice = () => {
  return fetch(
    `https://electrike-otkzylkdbx.s3-eu-west-1.amazonaws.com/v2/${formatDate}.json`
  )
    .then((response) => response.json())
    .then((hourlyPrices) => {
      paintHours(hourlyPrices.pcb);
      paintPrices(hourlyPrices.pcb, pricesPCB);
      paintPrices(hourlyPrices.cym, pricesCYM);
      paintVariation(hourlyPrices.pcb, variationPCB);
      paintVariation(hourlyPrices.cym, variationCYM);
      paintMinPrice(hourlyPrices.pcb, lowPricePCB);
      paintMinPrice(hourlyPrices.cym, lowPriceCYM);
      paintMaxPrice(hourlyPrices.pcb, highPricePCB);
      paintMaxPrice(hourlyPrices.cym, highPriceCYM);
      printCurrentPrice(hourlyPrices);
    })
    .catch(() => {
      return {
        error: "fetch error",
      };
    });
};
getElectricityPrice();

//table with data

const paintHours = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p class="table__hour--item"> ${hourlyPrices[i].hour}:00</p>`;
  }
  hoursPCB.innerHTML = htmlCode;
  hoursCYM.innerHTML = htmlCode;
};

const paintPrices = (hourlyPrices, prices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p class="table__price--item"> ${hourlyPrices[i].price} <span class="units">€/kWh</span></p>`;
  }
  prices.innerHTML = htmlCode;
};

const paintVariation = (hourlyPrices, variation) => {
  let htmlCode = `<p class="table__var--icon equal"><i class="fas fa-equals"></i></p>`;
  for (let i = 1; i < hourlyPrices.length; i++) {
    let previousValue = hourlyPrices[i - 1].price;
    if (previousValue < hourlyPrices[i].price) {
      htmlCode += `<p class="table__var--icon up"><i class="fas fa-chevron-circle-up"></i></p>`;
    } else if (previousValue > hourlyPrices[i].price) {
      htmlCode += `<p class="table__var--icon down"><i class="fas fa-chevron-circle-down"></i></p>`;
    } else {
      htmlCode += `<p class="table__var--icon equal"><i class="fas fa-equals"></i></p>`;
    }
  }
  variation.innerHTML = htmlCode;
};
