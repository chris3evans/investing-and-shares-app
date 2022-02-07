import * as modelObject from "./model.js";
import * as mainViewObject from "./Views/mainView.js";
import * as viewMorePopUp from "./Views/viewMorePopUp.js";
import * as viewBuyPopUp from "./Views/buyPopUp.js";
import * as viewBottomBar from "./Views/bottomBar.js";
import * as viewDepositBtn from "./Views/depositBtn.js";
import * as viewWithdrawBtn from "./Views/withdrawBtn.js";
import * as viewAccount from "./Views/viewAccount.js";
import * as viewInvestmentGroup from "./Views/investmentGroup.js";
import * as viewPortfolio from "./Views/portfolioBtn.js";

const popUp = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnClosePopUp = document.querySelector(".details-close-icon");
const backBtn = document.querySelector(".details-back-icon");
const buyBtn = document.querySelector("#btn-buy-text");
const depositBtn = document.querySelector("#btnDeposit");
const withdrawBtn = document.querySelector("#btnWithdraw");
const viewAccountBtn = document.querySelector("#btnAccount");
const accountBackBtn = document.querySelector(".view-nav-back-icon");
const movementsBtn = document.querySelector("#btnMovements");
const tradesBtn = document.querySelector("#btnTrades");
const portfolioBtn = document.querySelector("#btnPortfolio");

// RENDER INITIAL SHARES CODE
//

/*const modelStockData = await modelObject.getStockData();
console.log(modelStockData);

console.log(modelObject);

mainViewObject.renderStockList(modelStockData);*/

const mockData = modelObject.testData;
mainViewObject.renderStockList(mockData);

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

// Close view more pop up

// General function
const closeViewMorePopUp = function () {
  viewMorePopUp.hideViewMore();

  viewMorePopUp.clearViewMore();
  viewBuyPopUp.clearPurchase();
  viewDepositBtn.clearDepositPopup();
  viewWithdrawBtn.clearWithdrawPopUp();
};

// via Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    closeViewMorePopUp();
  }
});

// Via close button
btnClosePopUp.addEventListener("click", function () {
  closeViewMorePopUp();
});

// Via overlay
overlay.addEventListener("click", function () {
  if (!popUp.classList.contains("hidden")) {
    closeViewMorePopUp();
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
        // Close the pop up window
        closeViewMorePopUp();

        // Update bottom bar statistics
        updateBottomBar();

        return "successful stock purchase";
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

// Open withdraw pop up
withdrawBtn.addEventListener("click", function () {
  viewWithdrawBtn.renderWithdrawPopUp();
});

// Submit withdraw button
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("withdraw-btn")) {
    const withdrawInput = document.querySelector(".withdraw-input").value;
    console.log(withdrawInput);

    let withdrawResult = modelObject.withdrawAccount(withdrawInput);

    // If invalid input entered
    if (withdrawResult === "failure-invalid-input") {
      viewWithdrawBtn.renderWithdrawErrorMessage(
        "Please enter an amount greater than zero!"
      );
    }

    // If not enough in account to withdraw
    if (withdrawResult === "failure-not-enough") {
      viewWithdrawBtn.renderWithdrawErrorMessage(
        "You do not have enough funds to withdraw this much!"
      );
    }

    if (withdrawResult === "success") {
      // Pass into model
      withdrawResult;

      // Close the window
      viewMorePopUp.hideViewMore();

      viewMorePopUp.clearViewMore();
      viewBuyPopUp.clearPurchase();
      viewWithdrawBtn.clearWithdrawPopUp();

      // Re-render bottom bar statistics with updated data
      updateBottomBar();

      return;
    }
  }
});

// Open deposits pop up
depositBtn.addEventListener("click", function () {
  viewDepositBtn.renderDepositPopup();
});

// Submit deposit button
document.addEventListener("click", function (e) {
  // If the correct button is clicked
  if (e.target.classList.contains("deposit-btn")) {
    // Get the value entered in the input
    const depositInput = +document.querySelector(".deposit-input").value;

    let depositResult = modelObject.depositAccount(depositInput);

    // If invalid input
    if (depositResult === "error") {
      // Render deposit error message
      viewDepositBtn.renderDepositErrorMessage();
      return;
    }

    if (depositResult === "success") {
      // Pass into model
      depositResult;

      // Close the window
      viewMorePopUp.hideViewMore();

      viewMorePopUp.clearViewMore();
      viewBuyPopUp.clearPurchase();
      viewDepositBtn.clearDepositPopup();

      // Re-render bottom bar statistics with updated data
      updateBottomBar();

      return;
    }
  }
});
console.log(modelObject.account1);
// View account button
viewAccountBtn.addEventListener("click", function () {
  // Reveal navigation for viewing account history
  viewAccount.renderAccountNavigation();

  // Return movement and trade buttons to original state
  tradesBtn.classList.remove("btn-dark");
  tradesBtn.classList.add("btn-light");
  movementsBtn.classList.remove("btn-light");
  movementsBtn.classList.add("btn-dark");

  // Clear share cards
  viewAccount.clearViewWindow();

  // If there is no account history yet
  if (modelObject.account1.movementHistory.length === 0) {
    console.log("no history");
    return;
  }

  //  Render movement history cards (if there are any)
  if (modelObject.account1.movementHistory.length > 0) {
    viewAccount.renderAccountMovements(modelObject.account1.movementHistory);
    return;
  }
});

// Close view account history
accountBackBtn.addEventListener("click", function () {
  // Hide account navigation UI
  viewAccount.hideAccountNavigation();

  // Clear account history content
  viewAccount.clearViewWindow();

  // Render share cards
  mainViewObject.renderStockList(mockData);
});

// Switching between viewing movements history and trades history
tradesBtn.addEventListener("click", function () {
  // Adjusting CSS styling
  movementsBtn.classList.remove("btn-dark");
  movementsBtn.classList.add("btn-light");
  tradesBtn.classList.remove("btn-light");
  tradesBtn.classList.add("btn-dark");

  // Clear old content
  viewAccount.clearViewWindow();

  // Render trade cards (if there are any)
  if (modelObject.account1.tradeHistory.length === 0) {
    console.log("no trade history");
    return;
  }

  if (modelObject.account1.tradeHistory.length > 0) {
    viewAccount.renderAccountTrades(modelObject.account1.tradeHistory);
  }
});

movementsBtn.addEventListener("click", function () {
  // Adjusting CSS styling
  tradesBtn.classList.remove("btn-dark");
  tradesBtn.classList.add("btn-light");
  movementsBtn.classList.remove("btn-light");
  movementsBtn.classList.add("btn-dark");

  // Clear old content
  viewAccount.clearViewWindow();

  // Render movement history cards
  if (modelObject.account1.movementHistory.length === 0) {
    console.log("no history");
  }

  if (modelObject.account1.movementHistory.length > 0) {
    viewAccount.renderAccountMovements(modelObject.account1.movementHistory);
  }
});

// INVESTMENT GROUP CODE
//

// Render the portfolio UI
portfolioBtn.addEventListener("click", function () {
  // Clear share cards from view
  viewAccount.clearViewWindow();

  // Render portfolio headings
  viewPortfolio.renderPortfolioView();

  // Tally up all individual data for group investment cards
  const tallyObjectArr = modelObject.buildTallyObject(
    modelObject.account1.portfolio
  );
  console.log(tallyObjectArr);

  // Render portfolio in view from account data
  viewPortfolio.renderGroupInvestment(tallyObjectArr);
});

const testBtn = document.querySelector(".investment-group-icon");
const investmentContainer = document.querySelector(".investment-container");

// Reveal individual investments under group investment

testBtn.addEventListener("click", function () {
  investmentContainer.classList.toggle("smooth-reveal");

  const upChevron = "chevron-small-up";
  const downChevron = "chevron-small-down";
});
