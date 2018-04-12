/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import '../Fonts/Montserrat-300.js';
import styled from 'react-emotion';

const ValueLarge1 = styled('div')(({ props }) => ({
  marginLeft: props.marginLeft,
}));
const Text = styled('span')(
  {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 24,
    fontWeight: 300,
  },
  ({ props }) => ({
    color: props.color,
  })
);

const ValueLarge = props => {
  return (
    <ValueLarge1
      data-test-id={`${props['data-test-id'] || 'ValueLarge'}|`}
      props={props}
      className="views-block"
    >
      <Text
        data-test-id={`ValueLarge.Text|`}
        props={props}
        className="views-block"
      >
        {props.value}
      </Text>
      {props.children}
    </ValueLarge1>
  );
};

ValueLarge.defaultProps = {
  marginLeft: 0,
  color: '#323232',
  value: 'Data',
};
export default ValueLarge;
