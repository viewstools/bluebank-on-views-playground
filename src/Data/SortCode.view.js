/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const SortCode_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const SortCode = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'SortCode'}|`}
      className={`views-block ${SortCode_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`SortCode.DataFieldSmall|`}
        label="Sort Code"
        value={props.sortCode}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

SortCode.defaultProps = { sortCode: 985130 };
export default SortCode;
