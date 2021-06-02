"use strict";

//Current date

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
//Llamada al API
let info = null;

const getElectricityPrice = () => {
  if (day < 10) {
    return fetch(
      `https://api.esios.ree.es/archives/70/download_json?locale=es&date=${year}-${month}-0${day}`
    )
      .then((response) => response.json())
      .then((data) => {
        info = data;
        paintHours();
        paintPrices();
      });
  } else {
    return fetch(
      `https://api.esios.ree.es/archives/70/download_json?locale=es&date=${year}-${month}-${day}`
    )
      .then((response) => response.json())
      .then((data) => {
        info = data;
        paintHours();
        paintPrices();
      });
  }
};
getElectricityPrice();

const infoDetail = document.querySelector(".js-table");
const hours = document.querySelector(".js-hour");
const prices = document.querySelector(".js-price");

const paintHours = () => {
  let htmlCode = "";
  for (let i = 0; i < info.PVPC.length; i++) {
    htmlCode += `<p> ${info.PVPC[i].Hora}</p>`;
  }
  hours.innerHTML = htmlCode;
};

const paintPrices = () => {
  let htmlCode = "";
  for (let i = 0; i < info.PVPC.length; i++) {
    const prices = parseInt(info.PVPC[i].PCB);
    const correctPrices = prices / 1000;
    htmlCode += `<p> ${correctPrices} euros/kWh</p>`;
  }
  prices.innerHTML = htmlCode;
};

const paintNoData = () => {
  let htmlCode = "Loading";
  infoDetail.innerHTML = htmlCode;
};
