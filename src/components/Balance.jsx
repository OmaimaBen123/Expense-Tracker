import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Extract amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculate total balance
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        ${total}
      </h1>
    </div>
  );
};

export default Balance;
