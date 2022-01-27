import * as modelObject from "./model.js";
import * as mainViewObject from "./Views/mainView.js";
import * as viewMorePopUp from "./Views/viewMorePopUp.js";
import * as viewBuyPopUp from "./Views/buyPopUp.js";
import * as viewBottomBar from "./Views/bottomBar.js";
import * as viewDepositBtn from "./Views/depositBtn.js";

const popUp = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnClosePopUp = document.querySelector(".details-close-icon");
const backBtn = document.querySelector(".details-back-icon");
const buyBtn = document.querySelector("#btn-buy-text");
const depositBtn = document.querySelector("#btnDeposit");

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
    viewDepositBtn.clearDepositPopup();
  }
});

btnClosePopUp.addEventListener("click", function () {
  viewMorePopUp.hideViewMore();

  viewMorePopUp.clearViewMore();
  viewBuyPopUp.clearPurchase();
  viewDepositBtn.clearDepositPopup();
});

overlay.addEventListener("click", function () {
  if (!popUp.classList.contains("hidden")) {
    viewMorePopUp.hideViewMore();

    viewMorePopUp.clearViewMore();
    viewBuyPopUp.clearPurchase();
    viewDepositBtn.clearDepositPopup();
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

// Workout how many units have been entered for purchase
const workoutEnteredAmount = function (e, accountAmount) {
  let totalInput = 0;
  const secondInput = e.key;
  const firstInput = document.querySelector(".buy-input").value;

  // Join values and turn to number type
  totalInput = +firstInput.concat(secondInput);

  const price = mockData.find(function (share) {
    return share.ticker === targetShareID;
  }).price;
  const totalAmount = price * totalInput;

  // If a non number key is pressed do nothing
  if (Number.isNaN(totalInput)) {
  } else {
    // Otherwise render the purchase summary message
    viewBuyPopUp.renderPurchaseSummary(totalInput, targetShareID, totalAmount);
  }

  // If the value entered is more than what's in the account
  if (accountAmount < totalAmount) {
    viewBuyPopUp.renderPurchaseError(totalAmount, accountAmount);
  }
  return totalAmount;
};

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

        modelObject.addToInvestments(
          mockData,
          modelObject.account1,
          result,
          targetShareID,
          targetSharePrice,
          inputValue
        );

        // If there is not enough:
        /*if (addition === "error") {
          // Turn error text red for more emphasis
          viewBuyPopUp.renderMainPurchaseError();
        }*/
        console.log(modelObject.account1);
        return;
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
    const buyContainer = document.querySelector(".buy-container");

    // If buy container exists yet
    if (buyContainer) {
      console.log(workoutEnteredAmount(e, modelObject.account1.fundsAvailable));
    }
  });
};
updatePurchaseSummary();

// TOP BUTTONS LOGIC
//

// Open deposits pop up
depositBtn.addEventListener("click", function () {
  viewDepositBtn.renderDepositPopup();
});

// Submit deposit button
document.addEventListener("click", function (e) {
  // If the correct button is clicked
  if (e.target.classList.contains("deposit-btn")) {
    console.log("why");
  }
});

// BOTTOM BAR STATISTICS LOGIC
//

const updateBottomBar = function () {
  // Update funds available
  viewBottomBar.renderFundsAvailanble(modelObject.getFundsAvailable());

  // Update funds invested
  viewBottomBar.renderFundsInvested(modelObject.getFundsInvested());

  // Update net gain loss
  viewBottomBar.renderNetGainLoss(modelObject.getNetGainLoss());

  // Update account's current value;
  viewBottomBar.renderCurrentValue(modelObject.getCurrentValue());
};
updateBottomBar();
