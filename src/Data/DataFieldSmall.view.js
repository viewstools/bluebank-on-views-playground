/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Label from '../Micro Copy/Label.view.js';
import ValueSmall from './ValueSmall.view.js';

import '../Fonts/props.fontFamily-props.fontWeight.js';
import { css } from 'react-emotion';

const DataFieldSmall_h534q6r = css({
  alignItems: 'baseline',
  marginTop: 10,
});

const DataFieldSmall = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'DataFieldSmall'}|`}
      className={`views-block ${DataFieldSmall_h534q6r}`}
    >
      <Label
        data-test-id={`DataFieldSmall.Label|`}
        label={props.label}
        color={props.color}
        fontFamily={props.fontFamily}
        fontWeight={props.fontWeight}
        textTransform={props.textTransform}
        className="views-block"
      />
      <ValueSmall
        data-test-id={`DataFieldSmall.ValueSmall|`}
        color={props.color}
        value={props.value}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

DataFieldSmall.defaultProps = {
  label: 'Label',
  color: '#323232',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  textTransform: 'uppercase',
  value: 'Data',
};
export default DataFieldSmall;
