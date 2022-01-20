const stockPopUp = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const navigation = document.querySelector(".details-navigation");
const backBtn = document.querySelector(".details-back-icon");
const btnBuyText = document.querySelector("#btn-buy-text");

// RENDER INITIAL VIEW MORE WINDOW
//

export const hideViewMore = function () {
  stockPopUp.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const showViewMore = function () {
  stockPopUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

export const renderStockPopUp = function (targetShareID, sharesArray) {
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

  const viewMoreHtml = `
  <div class="details-container">
    <div class="details-logo">
      <img
        class="details-logo-file"
        src="External Content/AppleLogo.png"
      />
    </div>

    <div class="details-info details-name">
      <p class="main-text">Name:</p>
      <p class="main-text" id="stockName">${targetStock.name}</p>
    </div>

    <div class="details-info details-ticker">
      <p class="main-text">Ticker:</p>
      <p class="main-text" id="tickerSymbol">${targetStock.ticker}</p>
    </div>

    <div class="details-info details-price">
      <p class="main-text">Share Price:</p>
      <p class="main-text" id="sharePrice">$${targetStock.price}</p>
    </div>

    <div class="details-info details-day-low">
      <p class="main-text">Day Low:</p>
      <p class="main-text" id="dayLow">$${targetStock.day_low}</p>
    </div>

    <div class="details-info details-day-high">
      <p class="main-text">Day High:</p>
      <p class="main-text" id="dayHigh">$${targetStock.day_high}
      </p>
    </div>

    <div class="details-info details-market">
      <p class="main-text">Market:</p>
      <p class="main-text" id="market">${targetStock.exchange_short}
      </p>
    </div>

    <div class="details-info details-marketcap">
      <p class="main-text">Market Cap:</p>
      <p class="main-text" id="marketCap">${marketCap(
        targetStock.market_cap
      )}</p>
    </div>

    <div class="details-info details-52low">
      <p class="main-text">52 Week-Low:</p>
      <p class="main-text" id="yearLow">$116.22</p>
    </div>

    <div class="details-info details-52high">
      <p class="main-text">52 Week-High:</p>
      <p class="main-text" id="yearHigh">$182.71</p>
    </div>
  </div>

  <div class="details-btn btn-buy" id="btn-buy">
          <button class="btn btn-dark btn-buy-text" id="btn-buy-text">Buy shares</button>
  </div>
`;

  backBtn.classList.add("hidden");
  navigation.insertAdjacentHTML("afterend", viewMoreHtml);
  //popUp52Low.textContent === targetStock.52_week_low;
  //popUp52High.textContent === targetStock.52_week_high;*/
};

// REMOVE CONTENT TO MAKE SPACE FOR "BUY" POP UP
//

export const clearViewMore = function () {
  const detailsContainer = document.querySelector(".details-container");
  const buyBtn = document.querySelector(".btn-buy");

  if (detailsContainer && buyBtn) {
    detailsContainer.remove();
    buyBtn.remove();
  }
};
