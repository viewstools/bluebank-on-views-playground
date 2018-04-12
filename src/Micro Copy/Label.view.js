/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import '../Fonts/props.fontFamily-props.fontWeight.js';
import styled from 'react-emotion';

const Text = styled('span')(
  {
    fontSize: 12,
    marginTop: 10,
  },
  ({ props }) => ({
    color: props.color,
    fontFamily: props.fontFamily,
    fontWeight: props.fontWeight,
    textTransform: props.textTransform,
  })
);

const Label = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Label'}|`}
      className="views-block"
    >
      <Text data-test-id={`Label.Text|`} props={props} className="views-block">
        {props.label}
      </Text>
      {props.children}
    </div>
  );
};

Label.defaultProps = {
  color: '#323232',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  label: 'Label',
  textTransform: 'uppercase',
};
export default Label;
