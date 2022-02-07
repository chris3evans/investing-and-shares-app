const mainViewContainer = document.querySelector(".view-container");

export const renderPortfolioView = function () {
  // Render portfolio container and headings
  const portfolioHtml = `
    <div class="portfolio">
        <div class="portfolio-headings">
            <div class="portfolio-headings-name">
                <h4 class="heading-4 center-text">Share:</h4>
            </div>

            <div class="portfolio-headings-price">
                <h4 class="heading-4 center-text">Avg Price:</h4>
            </div>

            <div class="portfolio-headings-numshares">
                <h4 class="heading-4 center-text">No. Shares:</h4>
            </div>

            <div class="portfolio-headings-invested">
                <h4 class="heading-4 center-text">Invested:</h4>
            </div>

            <div class="portfolio-headings-value">
                <h4 class="heading-4 center-text">Value:</h4>
            </div>

            <div class="portfolio-headings-change">
                <h4 class="heading-4 center-text">Change:</h4>
            </div>

            <div class="portfolio-headings-blank">
                <svg class="portfolio-headings-icon">
                    <use xlink:href="CSS/chevrons.svg#icon-chevron-small-down"></use>
                </svg>
            </div>
        </div>
    </div>
  `;

  mainViewContainer.insertAdjacentHTML("beforeend", portfolioHtml);
};

export const renderGroupInvestment = function (groupInvestmentsArray) {
  console.log(groupInvestmentsArray);
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
            <svg class="investment-group-icon">
                <use xlink:href="CSS/chevrons.svg#icon-chevron-small-down">
                </use>
            </svg>
        </div>
    </div>
        `
    );
  });
};
