/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const AccountCurrency_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const AccountCurrency = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'AccountCurrency'}|`}
      className={`views-block ${AccountCurrency_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`AccountCurrency.DataFieldSmall|`}
        label="Currency"
        value={props.accountCurrency}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

AccountCurrency.defaultProps = { accountCurrency: 'Euro' };
export default AccountCurrency;
