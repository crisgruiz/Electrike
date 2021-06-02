const dropdown = document.querySelector(".js-dropdown");
const container = document.querySelector(".dropdowncontainer");
const arrow = document.querySelector(".js-arrow");
function changeDropdown() {
  const isClose = container.classList.contains("hidden");
  // close arrow
  arrow.classList.remove("changeArrow");
  // close container
  container.classList.add("hidden");
  // toggle arrow
  if (isClose) {
    arrow.classList.add("changeArrow");
    arrow.classList.remove("dropdown__arrow");
    container.classList.remove("hidden");
  } else {
    arrow.classList.remove("changeArrow");
    arrow.classList.add("dropdown__arrow");
    container.classList.add("hidden");
  }
}
dropdown.addEventListener("click", changeDropdown);
