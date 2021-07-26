let houseAppliances = [
  { name: "lavadora", power: 400, default_time: 2 },
  { name: "plancha", power: 600, default_time: 1 },
];

const formContainer = document.querySelector(".js-form");
const inputPower = document.querySelector(".js-input-power");
const inputHours = document.querySelector(".js-input-hours");

const setDefaultValuesForAppliance = (ev) => {
  const aplianceInd = parseInt(ev.currentTarget.id);
  console.log(aplianceInd);
  inputPower.value = houseAppliances[aplianceInd].power;
  inputHours.value = houseAppliances[aplianceInd].default_time;
};

const printFormButtons = () => {
  for (let index = 0; index < houseAppliances.length; index++) {
    const input = document.createElement("input");
    input.className = "formBtn";
    input.type = "button";
    input.id = `${index}`;
    input.value = `${houseAppliances[index].name}`;
    input.addEventListener("click", setDefaultValuesForAppliance);
    formContainer.appendChild(input);
  }
};
printFormButtons();
