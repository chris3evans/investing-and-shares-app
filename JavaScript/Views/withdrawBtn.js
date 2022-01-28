const navigation = document.querySelector(".details-navigation");
const popup = document.querySelector(".popup");
const backBtn = document.querySelector(".details-back-icon");
const overlay = document.querySelector(".overlay");

export const renderWithdrawPopUp = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");

  const withdrawHtml = `
    <div class="withdraw">
          <div class="withdraw-container">
            <input
              type="number"
              class="withdraw-input"
              placeholder="Currency will be in USD"
            />
            <button class="btn btn-dark withdraw-btn">Withdraw funds</button>
          </div>
        </div>
        `;

  navigation.insertAdjacentHTML("afterend", withdrawHtml);
  backBtn.classList.add("hidden");
};

export const renderWithdrawErrorMessage = function (message) {
  const withdrawErrorHtml = `
    <p class="main-text deposit-error-message">${message}</p>
    `;
  const withdrawContainer = document.querySelector(".withdraw-container");

  if (withdrawContainer) {
    withdrawContainer.insertAdjacentHTML("beforeend", withdrawErrorHtml);
    return;
  } else {
    return;
  }
};

export const clearWithdrawPopUp = function () {
  const withdrawContainer = document.querySelector(".withdraw-container");
  const withdrawError = document.querySelector(".withdraw-error-message");

  if (withdrawContainer) {
    withdrawContainer.remove();
    return;
  }
  if (withdrawContainer && withdrawError) {
    withdrawContainer.remove();
    withdrawError.remove();
    return;
  }
};
