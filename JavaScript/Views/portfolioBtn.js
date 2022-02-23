const mainViewContainer = document.querySelector(".view-container");
const accountNavigation = document.querySelector(".view-nav");
const nullNavigation = document.querySelector(".view-nav-right");

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

export const renderPortfolioNavigation = function () {
  accountNavigation.classList.remove("hidden");
  nullNavigation.classList.add("hidden");
};
