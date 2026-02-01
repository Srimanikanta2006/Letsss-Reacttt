import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json()) //string to JSON
      .then((res) => setData(res[currency])); // select only the currency list from the json.
  }, [currency]);
  // return data, not a good way to debug(industry level), but for learning purpose it's fine.
  console.log(data);
  return data; // what data looks like: {usd: 1, inr: 82.34, eur: 0.92, ...
}

export default useCurrencyInfo;
