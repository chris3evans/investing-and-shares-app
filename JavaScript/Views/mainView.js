const stockContainer = document.querySelector(".view-container");

export const renderStockList = function (stockArray) {
  stockArray.forEach(function (stock) {
    stockContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="share" id="${stock.ticker}">
            <div class="share-info">

              <div class="share-name">
                <h3 class="heading-3">${stock.name}</h3>
              </div>

              <div class="share-ticker">
                <h3 class="heading-3">${stock.ticker}</h3>
              </div>

              <div class="share-price">
                <h3 class="heading-3">$${stock.price}</h3>
              </div>
            </div>

            <div class="share-view">
              <button class="btn btn-dark">View</button>
            </div>
          </div>`
    );
  });
};
