const backBtn = document.querySelector(".details-back-icon");
const btnBuyText = document.querySelector("#btn-buy-text");
const navigation = document.querySelector(".details-navigation");

export const renderPurchasePopUp = function (stockID, stockArray) {
  const targetStock = stockArray.find(function (stock) {
    return stock.ticker === stockID;
  });

  const purchaseHtml = `
        <div class="buy-container">
          <div class="buy-selector">

            <div class="buy-amount">
              <button class="square-btn" id="buy-less">-</button>
              <input type="number" class="buy-input" />
              <button class="square-btn" id="buy-more">+</button>
            </div>
          </div>

          <div class="buy-summary">
            <p class="main-text center-text summary-text"></p>
          </div>
        </div>

        <div class="details-btn btn-purchase" id="btn-purchase">
          <button class="btn btn-dark btn-purchase-text" id="btn-buy-text">Purchase</button>
        </div>  
    `;

  backBtn.classList.remove("hidden");
  navigation.insertAdjacentHTML("afterend", purchaseHtml);
};

export const clearPurchase = function () {
  const purchaseContainer = document.querySelector(".buy-container");
  const purchaseBtn = document.querySelector(".btn-purchase");

  if (purchaseContainer && purchaseBtn) {
    purchaseContainer.remove();
    purchaseBtn.remove();
  }
};

export const renderPurchaseSummary = function (quantity, stock, amount) {
  const purchaseSummary = document.querySelector(".summary-text");

  if (quantity === 0) {
    purchaseSummary.textContent = "";
  }

  purchaseSummary.textContent = `Buy ${quantity} ${stock} for $${amount.toFixed(
    2
  )}`;
};

export const renderPurchaseError = function (totalAmount, accountAmount) {
  const purchaseSummary = document.querySelector(".summary-text");

  purchaseSummary.textContent = `Oops, not enough funds! Deposit $${(
    totalAmount - accountAmount
  ).toFixed(2)} more to make stock purchase`;
};

export const renderMainPurchaseError = function () {
  const purchaseSummary = document.querySelector(".summary-text");

  purchaseSummary.classList.add("text-alert");
};
