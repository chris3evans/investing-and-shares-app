import * as modelObject from "./model.js";
import * as mainViewObject from "./Views/mainView.js";
import * as viewMorePopUp from "./Views/viewMorePopUp.js";
import * as viewBuyPopUp from "./Views/buyPopUp.js";

const popUp = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnClosePopUp = document.querySelector(".details-close-icon");
const backBtn = document.querySelector(".details-back-icon");
const buyBtn = document.querySelector("#btn-buy-text");

// RENDER INITIAL SHARES CODE
//

/*const modelStockData = await modelObject.getStockData();
console.log(modelStockData);

console.log(modelObject);

mainViewObject.renderStockList(modelStockData);*/

const mockData = modelObject.testData;
mainViewObject.renderStockList(mockData);

// VIEW MORE POP UP CODE
//

// Render view more pop up
let targetShareID;

const openViewMorePopUp = function () {
  document.addEventListener("click", function (e) {
    // View more pop up listeners

    if (!e.target.classList.contains("btn")) {
      return;
    } else {
      targetShareID = e.target.closest(".share").id;

      //viewMorePopUp.renderStockPopUp(targetShareID, mockData);

      // Reveal pop up
      viewMorePopUp.showViewMore();

      // Render UI
      viewMorePopUp.renderStockPopUp(targetShareID, mockData);

      return targetShareID;
    }
  });
};
openViewMorePopUp();
//

// Close view more pop up
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    viewMorePopUp.hideViewMore();

    viewMorePopUp.clearViewMore();
    viewBuyPopUp.clearPurchase();
  }
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

// Open up "purchase shares" UI
const openPurchaseWindow = function () {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-buy-text")) {
      // Clear view more content from pop up
      viewMorePopUp.clearViewMore();

      // Replace it with share purchase UI
      viewBuyPopUp.renderPurchasePopUp(targetShareID, mockData);

      console.log("hello");
    }
  });
};
openPurchaseWindow();

// Purchase stock pop up listeners
const renderPurchaseBtns = function () {
  document.addEventListener("click", function (e) {
    // Select units function
    const revealUnits = function () {
      const unitBackground = document.querySelector(".buy-units");
      const fundBackground = document.querySelector(".buy-funds");
      unitBackground.classList.add("unit-selected");
      fundBackground.classList.remove("fund-selected");
    };

    const revealFunds = function () {
      const unitBackground = document.querySelector(".buy-units");
      const fundBackground = document.querySelector(".buy-funds");
      unitBackground.classList.remove("unit-selected");
      fundBackground.classList.add("fund-selected");
    };

    // Select units
    if (e.target.classList.contains("unit")) {
      const unitMethod = e.target;

      if (!unitMethod.classList.contains("unit-selected")) {
        revealUnits();
      }
      if (unitMethod.classList.contains("unit-selected")) {
        revealFunds();
      }
    }

    // Select funds
    if (e.target.classList.contains("fund")) {
      const fundMethod = e.target;

      if (!fundMethod.classList.contains("fund-selected")) {
        revealFunds();
      }
      if (fundMethod.classList.contains("fund-selected")) {
        revealUnits();
      }
    }
  });
};
renderPurchaseBtns();

// Back button to return to view more pop up
backBtn.addEventListener("click", function () {
  viewBuyPopUp.clearPurchase();
  viewMorePopUp.renderStockPopUp(targetShareID, mockData);
});

// Make a purchase of shares
const purchaseShares = function () {
  document.addEventListener("click", function (e) {
    // Once purchase button is clicked
    if (e.target.classList.contains("btn-purchase-text")) {
      // Input value (numShares)
      const input = document.querySelector(".buy-input");
      const inputValue = input.value;

      // Share price of target stock (sharePrice)
      const targetSharePrice = mockData.find(function (share) {
        return share.ticker === targetShareID;
      }).price;

      // fundsAvailable
      const availableFunds = modelObject.account1.fundsAvailable;

      // Check input is valid
      if (inputValue && inputValue > 0) {
        // Check if there is simply enough money
        const result = modelObject.checkFunds(
          availableFunds,
          inputValue,
          targetSharePrice
        );

        // If there is enough:
        if (result === "approved") {
          const targetShareName = mockData.find(function (share) {
            return share.ticker === targetShareID;
          }).name;
          // If investment does not exist
          if (
            !modelObject.existingInvestment(modelObject.account1, targetShareID)
          ) {
            // Create a new array for this investment
            const newInvestmentArray = new Array(`${targetShareID}`);

            // Create new investment object
            /*
            shareName,
            sharePrice,
            shareTicker,
            numShares,
            portPercentage,
            initValue,
            curValue,
            gainLoss,
            */
            const newInvestment = modelObject.createInvestment(
              //modelObject.account1,
              targetShareName,
              targetSharePrice,
              targetShareID,
              inputValue,
              100,
              2000,
              2200,
              0.25
            );

            // Add first investment object to new investment array
            newInvestmentArray.push(newInvestment);

            // Push this new investment array to the account's portfolio array
            modelObject.account1.portfolio.push(newInvestmentArray);
            console.log(modelObject.account1);
          } else {
            console.log("investment exists");
            // Create new investment object
            const existingInvestment = modelObject.createInvestment(
              targetShareName,
              targetSharePrice,
              targetShareID,
              inputValue,
              100,
              2000,
              2200,
              0.25
            );

            // Find correct investment array
            const targetInvestmentArray = modelObject.account1.portfolio.find(
              function (investment) {
                return investment[0] === targetShareID;
              }
            );

            // Push investment object to existing investment array
            targetInvestmentArray.push(existingInvestment);
            console.log(modelObject.account1);
          }
        }

        // If there is not enough:
        if (result === "rejected") {
        }
      } else {
        // Render error message: 'Please enter an amount'
        return;
      }
    }
  });
};
purchaseShares();

const updatePurchaseSummary = function () {
  document.addEventListener("keydown", function (e) {
    //const renderPurchaseSummary = function (quantity, stock, amount)
    const buyContainer = document.querySelector(".buy-container");

    if (buyContainer && e.key != "Backspace") {
      let totalInput = 0;
      const secondInput = e.key;
      const firstInput = document.querySelector(".buy-input").value;

      totalInput = +firstInput.concat(secondInput);

      const price = mockData.find(function (share) {
        return share.ticker === targetShareID;
      }).price;
      const totalAmount = price * totalInput;

      viewBuyPopUp.renderPurchaseSummary(
        totalInput,
        targetShareID,
        totalAmount
      );
    }
  });
};
updatePurchaseSummary();
