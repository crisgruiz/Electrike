"use strict";

//Current date

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

//Llamada al API
const getDataFromApi = () => {
  return fetch(
    `https://api.esios.ree.es/archives/70/download_json?locale=es&date=${day}-${month}-${year}`
  ).then((response) => response.json());
};
