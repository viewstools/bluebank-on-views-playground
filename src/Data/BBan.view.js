/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const BBan_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const BBan = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'BBan'}|`}
      className={`views-block ${BBan_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`BBan.DataFieldSmall|`}
        label="BBan"
        value={props.bBan}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

BBan.defaultProps = { bBan: '5390 0754 7034' };
export default BBan;
