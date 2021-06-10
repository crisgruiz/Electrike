const lowPricePCB = document.querySelector(".js-lowPCB");
const highPricePCB = document.querySelector(".js-highPCB");
const lowPriceCYM = document.querySelector(".js-lowCYM");
const highPriceCYM = document.querySelector(".js-highCYM");
const priceDate = document.querySelector(".js-date");

//current date

const printDate = () => {
  let htmlCode = "";
  htmlCode += `<p class="date__text">Fecha: ${formatDate}</p>`;
  priceDate.innerHTML = htmlCode;
};
printDate();

//Resume prices

const paintMinPricePCB = (hourlyPrices) => {
  let htmlCode = "";
  let minElement = { PCB: 1000 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].PCB < minElement.PCB) {
      minElement = hourlyPrices[i];
    }
  }

  htmlCode += `<p class="priceTitle">Hora más barata</p>`;
  htmlCode += `<p> ${minElement.hour} -> ${minElement.PCB} €/kWh</p>`;
  lowPricePCB.innerHTML = htmlCode;
};

const paintMinPriceCYM = (hourlyPrices) => {
  let htmlCode = "";
  let minElementCYM = { CYM: 1000 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].CYM < minElementCYM.CYM) {
      minElementCYM = hourlyPrices[i];
    }
  }

  htmlCode += `<p class="priceTitle">Hora más barata</p>`;
  htmlCode += `<p> ${minElementCYM.hour} -> ${minElementCYM.CYM} €/kWh</p>`;
  lowPriceCYM.innerHTML = htmlCode;
};

const paintMaxPricePCB = (hourlyPrices) => {
  let htmlCode = "";
  let maxElement = { PCB: 0 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].PCB > maxElement.PCB) {
      maxElement = hourlyPrices[i];
    }
  }

  htmlCode += `<p class="priceTitle">Hora más cara</p>`;
  htmlCode += `<p> ${maxElement.hour} -> ${maxElement.PCB} €/kWh</p>`;
  highPricePCB.innerHTML = htmlCode;
};

const paintMaxPriceCYM = (hourlyPrices) => {
  let htmlCode = "";
  let maxElementCYM = { CYM: 0 };
  for (let i = 0; i < hourlyPrices.length; i++) {
    if (hourlyPrices[i].CYM > maxElementCYM.CYM) {
      maxElementCYM = hourlyPrices[i];
    }
  }
  htmlCode += `<p class="priceTitle">Hora más cara</p>`;
  htmlCode += `<p> ${maxElementCYM.hour} -> ${maxElementCYM.CYM} €/kWh</p>`;
  highPriceCYM.innerHTML = htmlCode;
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
const tabs = document.getElementById("tabs");

const handleClick = (e) => {
  if (e.target.classList.contains("tabs__item")) {
    let i = tabsItem.indexOf(e.target);
    tabsItem.map((tab) => tab.classList.remove("active"));
    tabsItem[i].classList.add("active");
    tablesItem.map((table) => table.classList.remove("active"));
    tablesItem[i].classList.add("active");
    resumeItem.map((resume) => resume.classList.remove("active"));
    resumeItem[i].classList.add("active");
  }
};

tabs.addEventListener("click", handleClick);
