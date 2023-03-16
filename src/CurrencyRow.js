import React from "react";

export default function CurrencyRow({ amount, onChangeAmount }) {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
}
