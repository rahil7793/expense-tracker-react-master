import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const checkAmount = total => {
    return total > 0 ? true: false }

  return (
    <>
      <h4>Your Balance</h4>
      {(checkAmount) ? 
      <h1 className="money plus">${numberWithCommas(total)}</h1> : 
      <h1 className="money minus">-${numberWithCommas(total*-1)}</h1>}
    </>
  )
}
