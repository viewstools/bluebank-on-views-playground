/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const AccountBalance_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const AccountBalance = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'AccountBalance'}|`}
      className={`views-block ${AccountBalance_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`AccountBalance.DataFieldSmall|`}
        label="Balance"
        value={props.accountBalance}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

AccountBalance.defaultProps = { accountBalance: '2.000,00' };
export default AccountBalance;
