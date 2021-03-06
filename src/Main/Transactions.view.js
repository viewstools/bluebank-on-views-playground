/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Transaction from '../Cards/Transaction.view.js';

import { css } from 'react-emotion';

const Transactions_haye7rk = css({
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
});

const Transactions = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Transactions'}|`}
      className={`views-block ${Transactions_haye7rk}`}
    >
      {Array.isArray(props.from) &&
        props.from.map((item, index) => (
          <Transaction
            index={index}
            {...item}
            key={item.id || index}
            data-test-id={`Transactions.Transaction|`}
            className="views-block"
          />
        ))}
      {props.children}
    </div>
  );
};

export default Transactions;
