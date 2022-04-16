// API CODE
//

//  seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz

const stocks = ["O", "PG", "AAPL"];

// Function to format the API string
const adjustAPIKey = function (stockArray) {
  const newString = stockArray.join(",");
  return newString;
};

// Formatted string ready to be used in the API call
export const APIString = adjustAPIKey(stocks);

// Function to make an AJAX call and return an array of stock objects
export const getStockData = async function (shares) {
  try {
    // AJAX call to API requesting data
    const data = await fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=${shares}&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz`
    );

    // Object containing array of all requested stocks
    const dataObject = await data.json();

    // Array containing one object of data for each stock that was requested
    const dataArray = dataObject.data;
    return dataArray;
  } catch (error) {
    console.error(error);
  }
};

// Function to record date
const recordDate = function () {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear());

  const fullDate = `${day}/${month}/${year}`;
  return fullDate;
};

// Stores data at the account level
class Account {
  constructor(accountName, fundsAvailable, fundsInvested) {
    this.accountName = accountName;
    this.portfolio = [];
    this.fundsAvailable = fundsAvailable;
    this.fundsInvested = fundsInvested;
    this.currency = ["USD", "$"];
    this.movementHistory = [];
    this.tradeHistory = [];
  }
}

export const account1 = new Account("Chris Evans", 0, 0);

// The array elments for the "Account" class' portfolio array
class Investment {
  constructor(
    investmentShareName,
    investmentSharePrice,
    investmentTicker,
    totalNumShares,
    investmentInitValue,
    investmentID
  ) {
    this.investmentShareName = investmentShareName;
    this.investmentSharePrice = investmentSharePrice;
    this.investmentTicker = investmentTicker;
    this.totalNumShares = +totalNumShares;
    this.investmentInitValue = investmentInitValue;
    this.investmentID = investmentID;
  }
}

// The array elements for the "Investments" class' trades array
class Trade {
  constructor(shareName, sharePrice, numShares, tradeValueInit) {
    this.shareName = shareName;
    this.sharePrice = sharePrice;
    this.numShares = numShares;
    this.tradeValueInit = tradeValueInit;
  }
}

// PUCHASE POP UP LOGIC
//

// Function to check if there are enough funds to make purchase
export const checkFunds = function (fundsAvailable, numShares, sharePrice) {
  // Calculating amount needed to make purchase
  const amountRequired = fundsAvailable - numShares * sharePrice;

  // Confirming if purchase can or can't go ahead
  const result = amountRequired >= 0 ? "approved" : "rejected";
  return result;
};

// const check = checkFunds(2500, 250, 9);

// PURCHASE EVENT LOGIC
//

// Check for existing investment
export const existingInvestment = function (account, targetStockTicker) {
  // Investment does not exist
  if (account.portfolio.length === 0) return false;

  // Investment does exist
  if (
    account.portfolio.find(function (investment) {
      return investment[0] === targetStockTicker;
    })
  ) {
    return true;
  } else {
    return false;
  }
};

// Create new investment
export const createInvestment = function (
  //targetAccount,
  shareName,
  sharePrice,
  shareTicker,
  numShares,
  initValue,
  investmentID
) {
  const newInvestment = new Investment(
    shareName,
    sharePrice,
    shareTicker,
    numShares,
    initValue,
    investmentID
  );

  return newInvestment;
  //targetAccount.portfolio.push(newInvestment);
};

// Create new trade
export const createTrade = function (
  //targetInvestment,
  shareName,
  sharePrice,
  numShares,
  initialValue,
  currentValue,
  gainLoss
) {
  /*
  shareName, sharePrice, numShares, tradeGainLoss
  */
  const newTrade = new Trade(
    shareName,
    sharePrice,
    numShares,
    initialValue,
    currentValue,
    gainLoss
  );
  return newTrade;
  //targetInvestment.push(newTrade);
};

// Add to investments as a whole
export const addToInvestments = function (
  data,
  account,
  fundCheckResult,
  targetShareID,
  targetSharePrice,
  inputValue
) {
  if (fundCheckResult === "approved") {
    const targetShareName = data.find(function (share) {
      return share.ticker === targetShareID;
    }).name;

    const investmentType = existingInvestment(account, targetShareID);

    // Workout the initial value of the investment
    const initialValue = targetSharePrice * inputValue;

    // Unique ID to identify each purchase of shares
    const uniqueID = Math.floor(Math.random() * 10000000);

    // If investment does not exist
    if (investmentType === false) {
      // Create a new array for this investment
      const newInvestmentArray = new Array(`${targetShareID}`);

      // Create new investment object
      /*
      shareName,
      sharePrice,
      shareTicker,
      numShares,
      initValue,
      investmentID
      */

      const newInvestment = createInvestment(
        //modelObject.account1,
        targetShareName,
        targetSharePrice,
        targetShareID,
        inputValue,
        initialValue,
        uniqueID
      );

      // Add first investment object to new investment array
      newInvestmentArray.push(newInvestment);

      // Push this new investment array to the account's portfolio array
      account.portfolio.push(newInvestmentArray);

      // Update the account's trade history
      const curDate = recordDate();

      account.tradeHistory.push({
        date: curDate,
        name: targetShareID,
        type: "Purchase",
        value: initialValue,
        shares: inputValue,
      });

      // Update account balances
      account.fundsAvailable = account.fundsAvailable - initialValue;

      account.fundsInvested = account.fundsInvested + initialValue;

      return;
    }

    if (investmentType === true) {
      // Create new investment object
      const existingInvestment = createInvestment(
        /*
      shareName,
      sharePrice,
      shareTicker,
      numShares,
      initValue,
      investmentID
      */
        targetShareName,
        targetSharePrice,
        targetShareID,
        inputValue,
        initialValue,
        uniqueID
      );

      // Find correct investment array
      const targetInvestmentArray = account.portfolio.find(function (
        investment
      ) {
        return investment[0] === targetShareID;
      });

      // Push investment object to existing investment array
      targetInvestmentArray.push(existingInvestment);

      // Update the account's trade history
      const curDate = recordDate();

      account.tradeHistory.push({
        date: curDate,
        name: targetShareID,
        type: "Purchase",
        value: initialValue,
        shares: inputValue,
      });

      // Update account balances
      account.fundsAvailable = account.fundsAvailable - initialValue;

      account.fundsInvested = account.fundsInvested + initialValue;

      return;
    }
  }

  if (fundCheckResult === "rejected") {
    // Turn error text red for more emphasis
    return "error";
  }
};

// TOP BUTTONS LOGIC
//

// Removing deposit value from account balance
export const withdrawAccount = function (enteredWithdrawAmount) {
  // Is there enough to withdraw AND was a valid input entered?
  if (
    enteredWithdrawAmount <= account1.fundsAvailable &&
    enteredWithdrawAmount > 0
  ) {
    const curFundsAvailable = account1.fundsAvailable;
    const fundsRequested = enteredWithdrawAmount;

    // Update fundsAvailable data in account
    account1.fundsAvailable = curFundsAvailable - fundsRequested;

    // Record the date that this request was made
    const curDate = recordDate();

    // Push a new movement object to movements history
    account1.movementHistory.push({
      movement: -fundsRequested,
      date: curDate,
    });

    return "success";
  } else if (enteredWithdrawAmount > account1.fundsAvailable) {
    return "failure-not-enough";
  } else {
    return "failure-invalid-input";
  }
};

// Adding deposit value to account balance
export const depositAccount = function (enteredDepositAmount) {
  if (enteredDepositAmount > 0) {
    const curFundsAvailable = account1.fundsAvailable;
    const newFunds = enteredDepositAmount;

    // Update fundsAvailable data in account
    account1.fundsAvailable = curFundsAvailable + newFunds;

    // Record the date that this request was made
    const curDate = recordDate();

    // Add and update this deposit (movement) to movementHistory array
    account1.movementHistory.push({
      movement: newFunds,
      date: curDate,
    });
    return "success";
  } else {
    return "error";
  }
};

// VIEW PORTFOLIO LOGIC
//

// Loop over group investments to build an object with the total values

export const buildTallyObject = function (accountPortfolio) {
  // Empty initial array to store tally objects
  const tallyArray = [];

  // Loop over portfolio array
  accountPortfolio.forEach(function (investment) {
    // Exclude first element of each array (ID Tag), leaving just an array of objects
    const [tallyID] = investment.slice(0, 1);

    const tallyData = investment.slice(1);

    // Workout total tallys
    const averageSharePrice =
      tallyData
        .map(function (price) {
          return price.investmentSharePrice;
        })
        .reduce(function (start, price) {
          return start + price;
        }) / tallyData.length;

    const tallyNumShares = tallyData
      .map(function (numShares) {
        return numShares.totalNumShares;
      })
      .reduce(function (start, numShares) {
        return start + numShares;
      });

    const tallyInvested = tallyData
      .map(function (invested) {
        return invested.investmentInitValue;
      })
      .reduce(function (start, invested) {
        return start + invested;
      });

    // Build an object containing total tallys
    const tallyObject = {
      objectID: tallyID,
      objectAvgSharePrice: averageSharePrice.toFixed(2),
      objectNumShares: tallyNumShares.toFixed(2),
      objectInvested: tallyInvested.toFixed(2),
    };

    tallyArray.push(tallyObject);
    return;
  });
  return tallyArray;
};

// Loop over individual investments and render their data within the individual investment cards

export const buildIndividualInvestmentArray = function (
  groupInvestmentArray,
  targetGroupID
) {
  // Find the correct investment group array so it's ID can be obtained and used to search the portfolio for the individual investment array
  const targetGroupArray = groupInvestmentArray.find(function (
    groupInvestment
  ) {
    return groupInvestment.objectID == targetGroupID;
  });

  // The final array ready for card rendering
  const individualInvestmentsArray = account1.portfolio
    .find(function (investment) {
      return investment[0] === targetGroupArray.objectID;
    })
    .slice(1);
  return individualInvestmentsArray;
};

// Delete an (individual) investment object from the account's data
export const sellIndividualInvestment = function (ticker, ID) {
  // The target array
  const deleteTargetArr = account1.portfolio.find(function (groupInvestment) {
    return groupInvestment[0] === ticker;
  });

  // Index of the target array
  const deleteTargetArrIndex = account1.portfolio.indexOf(deleteTargetArr);

  // The target element in that array
  const deleteTarget = account1.portfolio
    .find(function (groupInvestment) {
      return groupInvestment[0] === ticker;
    })
    .slice(1)
    .find(function (individualInvestment) {
      return individualInvestment.investmentID === ID;
    });
  console.log(deleteTarget);

  // Index number of array element to be removed
  const deleteTargetIndex = deleteTargetArr.indexOf(deleteTarget);

  // Update the account's trade history
  const curDate = recordDate();

  account1.tradeHistory.push({
    date: curDate,
    name: deleteTarget.investmentTicker,
    type: "Sale",
    value: (
      deleteTarget.investmentSharePrice * deleteTarget.totalNumShares
    ).toFixed(2),
    shares: deleteTarget.totalNumShares,
  });

  // Update the bottom bar statistics data
  account1.fundsAvailable =
    account1.fundsAvailable + deleteTarget.investmentInitValue;

  account1.fundsInvested =
    account1.fundsInvested -
    deleteTarget.investmentSharePrice * deleteTarget.totalNumShares;

  // If only one investment exists in the entire share
  if (deleteTargetArr.length === 2) {
    // Delete the array as a who;e
    account1.portfolio.splice(deleteTargetArrIndex, 1);
    return "single";
  }
  if (deleteTargetArr.length > 2) {
    // Remove the corresponding array element
    deleteTargetArr.splice(deleteTargetIndex, 1);
    return "multiple";
  }
};

// BOTTOM BAR STATISTICS LOGIC
//

// Funds available data
export const getFundsAvailable = function () {
  return account1.fundsAvailable.toFixed(2);
};

// Funds invested data
export const getFundsInvested = function () {
  return account1.fundsInvested.toFixed(2);
};

// Total account value data
export const getCurrentValue = function () {
  const currentValue = account1.fundsAvailable + account1.fundsInvested;

  return currentValue.toFixed(2);
};
