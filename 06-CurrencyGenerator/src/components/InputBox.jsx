import React, { useId } from "react";

function InputBox({
  label, //from or to?
  amount, //value of amount input
  onAmountChange, //callback when amount changes
  onCurrencyChange, //callback when currency changes
  currencyOptions = [], //list of currency options
  selectCurrency = "usd", //selected currency
  amountDisable = false, //disable amount input
  currentDisable = false, //disable currency select
  className = "", //additional classes
}) {
  const amountInputId = useId(); //to generate unique ids for accessibility
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value)); //check if it exists.
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currentDisable}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {/* key used during loops, for performance. */}
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
