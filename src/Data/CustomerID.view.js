/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const CustomerID_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const CustomerID = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'CustomerID'}|`}
      className={`views-block ${CustomerID_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`CustomerID.DataFieldSmall|`}
        label="Customer ID"
        value={props.customerId}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

CustomerID.defaultProps = { customerId: 1000000000001 };
export default CustomerID;
