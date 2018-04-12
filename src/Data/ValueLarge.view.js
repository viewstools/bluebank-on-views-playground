/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import '../Fonts/Montserrat-200.js';
import styled from 'react-emotion';

const ValueLarge1 = styled('div')(({ props }) => ({
  marginLeft: props.marginLeft,
}));
const Text = styled('span')(
  {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 38,
    fontWeight: 200,
  },
  ({ props }) => ({
    color: props.color,
    marginTop: props.marginTop,
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
  marginTop: 5,
  value: 'Summer',
};
export default ValueLarge;
