import * as modelObject from "./model.js";

import * as mainViewObject from "./Views/mainView.js";

const modelStockData = await modelObject.getStockData();
const stockData = modelStockData.json();
console.log(stockData);
console.log(modelStockData);
console.log(modelObject);
