import * as modelObject from "./model.js";
import * as mainViewObject from "./Views/mainView.js";
import * as viewMorePopUp from "./Views/viewMorePopUp.js";

const popUp = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnClosePopUp = document.querySelector(".details-close-icon");

/*const modelStockData = await modelObject.getStockData();
console.log(modelStockData);

console.log(modelObject);

mainViewObject.renderStockList(modelStockData);*/

const mockData = modelObject.testData;
mainViewObject.renderStockList(mockData);
console.log(mockData);

// Render view more pop up
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    const targetShareID = e.target.closest(".share").id;

    //viewMorePopUp.renderStockPopUp(targetShareID, mockData);

    viewMorePopUp.renderStockPopUp(targetShareID, mockData);
  } else {
    return;
  }
});

// Close view more pop up
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    popUp.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

btnClosePopUp.addEventListener("click", function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  if (!popUp.classList.contains("hidden")) {
    popUp.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
