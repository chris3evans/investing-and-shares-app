const navigation = document.querySelector(".details-navigation");
const backBtn = document.querySelector(".details-back-icon");

export const renderSellPopUp = function () {
  const sellPopUpHtml = `
  <div class="sell">
    <div class="sell-container">
        <div class="sell-text">
            <h3 class="heading-3">Close this position?</h3>
        </div>

        <div class="sell-buttons">
            <button class="btn btn-dark" id="btn-confirm-sell">Yes</button>

            <button class="btn btn-light" id="btn-deny-sell">No</button>
        </div>
    </div>
  </div>
  `;

  navigation.insertAdjacentHTML("afterend", sellPopUpHtml);
  backBtn.classList.add("hidden");
};

export const clearSellPopUp = function () {
  const sellContainer = document.querySelector(".sell");

  if (sellContainer) {
    sellContainer.remove();
  }
};
