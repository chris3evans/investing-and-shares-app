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

export const renderNetGainLoss = function (change) {
  const netGainLoss = document.querySelector("#net-gain-loss");
  netGainLoss.textContent = change;

  if (change > 0) {
    netGainLoss.style.color = "green";
  }
  if (change < 0) {
    netGainLoss.style.color = "red";
  }

  return;
};

export const renderCurrentValue = function (currentValue) {
  const curValue = document.querySelector("#current-value");
  curValue.textContent = currentValue;
  return;
};
