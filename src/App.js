import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "https://api.currencyapi.com/v3/latest?apikey=g3qpAqdIhrF93uR6ZPBZX0vmRyoXbzKd2VpkVpN9&currencies=HUF&base_currency=EUR";

function App() {
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1164);

  console.log(exchangeRate);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.data.HUF.value.toFixed.toFixed(1));
      });
  }, []);

  let toAmount = (amount * exchangeRate).toFixed(1);
  function onChangeAmount(e) {
    setAmount(e.target.value);
  }

  let dates = new Date().toLocaleString();

  return (
    <>
      <h1>{`${dates}`}</h1>

      <h3>Aktuális árfolyam: {exchangeRate}</h3>

      {/* onChangeAmount-ot átadom a komponensnek, az fogadja, majd beállítja a komponensben az amount-ot, majd visszaadja, és a itt fogadja az App.js amount-ot */}
      <div className="hufinput">
        <p>EUR</p>
        <CurrencyRow onChangeAmount={onChangeAmount} amount={amount} />
      </div>

      <div>
        <p>HUF</p>
        <CurrencyRow amount={toAmount} />
      </div>
    </>
  );
}

export default App;
