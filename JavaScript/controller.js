import * as modelObject from "./model.js";
import * as mainViewObject from "./Views/mainView.js";
import * as viewMorePopUp from "./Views/viewMorePopUp.js";
import * as viewBuyPopUp from "./Views/buyPopUp.js";

const popUp = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnClosePopUp = document.querySelector(".details-close-icon");
const backBtn = document.querySelector(".details-back-icon");
const buyBtn = document.querySelector("#btn-buy");
const purchaseBtn = document.querySelector("#btn-purchase");
const purchaseContainer = document.querySelector(".buy-container");

// RENDER INITIAL SHARES CODE
//

/*const modelStockData = await modelObject.getStockData();
console.log(modelStockData);

console.log(modelObject);

mainViewObject.renderStockList(modelStockData);*/

const mockData = modelObject.testData;
mainViewObject.renderStockList(mockData);
console.log(mockData);

// VIEW MORE POP UP CODE
//

// Render view more pop up
let targetShareID;

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    targetShareID = e.target.closest(".share").id;

    //viewMorePopUp.renderStockPopUp(targetShareID, mockData);

    // Reveal pop up
    viewMorePopUp.showViewMore();

    // Render UI
    viewMorePopUp.renderStockPopUp(targetShareID, mockData);

    return targetShareID;
  } else {
    return;
  }
});

// Close view more pop up
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    viewMorePopUp.hideViewMore();
  }
  viewMorePopUp.clearViewMore();
  viewBuyPopUp.clearPurchase();
});

btnClosePopUp.addEventListener("click", function () {
  viewMorePopUp.hideViewMore();

  viewMorePopUp.clearViewMore();
  viewBuyPopUp.clearPurchase();
});

overlay.addEventListener("click", function () {
  if (!popUp.classList.contains("hidden")) {
    viewMorePopUp.hideViewMore();

    viewMorePopUp.clearViewMore();
    viewBuyPopUp.clearPurchase();
  }
});

// PURCHASE SHARES POP UP CODE
//

buyBtn.addEventListener("click", function () {
  // Clear view more content from pop up
  viewMorePopUp.clearViewMore();

  // Replace it with share purchase UI
  viewBuyPopUp.renderPurchasePopUp();
});

// Back button to return to view more pop up

backBtn.addEventListener("click", function () {
  if (targetShareID) {
    console.log(targetShareID);
  }
  console.log("hello");
  viewBuyPopUp.clearPurchase();
  viewMorePopUp.renderStockPopUp(targetShareID, mockData);
  console.log("done");
});
