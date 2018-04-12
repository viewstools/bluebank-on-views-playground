/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const AccountNumber_h11nrj5d = css({
  flexDirection: 'row',
  alignItems: 'baseline',
});

const AccountNumber = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'AccountNumber'}|`}
      className={`views-block ${AccountNumber_h11nrj5d}`}
    >
      <DataFieldSmall
        data-test-id={`AccountNumber.DataFieldSmall|`}
        label="Account Number"
        value={props.accountNumber}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

AccountNumber.defaultProps = { accountNumber: 555500005555 };
export default AccountNumber;
