/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import DataFieldSmall from './DataFieldSmall.view.js';

import { css } from 'react-emotion';

const Id_h2mqv89 = css({
  flexDirection: 'row',
  alignItems: 'baseline',
  minHeight: 20,
});

const Id = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Id'}|`}
      className={`views-block ${Id_h2mqv89}`}
    >
      <DataFieldSmall
        data-test-id={`Id.DataFieldSmall|`}
        label="ID"
        value={props.id}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

Id.defaultProps = { id: 10000000001 };
export default Id;
