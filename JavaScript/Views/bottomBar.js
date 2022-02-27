export const renderFundsAvailanble = function (availableFunds) {
  const fundsAvailable = document.querySelector("#funds-available");
  fundsAvailable.textContent = availableFunds;
  return;
};

export const renderFundsInvested = function (investedFunds) {
  const fundsInvested = document.querySelector("#funds-invested");
  fundsInvested.textContent = investedFunds;
  return;
};

export const renderCurrentValue = function (currentValue) {
  const curValue = document.querySelector("#current-value");
  curValue.textContent = currentValue;
  return;
};
