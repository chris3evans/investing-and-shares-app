const navigation = document.querySelector(".details-navigation");
const popup = document.querySelector(".popup");
const backBtn = document.querySelector(".details-back-icon");
const overlay = document.querySelector(".overlay");

export const renderDepositPopup = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");

  const depositHtml = `
    <div class="deposit">
          <div class="deposit-container">
            <input
              type="number"
              class="deposit-input"
              placeholder="Currency will be in USD"
            />
            <button class="btn btn-dark deposit-btn">Add funds</button>
          </div>
        </div>
        `;
  navigation.insertAdjacentHTML("afterend", depositHtml);
  backBtn.classList.add("hidden");
};

export const renderDepositErrorMessage = function () {
  const depositErrorHtml = `
    <p class="main-text deposit-error-message">Please enter an amount greater than zero!</p>
    `;
  const depositContainer = document.querySelector(".deposit-container");

  if (depositContainer) {
    depositContainer.insertAdjacentHTML("beforeend", depositErrorHtml);
    return;
  } else {
    return;
  }
};

export const clearDepositPopup = function () {
  const depositContainer = document.querySelector(".deposit-container");
  const depositError = document.querySelector(".deposit-error-message");

  if (depositContainer) {
    depositContainer.remove();
    return;
  }
  if (depositContainer && depositError) {
    depositContainer.remove();
    depositError.remove();
    return;
  }
};
