/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const AccountType_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const AccountType = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'AccountType'}|`}
      className={`views-block ${AccountType_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`AccountType.DataFieldSmall|`}
        label="Account Type"
        value={props.accountType}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

AccountType.defaultProps = { accountType: 'Savings' };
export default AccountType;
