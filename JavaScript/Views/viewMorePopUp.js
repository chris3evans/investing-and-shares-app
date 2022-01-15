const stockPopUp = document.querySelector(".popup");
const popUpName = document.querySelector("#stockName");
const popUpTicker = document.querySelector("#tickerSymbol");
const popUpPrice = document.querySelector("#sharePrice");
const popUpDayLow = document.querySelector("#dayLow");
const popUpDayHigh = document.querySelector("#dayHigh");
const popUpMarket = document.querySelector("#market");
const popUpMarketCap = document.querySelector("#marketCap");
const popUp52Low = document.querySelector("#yearLow");
const popUp52High = document.querySelector("#yearHigh");

export const renderStockPopUp = function (targetShareID, sharesArray) {
  // Reveal or hide pop up
  if (stockPopUp.classList.contains("hidden")) {
    stockPopUp.classList.remove("hidden");
  } else {
    stockPopUp.classList.add("hidden");
  }

  // Finding the correct data and rendering it

  // Matching target stock with it's data object
  const targetStock = sharesArray.find(function (share) {
    return share.ticker === targetShareID;
  });
  // Rendering that stock's object in the popup window

  const marketCap = function (marketCap) {
    let marketCapString = "";
    // If market cap is 1 trillion or more
    if (marketCap > 999999999999) {
      marketCapString = `$${(marketCap / 1000000000000).toFixed(2)}T`;
      return marketCapString;
    }
    // under 1 trillion = 999,999,999,999
    // If market cap is under 1 trillion
    if (marketCap < 999999999999) {
      marketCapString = `$${marketCap / 1000000000}B`;
      return marketCapString;
    }
  };

  popUpName.textContent = targetStock.name;
  popUpTicker.textContent = targetStock.ticker;
  popUpPrice.textContent = `$${targetStock.price}`;
  popUpMarket.textContent = targetStock.exchange_short;
  //popUpMarketCap.textContent = targetStock.market_cap;
  popUpMarketCap.textContent = marketCap(targetStock.market_cap);
  popUpDayLow.textContent = `$${targetStock.day_low}`;
  popUpDayHigh.textContent = `$${targetStock.day_high}`;
  //popUp52Low.textContent === targetStock.52_week_low;
  //popUp52High.textContent === targetStock.52_week_high;
};
