/*<div class="details-close">
            <svg class="details-close-icon">
              <use xlink:href="CSS/close-sprite.svg#icon-cross"></use>
            </svg>
          </div>*/
export const renderIndividualInvestments = function (
  individualArrayInvestments,
  targetID
) {
  const investmentContainerArray = Array.from(
    document.querySelectorAll(".investment-container")
  );

  const targetInvestmentContainer = investmentContainerArray.find(function (
    investmentContainer
  ) {
    return investmentContainer.id === targetID;
  });

  // Add or remove the reveal class based on the current state
  targetInvestmentContainer.classList.toggle("smooth-reveal");

  // Clear investment containers content
  const currentContent = Array.from(targetInvestmentContainer.childNodes);

  // Remove each child element from the array
  currentContent.forEach(function (content) {
    content.remove();
    return;
  });

  // If the class IS on the investment container, render it

  if (targetInvestmentContainer.classList.contains("smooth-reveal")) {
    individualArrayInvestments.forEach(function (investment) {
      targetInvestmentContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="individual-investment ${investment.investmentTicker}" id="${
          investment.investmentID
        }">
          <div class="individual-investment-date">
            <p class="main-text center-text">
              21/01/2022
            </p>
          </div>
          
          <div class="individual-investment-price">         
            <p class="main-text center-text">
              $${investment.investmentSharePrice.toFixed(2)}
            </p>
          </div>
          
          <div class="individual-investment-numshares">    
            <p class="main-text center-text">
              ${investment.totalNumShares.toFixed(2)}
            </p>
          </div>
          
          <div class="individual-investment-invested">
            <p class="main-text center-text">
              $${investment.investmentInitValue.toFixed(2)}
            </p>
          </div>

          <div class="individual-investment-sell">
            <svg class="individual-investment-icon">
              <use xlink:href="CSS/close-sprite.svg#icon-cross"></use>
            </svg>
          </div>
        </div>
        `
      );
    });
  }
};
