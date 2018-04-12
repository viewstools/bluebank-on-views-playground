/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

const Transaction = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Transaction'}|`}
      className="views-block"
    >
      <span data-test-id={`Transaction.Text|`} className="views-block">
        {props.id}
      </span>
      <span data-test-id={`Transaction.Text:1|`} className="views-block">
        {props.accountBalance}
      </span>
      <span data-test-id={`Transaction.Text:2|`} className="views-block">
        {props.transactionAmount}
      </span>
      <span data-test-id={`Transaction.Text:3|`} className="views-block">
        {props.transactionCurrency}
      </span>
      <span data-test-id={`Transaction.Text:4|`} className="views-block">
        {props.transactionDateTime}
      </span>
      <span data-test-id={`Transaction.Text:5|`} className="views-block">
        {props.transactionDescription}
      </span>
      <span data-test-id={`Transaction.Text:6|`} className="views-block">
        {props.transactionType}
      </span>
      {props.children}
    </div>
  );
};

Transaction.defaultProps = {
  id: '',
  accountBalance: '',
  transactionAmount: '',
  transactionCurrency: '',
  transactionDateTime: '',
  transactionDescription: '',
  transactionType: '',
};
export default Transaction;
