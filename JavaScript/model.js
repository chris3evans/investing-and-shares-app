/*https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz*/

//seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz
// ["O", "ADM", "PG", "KO", "SPG"]

const stocks = ["AAPL"];

// Function to format the API string
const adjustAPIKey = function (stockArray) {
  const newString = stockArray.join(",");
  return newString;
};

// Function to make an AJAX call and return an array of stock objects
export const getStockData = async function (chosenStocks) {
  // AJAX call to API requesting data
  const data = await fetch(
    `https://api.stockdata.org/v1/data/quote?symbols=${chosenStocks}&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz`
  );

  // Object containing array of all requested stocks
  const dataObject = await data.json();

  // Array containing one object of data for each stock that was requested
  const dataArray = dataObject.data;
  return dataArray;
};

// Formatted string ready to be used in the API call
const APIString = adjustAPIKey(stocks);

// An array of stocks, one object for each share stock requested
export const stocksArray = getStockData(APIString).then(function (data) {
  console.log(data);
  return data;
});
