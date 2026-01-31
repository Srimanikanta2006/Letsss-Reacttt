import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json()) //string to JSON
      .then((res) => setData(res[currency]));
  }, [currency]);
  // return data, wrong approach coz it doesnt work;
  console.log(data);
  return data;
}

export default useCurrencyInfo;
