import { CRYPTOCURRENCIES } from "../configs";

function formatPrice(price = 0) {
  const formattedPrice = Math.round(Number(price) * 100) / 100;
  return `$${formattedPrice > 0 ? formattedPrice.toLocaleString() : price}`;
}

function extractValues(obj = [], prop = "") {
  return obj.map((item) => item[prop]);
}

function findByValue(obj = [], value = "", prop = "symbol") {
  return obj.find((item) => item[prop] === value);
}

function getSymbols() {
  return extractValues(CRYPTOCURRENCIES, "symbol");
}

export { formatPrice, extractValues, findByValue, getSymbols };
