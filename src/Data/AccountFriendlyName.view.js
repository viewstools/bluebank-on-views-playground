/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const AccountFriendlyName_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const AccountFriendlyName = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'AccountFriendlyName'}|`}
      className={`views-block ${AccountFriendlyName_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`AccountFriendlyName.DataFieldSmall|`}
        label="Account Name"
        value={props.accountFriendlyName}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

AccountFriendlyName.defaultProps = { accountFriendlyName: 'Main' };
export default AccountFriendlyName;
