"use strict";

//Current date
let date = new Date();
const zero = ":00";
let ISOdate = date.toISOString();
let formatDate = ISOdate.split("").splice(0, 10).join("");

//Llamada al API
const getElectricityPrice = () => {
  return fetch(
    `https://electrike-otkzylkdbx.s3-eu-west-1.amazonaws.com/${formatDate}.json`
  )
    .then((response) => response.json())
    .then((data) => {
      const hours = data.pcb.map((x) => x.hour);
      const PCBprices = data.pcb.map((x) => x.price.toFixed(5));
      const CYMprices = data.cym.map((x) => x.price.toFixed(5));
      console.log(data);
      let PVPCdata = [];
      for (let i = 0; i < hours.length; i++) {
        let objectElement = {
          hour: hours[i] + ":00",
          PCB: PCBprices[i],
          CYM: CYMprices[i],
        };
        PVPCdata.push(objectElement);
      }
      return PVPCdata;
    })
    .then((hourlyPrices) => {
      paintMinPricePCB(hourlyPrices);
      paintMaxPricePCB(hourlyPrices);
      paintMinPriceCYM(hourlyPrices);
      paintMaxPriceCYM(hourlyPrices);
      paintHours(hourlyPrices);
      paintPricesPCB(hourlyPrices);
      paintPricesCYM(hourlyPrices);
      printCurrentPrice(hourlyPrices);
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
    htmlCode += `<p class="table__hour--item"> ${hourlyPrices[i].hour}</p>`;
  }
  hoursPCB.innerHTML = htmlCode;
  hoursCYM.innerHTML = htmlCode;
};

const paintPricesPCB = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p class="table__price--item"> ${hourlyPrices[i].PCB} <span class="units">€/kWh</span></p>`;
  }
  pricesPCB.innerHTML = htmlCode;
};

const paintPricesCYM = (hourlyPrices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    htmlCode += `<p class="table__price--item"> ${hourlyPrices[i].CYM} <span class="units">€/kWh</span></p>`;
  }
  pricesCYM.innerHTML = htmlCode;
};
