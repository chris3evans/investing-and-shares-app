const accountNavigation = document.querySelector(".view-nav");
const mainViewContainer = document.querySelector(".view-container");

// Reveal the navigation options for viewing account
export const renderAccountNavigation = function () {
  accountNavigation.classList.remove("hidden");
};

// Hide the navigation options for viewing account
export const hideAccountNavigation = function () {
  accountNavigation.classList.add("hidden");
};

// Render the account movements history (deposits, withdrawals)
export const renderAccountMovements = function (movementHistoryArray) {
  // Otherwise loop over the array and render a movement card for each array element
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
export const renderAccountTrades = function () {};

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

// MOVEMENT HISTORY CARD
//A MOVEMENT HISTORY
/*<div class="movement">
    <div class="movement-info">

      <div class="movement-date">
        <h3 class="heading-3">12/02/2021</h3>
      </div>

      <div class="movement-type">
        <h3 class="heading-3">DEPOSIT</h3>
      </div>

      <div class="movement-amount">
        <h3 class="heading-3">$200</h3>
      </div>
    </div>
  </div>*/

// TRADE HISTORY CARD
/*<div class="trade">
    <div class="trade-info">

      <div class="trade-date">
        <h3 class="heading-3">18/02/2021</h3>
      </div>

      <div class="trade-type">
        <h3 class="heading-3">SOLD</h3>
      </div>

      <div class="trade-amount">
        <h3 class="heading-3">$180</h3>
      </div>
    </div>
  </div>*/
