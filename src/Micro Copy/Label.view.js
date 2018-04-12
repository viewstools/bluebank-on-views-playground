/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import '../Fonts/props.fontFamily-props.fontWeight.js';
import styled from 'react-emotion';

const Label1 = styled('div')(({ props }) => ({
  width: props.widthLabel,
}));
const Text = styled('span')(({ props }) => ({
  color: props.color,
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textTransform: props.textTransform,
}));

const Label = props => {
  return (
    <Label1
      data-test-id={`${props['data-test-id'] || 'Label'}|`}
      props={props}
      className="views-block"
    >
      <Text data-test-id={`Label.Text|`} props={props} className="views-block">
        {props.label}
      </Text>
      {props.children}
    </Label1>
  );
};

Label.defaultProps = {
  widthLabel: 120,
  color: '#323232',
  fontFamily: 'Montserrat',
  fontSize: 10,
  fontWeight: 400,
  label: 'Label',
  textTransform: 'uppercase',
};
export default Label;
