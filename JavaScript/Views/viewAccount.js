const accountNavigation = document.querySelector(".view-nav");
const mainViewContainer = document.querySelector(".view-container");
const navLeft = document.querySelector(".view-nav-left");
const navRight = document.querySelector(".view-nav-right");

// Reveal the navigation options for viewing account
export const renderAccountNavigation = function () {
  accountNavigation.classList.remove("hidden");
  navLeft.classList.remove("hidden");
  navRight.classList.remove("hidden");
};

// Hide the navigation options for viewing account
export const hideAccountNavigation = function () {
  accountNavigation.classList.add("hidden");
};

// Render the account movements history (deposits, withdrawals)
export const renderAccountMovements = function (movementHistoryArray) {
  // Loop over the array and render a movement card for each array element (which is an object)
  movementHistoryArray.forEach(function (movement) {
    mainViewContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="movement">
            <div class="movement-info">

            <div class="movement-date">
                <h3 class="heading-3">${movement.date}</h3>
            </div>

            <div class="movement-type">
                <h3 class="heading-3">${
                  movement.movement < 0 ? "WITHDRAWAL" : "DEPOSIT"
                }</h3>
            </div>

            <div class="movement-amount">
                <h3 class="heading-3">${
                  movement.movement < 0
                    ? `-$${Math.abs(movement.movement)}`
                    : `$${movement.movement}`
                }</h3>
            </div>
            </div>
        </div>
        `
    );
  });
};

// Render the account trades history (purchases, sales)
export const renderAccountTrades = function (tradesHistoryArray) {
  console.log(tradesHistoryArray);
  tradesHistoryArray.forEach(function (trade) {
    mainViewContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="trade">
            <div class="trade-info">

            <div class="trade-date">
                <h3 class="heading-3">${trade.date}</h3>
            </div>

            <div class="trade-name">
                <h3 class="heading-3">${trade.name}</h3>
            </div>  

            <div class="trade-type">
                <h3 class="heading-3">${trade.type}</h3>
            </div>

            <div class="trade-shares">
                <h3 class="heading-3">${trade.shares} share${
        trade.shares > 1 ? "s" : ""
      }</h3>
            </div>    

            <div class="trade-amount">
                <h3 class="heading-3">$${trade.value}</h3>
            </div>
            </div>
        </div>
            `
    );
  });
};

// Render empty account history view
export const renderNoHistory = function () {};

// Reset the view-containers content to nothing
export const clearViewWindow = function () {
  const currentContent = Array.from(mainViewContainer.childNodes);

  // Remove each child element from the array
  currentContent.forEach(function (content) {
    content.remove();
    return;
  });
};
