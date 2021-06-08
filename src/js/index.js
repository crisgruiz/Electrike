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
          PCB: (parseFloat(x.PCB.replace(",", ".")) / 1000).toFixed(4),
          CYM: (parseFloat(x.CYM.replace(",", ".")) / 1000).toFixed(4),
        };
      });
    })
    .then((hourlyPrices) => {
      paintMinPricePCB(hourlyPrices);
      paintMaxPricePCB(hourlyPrices);
      paintMinPriceCYM(hourlyPrices);
      paintMaxPriceCYM(hourlyPrices);
      paintHours(hourlyPrices);
      paintPricesPCB(hourlyPrices);
      paintPricesCYM(hourlyPrices);
    });
};
getElectricityPrice();

const infoDetailPCB = document.querySelector(".js-table");
const hoursPCB = document.querySelector(".js-hourPCB");
const pricesPCB = document.querySelector(".js-pricePCB");
const variationPCB = document.querySelector(".js-varPCB");
const hoursCYM = document.querySelector(".js-hourCYM");
const pricesCYM = document.querySelector(".js-priceCYM");
const variationCYM = document.querySelector(".js-varCYM");

//table with data

const paintHours = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p> ${hourlyPrices[i].hour}</p>`;
  }
  hoursPCB.innerHTML = htmlCode;
  hoursCYM.innerHTML = htmlCode;
};

const paintPricesPCB = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p> ${hourlyPrices[i].PCB} €/kWh</p>`;
  }
  pricesPCB.innerHTML = htmlCode;
};

const paintPricesCYM = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p> ${hourlyPrices[i].CYM} €/kWh</p>`;
  }
  pricesCYM.innerHTML = htmlCode;
};

// const tabsItem = Array.prototype.slice.apply(
//   document.querySelectorAll(".tabs__item")
// );
// const tablesItem = Array.prototype.slice.apply(
//   document.querySelectorAll(".table__item")
// );
// const tabs = document.getElementById("tabs");

// const handleClick = (e) => {
//   if (e.target.classList.contains("tabs__item")) {
//     let i = tabsItem.indexOf(e.target);
//     tabsItem.map((tab) => tab.classList.remove("active"));
//     tabsItem[i].classList.add("active");
//     tablesItem.map((table) => table.classList.remove("active"));
//     tablesItem[i].classList.add("active");
//   }
// };

// tabs.addEventListener("click", handleClick);
