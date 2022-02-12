export const renderGroupInvestment = function (groupInvestmentsArray) {
  const portfolioContainer = document.querySelector(".portfolio");
  // Render all GROUP investments

  groupInvestmentsArray.forEach(function (groupInvestment) {
    portfolioContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="investment-group" id="${groupInvestment.objectID}">
            <div class="investment-group-name">
                <p class="main-text center-text">${groupInvestment.objectID}</p>
            </div>

            <div class="investment-group-price">
                <p class="main-text center-text">$${groupInvestment.objectAvgSharePrice}</p>
            </div>

            <div class="investment-group-numshares">
                <p class="main-text center-text">${groupInvestment.objectNumShares}</p>
            </div>

            <div class="investment-group-invested">
                <p class="main-text center-text">$${groupInvestment.objectInvested}</p>
            </div>

            <div class="investment-group-value">
                <p class="main-text center-text">$${groupInvestment.objectValue}</p>
            </div>

            <div class="investment-group-change">
                <p class="main-text center-text">$${groupInvestment.objectChange}</p>
            </div>

            <div class="investment-group-button">
                <svg class="investment-group-icon   chevron-down">
                    <use xlink:href="CSS/chevrons.svg#icon-chevron-small-down">
                    </use>
                </svg>

                <svg class="investment-group-icon chevron-up icon-contract">
                    <use xlink:href="CSS/chevrons.svg#icon-chevron-small-up">
                    </use>
                </svg>
            </div>

            <div class="investment-container" id=${groupInvestment.objectID}>
            </div>
        </div>
        `
    );
  });
};

export const changeChevron = function (target) {
  const [chevronDown, chevronUp] = Array.from(target.children);

  chevronDown.classList.toggle("icon-contract");
  chevronUp.classList.toggle("icon-contract");
};
