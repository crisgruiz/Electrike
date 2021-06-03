"use strict";

//Current date

// var dateFormat = require("dateformat");
// var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

//Llamada al API
const getElectricityPrice = () => {
  return fetch("prices.json")
    .then((response) => response.json())
    .then((data) => {
      return data.PVPC.map((x) => {
        return {
          hour: x.Hora,
          PCB: parseFloat(x.PCB.replace(",", ".")) / 1000,
          CYM: parseFloat(x.CYM.replace(",", ".")) / 1000,
        };
      });
    })
    .then((hourlyPrices) => {
      paintHours(hourlyPrices);
      paintPrices(hourlyPrices);
      paintMinPrice(hourlyPrices);
      paintMaxPrice(hourlyPrices);
    });
};
getElectricityPrice();

const infoDetail = document.querySelector(".js-table");
const hours = document.querySelector(".js-hour");
const prices = document.querySelector(".js-price");
const variation = document.querySelector(".js-var");
const lowPrice = document.querySelector(".js-low");
const highPrice = document.querySelector(".js-high");

const paintHours = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p> ${hourlyPrices[i].hour}</p>`;
  }
  hours.innerHTML = htmlCode;
};

const paintPrices = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p> ${hourlyPrices[i].PCB} €/kWh</p>`;
  }
  prices.innerHTML = htmlCode;
};

const paintNoData = () => {
  let htmlCode = "Loading";
  infoDetail.innerHTML = htmlCode;
};

const paintMinPrice = (hourlyPrices) => {
  let htmlCode = "";
  let minElement = { PCB: 1000 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].PCB < minElement.PCB) {
      minElement = hourlyPrices[i];
    }
  }
  let minElementCYM = { CYM: 1000 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].CYM < minElementCYM.CYM) {
      minElementCYM = hourlyPrices[i];
    }
  }

  htmlCode += `<p class="priceTitle">Hora más barata</p>`;
  htmlCode += `<p class="place">Península, Canarias y Baleares:</p>`;
  htmlCode += `<p> ${minElement.hour} -> ${minElement.PCB} €/kWh</p>`;
  htmlCode += `<p class="place">Ceuta y Melilla:</p>`;
  htmlCode += `<p> ${minElement.hour} -> ${minElementCYM.CYM} €/kWh</p>`;
  lowPrice.innerHTML = htmlCode;
};

const paintMaxPrice = (hourlyPrices) => {
  let htmlCode = "";
  let maxElement = { PCB: 0 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].PCB > maxElement.PCB) {
      maxElement = hourlyPrices[i];
    }
  }
  let maxElementCYM = { CYM: 0 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].CYM > maxElementCYM.CYM) {
      maxElementCYM = hourlyPrices[i];
    }
  }
  htmlCode += `<p class="priceTitle">Hora más cara</p>`;
  htmlCode += `<p class="place">Península, Canarias y Baleares:</p>`;
  htmlCode += `<p> ${maxElement.hour} -> ${maxElement.PCB} €/kWh</p>`;
  htmlCode += `<p class="place">Ceuta y Melilla:</p>`;
  htmlCode += `<p> ${maxElement.hour} -> ${maxElementCYM.CYM} €/kWh</p>`;
  highPrice.innerHTML = htmlCode;
};
