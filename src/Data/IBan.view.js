/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const IBan_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const IBan = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'IBan'}|`}
      className={`views-block ${IBan_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`IBan.DataFieldSmall|`}
        label="IBan"
        value={props.iBan}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

IBan.defaultProps = { iBan: 'ULSBIE1111000011110000' };
export default IBan;
