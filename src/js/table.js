const tabsItem = Array.prototype.slice.apply(
  document.querySelectorAll(".tabs__item")
);
const tablesItem = Array.prototype.slice.apply(
  document.querySelectorAll(".table__item")
);
const tabs = document.getElementById("tabs");

const handleClick = (e) => {
  if (e.target.classList.contains("tabs__item")) {
    let i = tabsItem.indexOf(e.target);
    tabsItem.map((tab) => tab.classList.remove("active"));
    tabsItem[i].classList.add("active");
    tablesItem.map((table) => table.classList.remove("active"));
    tablesItem[i].classList.add("active");
  }
};

tabs.addEventListener("click", handleClick);
