/*https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz*/

//seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz
// ["O", "ADM", "PG", "KO", "SPG"]

/*MOCK DATA
[
        {
            "ticker": "TSLA",
            "name": "Tesla Inc",
            "exchange_short": "NASDAQ",
            "exchange_long": "NASDAQ Stock Exchange",
            "mic_code": "XNAS",
            "currency": "USD",
            "price": 1107.72,
            "day_high": 1109.44,
            "day_low": 1072.8,
            "day_open": 1078.33,
            "52_week_high": 1243.49,
            "52_week_low": 539.49,
            "market_cap": 1062627573760,
            "previous_close_price": 1064.45,
            "previous_close_price_time": "2022-01-11T15:59:56.000000",
            "day_change": 3.91,
            "volume": 417787,
            "is_extended_hours_price": false,
            "last_trade_time": "2022-01-12T14:30:09.000000"
        },
        {
            "ticker": "AAPL",
            "name": "Apple Inc",
            "exchange_short": "NASDAQ",
            "exchange_long": "NASDAQ Stock Exchange",
            "mic_code": "XNAS",
            "currency": "USD",
            "price": 175.74,
            "day_high": 177.15,
            "day_low": 174.87,
            "day_open": 176.39,
            "52_week_high": 182.94,
            "52_week_low": 116.21,
            "market_cap": 2825018146816,
            "previous_close_price": 174.93,
            "previous_close_price_time": "2022-01-11T15:59:58.000000",
            "day_change": 0.46,
            "volume": 416207,
            "is_extended_hours_price": false,
            "last_trade_time": "2022-01-12T14:30:05.000000"
        },
        {
            "ticker": "V",
            "name": "Visa Inc",
            "exchange_short": "NYSE",
            "exchange_long": "New York Stock Exchange",
            "mic_code": "XNYS",
            "currency": "USD",
            "price": 216.3,
            "day_high": 217.56,
            "day_low": 213.9,
            "day_open": 215.05,
            "52_week_high": 252.67,
            "52_week_low": 190.1,
            "market_cap": null,
            "previous_close_price": 214.3,
            "previous_close_price_time": "2022-01-11T15:59:57.000000",
            "day_change": 0.92,
            "volume": 190382,
            "is_extended_hours_price": false,
            "last_trade_time": "2022-01-12T14:29:52.000000"
        }
    ]
*/

//  seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz

/*const stocks = ["AAPL", "V"];

// Function to format the API string
const adjustAPIKey = function (stockArray) {
  const newString = stockArray.join(",");
  return newString;
};

// Formatted string ready to be used in the API call
const APIString = adjustAPIKey(stocks);

// Function to make an AJAX call and return an array of stock objects
export const getStockData = async function (shares) {
  try {
    // AJAX call to API requesting data
    const data = await fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=AAPL,MSFT,FB&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz`
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

// An array of stocks, one object for each share stock requested
export const stocksArray = getStockData(APIString);*/

export const testData = [
  {
    ticker: "TSLA",
    name: "Tesla Inc",
    exchange_short: "NASDAQ",
    exchange_long: "NASDAQ Stock Exchange",
    mic_code: "XNAS",
    currency: "USD",
    price: 1107.72,
    day_high: 1109.44,
    day_low: 1072.8,
    day_open: 1078.33,
    "52_week_high": 1243.49,
    "52_week_low": 539.49,
    market_cap: 1062627573760,
    previous_close_price: 1064.45,
    previous_close_price_time: "2022-01-11T15:59:56.000000",
    day_change: 3.91,
    volume: 417787,
    is_extended_hours_price: false,
    last_trade_time: "2022-01-12T14:30:09.000000",
  },
  {
    ticker: "AAPL",
    name: "Apple Inc",
    exchange_short: "NASDAQ",
    exchange_long: "NASDAQ Stock Exchange",
    mic_code: "XNAS",
    currency: "USD",
    price: 175.74,
    day_high: 177.15,
    day_low: 174.87,
    day_open: 176.39,
    "52_week_high": 182.94,
    "52_week_low": 116.21,
    market_cap: 2825018146816,
    previous_close_price: 174.93,
    previous_close_price_time: "2022-01-11T15:59:58.000000",
    day_change: 0.46,
    volume: 416207,
    is_extended_hours_price: false,
    last_trade_time: "2022-01-12T14:30:05.000000",
  },
  {
    ticker: "V",
    name: "Visa Inc",
    exchange_short: "NYSE",
    exchange_long: "New York Stock Exchange",
    mic_code: "XNYS",
    currency: "USD",
    price: 216.3,
    day_high: 217.56,
    day_low: 213.9,
    day_open: 215.05,
    "52_week_high": 252.67,
    "52_week_low": 190.1,
    market_cap: 452150000000,
    previous_close_price: 214.3,
    previous_close_price_time: "2022-01-11T15:59:57.000000",
    day_change: 0.92,
    volume: 190382,
    is_extended_hours_price: false,
    last_trade_time: "2022-01-12T14:29:52.000000",
  },
];

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
  constructor(
    accountName,
    fundsAvailable,
    fundsInvested,
    netLossGain,
    portValue
  ) {
    this.accountName = accountName;
    this.portfolio = [];
    this.fundsAvailable = fundsAvailable;
    this.fundsInvested = fundsInvested;
    this.netLossGain = netLossGain;
    this.portValue = portValue;
    this.currency = ["USD", "$"];
    this.movementHistory = [];
    this.tradeHistory = [];
  }
}

export const account1 = new Account("Chris Evans", 10000, 200, 75, 12750);

// The array elments for the "Account" class' portfolio array
class Investment {
  constructor(
    investmentShareName,
    investmentSharePrice,
    investmentTicker,
    totalNumShares,
    portPercentage,
    investmentInitValue,
    investmentCurValue,
    investmentGainLoss
  ) {
    this.investmentShareName = investmentShareName;
    this.investmentSharePrice = investmentSharePrice;
    this.investmentTicker = investmentTicker;
    this.totalNummShares = totalNumShares;
    this.portPercentage = portPercentage;
    this.investmentInitValue = investmentInitValue;
    this.investmentCurValue = investmentCurValue;
    this.investmentGainLoss = investmentGainLoss;
  }
}

// The array elements for the "Investments" class' trades array
class Trade {
  constructor(
    shareName,
    sharePrice,
    numShares,
    tradeValueInit,
    tradeValueCur,
    tradeGainLoss
  ) {
    this.shareName = shareName;
    this.sharePrice = sharePrice;
    this.numShares = numShares;
    this.tradeValueInit = tradeValueInit;
    this.tradeValueCur = tradeValueCur;
    this.tradeGainLoss = tradeGainLoss;
  }

  calcInitTradeValue() {
    const initTradeValue = this.sharePrice * this.numShares;
    return initTradeValue;
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

const check = checkFunds(2500, 250, 9);

// Function to workout funds used, when purchasing by units
export const calcFundsToBeUsed = function (fundCheck, unitInput, sharePrice) {
  if (fundCheck === "approved") {
    const numFunds = unitInput * sharePrice;
  } else {
    console.log("Purchase rejected: not enough funds!");
  }
};
export const testUnitsValue = calcFundsToBeUsed(check, 9, 250);

// Function to workout units bought, when purchasing by funds
export const calcSharesToBeBought = function (
  fundCheck,
  fundInput,
  sharePrice
) {
  if (fundCheck === "approved") {
    const numShares = fundInput / sharePrice;
  } else {
    console.log("Purchase3 rejected: add more funds!");
  }
};
export const testFundsValue = calcSharesToBeBought(check, 2250, 250);

// Selecting to buy by units

// Selecting to buy by funds

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
  portPercentage,
  initValue,
  curValue,
  gainLoss
) {
  const newInvestment = new Investment(
    shareName,
    sharePrice,
    shareTicker,
    numShares,
    portPercentage,
    initValue,
    curValue,
    gainLoss
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

    // If investment does not exist
    if (investmentType === false) {
      // Create a new array for this investment
      const newInvestmentArray = new Array(`${targetShareID}`);

      // Workout the initial value of the investment
      const initialValue = targetSharePrice * inputValue;

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
      const newInvestment = createInvestment(
        //modelObject.account1,
        targetShareName,
        targetSharePrice,
        targetShareID,
        inputValue,
        initialValue,
        2000,
        2200,
        0.25
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

      return;
    }

    if (investmentType === true) {
      // Create new investment object
      const existingInvestment = createInvestment(
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
      const targetInvestmentArray = account.portfolio.find(function (
        investment
      ) {
        return investment[0] === targetShareID;
      });

      // Push investment object to existing investment array
      targetInvestmentArray.push(existingInvestment);
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

// BOTTOM BAR STATISTICS LOGIC
//

// Funds available data
export const getFundsAvailable = function () {
  return account1.fundsAvailable;
};

// Funds invested data
export const getFundsInvested = function () {
  return account1.fundsInvested;
};

// Net loss gain data
export const getNetGainLoss = function () {
  const accountChangeValue = account1.netLossGain;

  return accountChangeValue;
};

// Total account value data
export const getCurrentValue = function () {
  const currentValue =
    account1.fundsAvailable + account1.fundsInvested + account1.netLossGain;

  return currentValue;
};
