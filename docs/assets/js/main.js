const currentPricePCB=document.querySelector(".js-currentPricePCB"),currentPriceCYM=document.querySelector(".js-currentPriceCYM");let currentHour=(new Date).getHours()+":00";console.log(typeof currentHour);const printCurrentPricePCB=e=>{let r="",t="";r+='<p class="currentPrice__text">Precio actual</p>',r+=`<p class="currentPrice__hour">(${currentHour}):</p>`;for(let r=0;r<e.length;r++)e[r].hour===currentHour&&(t=e[r]);r+=`<p class="currentPrice__price">${t.PCB} €/kWh</p>`,currentPricePCB.innerHTML=r},printCurrentPriceCYM=e=>{let r="",t="";r+='<p class="currentPrice__text">Precio actual</p>',r+=`<p class="currentPrice__hour">(${currentHour}):</p>`;for(let r=0;r<e.length;r++)e[r].hour===currentHour&&(t=e[r]);r+=`<p class="currentPrice__price">${t.CYM} €/kWh</p>`,currentPriceCYM.innerHTML=r},dropdown=document.querySelector(".js-dropdown"),container=document.querySelector(".dropdowncontainer"),arrow=document.querySelector(".js-arrow");function changeDropdown(){const e=container.classList.contains("hidden");arrow.classList.remove("changeArrow"),container.classList.add("hidden"),e?(arrow.classList.add("changeArrow"),arrow.classList.remove("dropdown__arrow"),container.classList.remove("hidden")):(arrow.classList.remove("changeArrow"),arrow.classList.add("dropdown__arrow"),container.classList.add("hidden"))}dropdown.addEventListener("click",changeDropdown);let date=new Date;const zero=":00";let ISOdate=date.toISOString(),formatDate=ISOdate.split("").splice(0,10).join("");const getElectricityPrice=()=>fetch(`https://electrike-otkzylkdbx.s3-eu-west-1.amazonaws.com/${formatDate}.json`).then(e=>e.json()).then(e=>{const r=e.pcb.map(e=>e.hour),t=e.pcb.map(e=>e.price.toFixed(5)),c=e.cym.map(e=>e.price.toFixed(5));console.log(e);let i=[];for(let e=0;e<r.length;e++){let n={hour:r[e]+":00",PCB:t[e],CYM:c[e]};i.push(n)}return i}).then(e=>{paintMinPricePCB(e),paintMaxPricePCB(e),paintMinPriceCYM(e),paintMaxPriceCYM(e),paintHours(e),paintPricesPCB(e),paintPricesCYM(e),printCurrentPricePCB(e),printCurrentPriceCYM(e)});fetch(`https://electrike-otkzylkdbx.s3-eu-west-1.amazonaws.com/${formatDate}.json`).then(e=>e.json()).then(e=>{const r=e.pcb.map(e=>e.hour),t=e.pcb.map(e=>e.price.toFixed(5)),c=e.cym.map(e=>e.price.toFixed(5));console.log(e);let i=[];for(let e=0;e<r.length;e++){let n={hour:r[e]+":00",PCB:t[e],CYM:c[e]};i.push(n)}return i}).then(e=>{paintMinPricePCB(e),paintMaxPricePCB(e),paintMinPriceCYM(e),paintMaxPriceCYM(e),paintHours(e),paintPricesPCB(e),paintPricesCYM(e),printCurrentPricePCB(e),printCurrentPriceCYM(e)});const infoDetailPCB=document.querySelector(".js-table"),hoursPCB=document.querySelector(".js-hourPCB"),pricesPCB=document.querySelector(".js-pricePCB"),variationPCB=document.querySelector(".js-varPCB"),hoursCYM=document.querySelector(".js-hourCYM"),pricesCYM=document.querySelector(".js-priceCYM"),variationCYM=document.querySelector(".js-varCYM"),paintHours=e=>{let r="";for(let t=0;t<e.length;t++)r+=`<p class="table__hour--item"> ${e[t].hour}</p>`;hoursPCB.innerHTML=r,hoursCYM.innerHTML=r},paintPricesPCB=e=>{let r="";for(let t=0;t<e.length;t++)r+=`<p class="table__price--item"> ${e[t].PCB} <span class="units">€/kWh</span></p>`;pricesPCB.innerHTML=r},paintPricesCYM=e=>{let r="";for(let t=0;t<e.length;t++)r+=`<p class="table__price--item"> ${e[t].CYM} <span class="units">€/kWh</span></p>`;pricesCYM.innerHTML=r},lowPricePCB=document.querySelector(".js-lowPCB"),highPricePCB=document.querySelector(".js-highPCB"),lowPriceCYM=document.querySelector(".js-lowCYM"),highPriceCYM=document.querySelector(".js-highCYM"),priceDate=document.querySelector(".js-date"),printDate=()=>{let e="";e+=`<p class="date__text">Fecha: ${formatDate}</p>`,priceDate.innerHTML=e};printDate();const paintMinPricePCB=e=>{let r="",t={PCB:1e3};for(let r=0;r<e.length;r++)e[r].PCB<t.PCB&&(t=e[r]);r+='<p class="priceTitle">Hora más barata</p>',r+=`<p> ${t.hour} -> ${t.PCB} €/kWh</p>`,lowPricePCB.innerHTML=r},paintMinPriceCYM=e=>{let r="",t={CYM:1e3};for(let r=0;r<e.length;r++)e[r].CYM<t.CYM&&(t=e[r]);r+='<p class="priceTitle">Hora más barata</p>',r+=`<p> ${t.hour} -> ${t.CYM} €/kWh</p>`,lowPriceCYM.innerHTML=r},paintMaxPricePCB=e=>{let r="",t={PCB:0};for(let r=0;r<e.length;r++)e[r].PCB>t.PCB&&(t=e[r]);r+='<p class="priceTitle">Hora más cara</p>',r+=`<p> ${t.hour} -> ${t.PCB} €/kWh</p>`,highPricePCB.innerHTML=r},paintMaxPriceCYM=e=>{let r="",t={CYM:0};for(let r=0;r<e.length;r++)e[r].CYM>t.CYM&&(t=e[r]);r+='<p class="priceTitle">Hora más cara</p>',r+=`<p> ${t.hour} -> ${t.CYM} €/kWh</p>`,highPriceCYM.innerHTML=r},tabsItem=Array.prototype.slice.apply(document.querySelectorAll(".tabs__item")),tablesItem=Array.prototype.slice.apply(document.querySelectorAll(".table__item")),resumeItem=Array.prototype.slice.apply(document.querySelectorAll(".resume__item")),currentPriceItem=Array.prototype.slice.apply(document.querySelectorAll(".currentPrice__item")),tabs=document.getElementById("tabs"),handleClick=e=>{if(e.target.classList.contains("tabs__item")){let r=tabsItem.indexOf(e.target);tabsItem.map(e=>e.classList.remove("active")),tabsItem[r].classList.add("active"),tablesItem.map(e=>e.classList.remove("active")),tablesItem[r].classList.add("active"),resumeItem.map(e=>e.classList.remove("active")),resumeItem[r].classList.add("active"),currentPriceItem.map(e=>e.classList.remove("active")),currentPriceItem[r].classList.add("active")}};tabs.addEventListener("click",handleClick);