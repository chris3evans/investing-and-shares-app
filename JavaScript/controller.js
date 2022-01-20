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

    if (e.target.classList.contains("btn")) {
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

console.log(modelObject.account1);

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
          // If investment does not exist
          if (
            !modelObject.existingInvestment(
              modelObject.account1.portfolio,
              targetShareID
            )
          ) {
            // Create new investment object
            const targetShareName = mockData.find(function (share) {
              return share.ticker === targetShareID;
            }).name;
            /*
            targetAccount,
            shareName,
            shareTicker,
            numShares,
            portPercentage,
            gainLoss,
            value
            */
            modelObject.createInvestment(
              modelObject.account1,
              targetShareName,
              targetShareID,
              inputValue,
              100,
              0.25,
              2000
            );
            console.log(modelObject.account1);

            // Create new trade object
            /*
            targetInvestment,
            shareName,
            sharePrice,
            numShares,
            gainLoss
            */
            const newTrade = modelObject.createTrade(
              targetShareName,
              targetSharePrice,
              inputValue,
              0.25
            );

            const targetPortfolio = modelObject.account1.portfolio.find(
              function (investment) {
                console.log(investment);
                return investment.ticker === targetShareID;
              }
            ).trades;
            console.log(targetPortfolio);

            targetPortfolio.push(newTrade);
            console.log(modelObject.account1);
            // Push trade to new investment
          }

          // If investment does exist
          if (
            modelObject.existingInvestment(modelObject.account1, targetShareID)
          ) {
            // Create new trade object
            // Push trade to existing investment
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
