/*https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz*/

//seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz
// ["O", "ADM", "PG", "KO", "SPG"]

/*MOCK DATA
[
        {
            "ticker": "TSLA",
            "name": "Tesla Inc",
            "exchange_short": "NASDAQ",
            "exchange_long": "NASDAQ Stock Exchange",
            "mic_code": "XNAS",
            "currency": "USD",
            "price": 1107.72,
            "day_high": 1109.44,
            "day_low": 1072.8,
            "day_open": 1078.33,
            "52_week_high": 1243.49,
            "52_week_low": 539.49,
            "market_cap": 1062627573760,
            "previous_close_price": 1064.45,
            "previous_close_price_time": "2022-01-11T15:59:56.000000",
            "day_change": 3.91,
            "volume": 417787,
            "is_extended_hours_price": false,
            "last_trade_time": "2022-01-12T14:30:09.000000"
        },
        {
            "ticker": "AAPL",
            "name": "Apple Inc",
            "exchange_short": "NASDAQ",
            "exchange_long": "NASDAQ Stock Exchange",
            "mic_code": "XNAS",
            "currency": "USD",
            "price": 175.74,
            "day_high": 177.15,
            "day_low": 174.87,
            "day_open": 176.39,
            "52_week_high": 182.94,
            "52_week_low": 116.21,
            "market_cap": 2825018146816,
            "previous_close_price": 174.93,
            "previous_close_price_time": "2022-01-11T15:59:58.000000",
            "day_change": 0.46,
            "volume": 416207,
            "is_extended_hours_price": false,
            "last_trade_time": "2022-01-12T14:30:05.000000"
        },
        {
            "ticker": "V",
            "name": "Visa Inc",
            "exchange_short": "NYSE",
            "exchange_long": "New York Stock Exchange",
            "mic_code": "XNYS",
            "currency": "USD",
            "price": 216.3,
            "day_high": 217.56,
            "day_low": 213.9,
            "day_open": 215.05,
            "52_week_high": 252.67,
            "52_week_low": 190.1,
            "market_cap": null,
            "previous_close_price": 214.3,
            "previous_close_price_time": "2022-01-11T15:59:57.000000",
            "day_change": 0.92,
            "volume": 190382,
            "is_extended_hours_price": false,
            "last_trade_time": "2022-01-12T14:29:52.000000"
        }
    ]
*/

//  seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz

/*const stocks = ["AAPL", "V"];

// Function to format the API string
const adjustAPIKey = function (stockArray) {
  const newString = stockArray.join(",");
  return newString;
};

// Formatted string ready to be used in the API call
const APIString = adjustAPIKey(stocks);

// Function to make an AJAX call and return an array of stock objects
export const getStockData = async function (shares) {
  try {
    // AJAX call to API requesting data
    const data = await fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=AAPL,MSFT,FB&api_token=seOqbX0SsFtFXcPVRPL28UfKEzVFF5z8NqGpLuSz`
    );
    // Object containing array of all requested stocks
    const dataObject = await data.json();

    // Array containing one object of data for each stock that was requested
    const dataArray = dataObject.data;
    return dataArray;
  } catch (error) {
    console.error(error);
  }
};

// An array of stocks, one object for each share stock requested
export const stocksArray = getStockData(APIString);*/

export const testData = [
  {
    ticker: "TSLA",
    name: "Tesla Inc",
    exchange_short: "NASDAQ",
    exchange_long: "NASDAQ Stock Exchange",
    mic_code: "XNAS",
    currency: "USD",
    price: 1107.72,
    day_high: 1109.44,
    day_low: 1072.8,
    day_open: 1078.33,
    "52_week_high": 1243.49,
    "52_week_low": 539.49,
    market_cap: 1062627573760,
    previous_close_price: 1064.45,
    previous_close_price_time: "2022-01-11T15:59:56.000000",
    day_change: 3.91,
    volume: 417787,
    is_extended_hours_price: false,
    last_trade_time: "2022-01-12T14:30:09.000000",
  },
  {
    ticker: "AAPL",
    name: "Apple Inc",
    exchange_short: "NASDAQ",
    exchange_long: "NASDAQ Stock Exchange",
    mic_code: "XNAS",
    currency: "USD",
    price: 175.74,
    day_high: 177.15,
    day_low: 174.87,
    day_open: 176.39,
    "52_week_high": 182.94,
    "52_week_low": 116.21,
    market_cap: 2825018146816,
    previous_close_price: 174.93,
    previous_close_price_time: "2022-01-11T15:59:58.000000",
    day_change: 0.46,
    volume: 416207,
    is_extended_hours_price: false,
    last_trade_time: "2022-01-12T14:30:05.000000",
  },
  {
    ticker: "V",
    name: "Visa Inc",
    exchange_short: "NYSE",
    exchange_long: "New York Stock Exchange",
    mic_code: "XNYS",
    currency: "USD",
    price: 216.3,
    day_high: 217.56,
    day_low: 213.9,
    day_open: 215.05,
    "52_week_high": 252.67,
    "52_week_low": 190.1,
    market_cap: 452150000000,
    previous_close_price: 214.3,
    previous_close_price_time: "2022-01-11T15:59:57.000000",
    day_change: 0.92,
    volume: 190382,
    is_extended_hours_price: false,
    last_trade_time: "2022-01-12T14:29:52.000000",
  },
];

// 452,150,000,000
