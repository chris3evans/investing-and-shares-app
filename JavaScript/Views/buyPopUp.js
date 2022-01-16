const btnClose = document.querySelector(".details-close");
const backBtn = document.querySelector(".details-back-icon");
const btnBuyText = document.querySelector("#btn-buy-text");
const navigation = document.querySelector(".details-navigation");

export const renderPurchasePopUp = function () {
  const purchaseHtml = `
        <div class="buy-container">
          <div class="buy-selector">
            <div class="buy-units units-selected">
              <p class="main-text cursor-pointer center-text">Units</p>
            </div>
            <div class="buy-funds">
              <p class="main-text cursor-pointer center-text">Funds</p>
            </div>

            <div class="buy-amount">
              <button class="square-btn" id="buy-less">-</button>
              <input type="number" class="buy-input" />
              <button class="square-btn" id="buy-more">+</button>
            </div>
          </div>

          <div class="buy-summary">
            <p class="main-text center-text">Buy X TSLA for $X</p>
          </div>
        </div>
    `;

  backBtn.classList.remove("hidden");
  navigation.insertAdjacentHTML("afterend", purchaseHtml);
  btnBuyText.textContent = "PURCHASE";
};

export const clearPurchase = function () {
  const purchaseContainer = document.querySelector(".buy-container");

  if (purchaseContainer) {
    purchaseContainer.remove();
  }
};
