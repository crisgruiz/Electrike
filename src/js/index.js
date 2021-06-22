"use strict";

const getTwoDigitsNumber = (number) => {
  number_str = number.toString();
  if (number_str.length == 1) {
    return "0" + number_str;
  } else {
    return number_str;
  }
};

//Current date
const dateAsString = (date) => {
  const curr_day = date.getDate();
  let curr_month = date.getMonth();
  curr_month++;
  const curr_year = date.getFullYear();
  return (
    curr_year +
    "-" +
    getTwoDigitsNumber(curr_month) +
    "-" +
    getTwoDigitsNumber(curr_day)
  );
};

const todayDateAsString = () => dateAsString(new Date());

const tomorrowDateAsString = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return dateAsString(tomorrow);
};

const hourAsString = () => {
  const now = new Date();
  const curr_hour = now.getHours();
  let curr_minute = now.getMinutes();
  return getTwoDigitsNumber(curr_hour) + ":" + getTwoDigitsNumber(curr_minute);
};

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

const priceContainer = document.querySelector(".js-notPrices");

const showPricesNotFound = (date) => {
  let htmlCode = "";
  htmlCode += `Los datos para el día ${date} no están disponibles`;
  priceContainer.innerHTML = htmlCode;
};

const deleteShowPricesNotFound = () => {
  priceContainer.innerHTML = "";
};

//Llamada al API
const getElectricityPrice = (date) => {
  return fetch(
    `https://electrike-otkzylkdbx.s3-eu-west-1.amazonaws.com/v2/${date}.json`
  )
    .then((response) => response.json(), showPricesNotFound(date))
    .then((hourlyPrices) => {
      deleteShowPricesNotFound();
      console.log(hourlyPrices);
      printDate(date);
      paintHours(hourlyPrices.pcb, hoursPCB);
      paintHours(hourlyPrices.cym, hoursCYM);
      paintPrices(hourlyPrices.pcb, pricesPCB);
      paintPrices(hourlyPrices.cym, pricesCYM);
      paintVariation(hourlyPrices.pcb, variationPCB);
      paintVariation(hourlyPrices.cym, variationCYM);
      paintMinPrice(hourlyPrices.pcb, lowPricePCB);
      paintMinPrice(hourlyPrices.cym, lowPriceCYM);
      paintMaxPrice(hourlyPrices.pcb, highPricePCB);
      paintMaxPrice(hourlyPrices.cym, highPriceCYM);
      printCurrentPrice(hourlyPrices, date === todayDateAsString());
    })
    .catch(() => {
      return {
        error: "fetch error",
      };
    });
};
getElectricityPrice(todayDateAsString());

const nextDayBtn = document.querySelector(".js-nextDay");
const currentDayBtn = document.querySelector(".js-currentDay");

const showTomorrowPrices = () => getElectricityPrice(tomorrowDateAsString());
const showCurrentPrices = () => getElectricityPrice(todayDateAsString());
nextDayBtn.addEventListener("click", showTomorrowPrices);
currentDayBtn.addEventListener("click", showCurrentPrices);

//table with data

const paintHours = (hourlyPrices, hours) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    sectionStyle = sectionsMap[hourlyPrices[i].section];
    htmlCode += `<p class="table__hour--item ${sectionStyle}"> ${hourlyPrices[i].hour}:00</p>`;
  }
  hours.innerHTML = htmlCode;
};

const sectionsMap = {
  v: "sectionLow",
  ll: "sectionMedium",
  p: "sectionHigh",
};

const paintPrices = (hourlyPrices, prices) => {
  let htmlCode = "";
  for (let i = 0; i < hourlyPrices.length; i++) {
    sectionStyle = sectionsMap[hourlyPrices[i].section];
    htmlCode += `<p class="table__price--item ${sectionStyle}"> ${hourlyPrices[i].price} <span class="units">€/kWh</span></p>`;
  }
  prices.innerHTML = htmlCode;
};

const paintVariation = (hourlyPrices, variation) => {
  let htmlCode = `<p class="table__var--icon equal sectionLow"><i class="fas fa-equals"></i></p>`;
  for (let i = 1; i < hourlyPrices.length; i++) {
    sectionStyle = sectionsMap[hourlyPrices[i].section];
    htmlCode += `<p class="table__var--icon ${sectionStyle}`;
    let previousValue = hourlyPrices[i - 1].price;
    if (previousValue < hourlyPrices[i].price) {
      htmlCode += ` up"><i class="fas fa-chevron-circle-up"></i></p>`;
    } else if (previousValue > hourlyPrices[i].price) {
      htmlCode += ` down"><i class="fas fa-chevron-circle-down"></i></p>`;
    } else {
      htmlCode += ` equal"><i class="fas fa-equals"></i></p>`;
    }
  }
  variation.innerHTML = htmlCode;
};
