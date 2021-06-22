const priceDate = document.querySelector(".js-date");

//current date

const printDate = (date) => {
  let htmlCode = "";
  htmlCode += `<p class="date__text">Fecha: ${date}</p>`;
  priceDate.innerHTML = htmlCode;
};

//Resume prices

const getMinPriceItem = (hourlyPrices) => {
  let minPrice = 10;
  let minElement = null;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].price < minPrice) {
      minElement = hourlyPrices[i];
      minPrice = hourlyPrices[i].price;
    }
  }
  return minElement;
};

const paintMinPrice = (hourlyPrices, table) => {
  let htmlCode = "";
  minElement = getMinPriceItem(hourlyPrices);
  htmlCode += `<p class="priceTitle">Hora más barata</p>`;
  htmlCode += `<p> ${minElement.hour}:00 <i class="fas fa-arrow-right resume__arrow"></i> ${minElement.price} €/kWh</p>`;
  table.innerHTML = htmlCode;
};

const getMaxPriceItem = (hourlyPrices) => {
  let maxPrice = 0;
  let maxElement = null;
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].price > maxPrice) {
      maxElement = hourlyPrices[i];
      maxPrice = hourlyPrices[i].price;
    }
  }
  return maxElement;
};

const paintMaxPrice = (hourlyPrices, table) => {
  let htmlCode = "";
  maxElement = getMaxPriceItem(hourlyPrices);
  htmlCode += `<p class="priceTitle">Hora más cara</p>`;
  htmlCode += `<p> ${maxElement.hour}:00 <i class="fas fa-arrow-right resume__arrow"></i> ${maxElement.price} €/kWh</p>`;
  table.innerHTML = htmlCode;
};

const tabsItem = Array.prototype.slice.apply(
  document.querySelectorAll(".tabs__item")
);
const tablesItem = Array.prototype.slice.apply(
  document.querySelectorAll(".table__item")
);
const resumeItem = Array.prototype.slice.apply(
  document.querySelectorAll(".resume__item")
);
const currentPriceItem = Array.prototype.slice.apply(
  document.querySelectorAll(".currentPrice__item")
);
const tabs = document.getElementById("tabs");

const handleClickTable = (e) => {
  if (e.target.classList.contains("tabs__item")) {
    let i = tabsItem.indexOf(e.target);
    tabsItem.map((tab) => tab.classList.remove("active"));
    tabsItem[i].classList.add("active");
    tablesItem.map((table) => table.classList.remove("active"));
    tablesItem[i].classList.add("active");
    resumeItem.map((resume) => resume.classList.remove("active"));
    resumeItem[i].classList.add("active");
    currentPriceItem.map((currentPrice) =>
      currentPrice.classList.remove("active")
    );
    currentPriceItem[i].classList.add("active");
  }
};

tabs.addEventListener("click", handleClickTable);

// const btnItem = Array.prototype.slice.apply(
//   document.querySelectorAll(".btn__item")
// );
// const btn = document.getElementById("btn");

// const handleClickDay = (e) => {
//   if (e.target.classList.contains("btn__item")) {
//     let i = btnItem.indexOf(e.target);
//     btnItem.map((btn) => btn.classList.remove("active"));
//     btnItem[i].classList.add("active");
//   }
// };

// btn.addEventListener("click", handleClickDay);
