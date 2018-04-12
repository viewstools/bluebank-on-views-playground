/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import { css } from 'react-emotion';

const Transaction_h11zo8f0 = css({
  backgroundColor: 'blue',
  marginTop: 30,
});

const Transaction = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Transaction'}|`}
      className={`views-block ${Transaction_h11zo8f0}`}
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
  id: 100000000001,
  accountBalance: '2.000,00',
  transactionAmount: '1.000,00',
  transactionCurrency: 'Euro',
  transactionDateTime: '2017-06-18T09:00:00.000Z',
  transactionDescription: 'Rent 04.2018',
  transactionType: 'Urgent (XFR)',
};
export default Transaction;
