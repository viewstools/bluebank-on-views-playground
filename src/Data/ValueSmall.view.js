/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import '../Fonts/Montserrat-400.js';
import styled from 'react-emotion';

const Text = styled('span')(
  {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    fontWeight: 400,
  },
  ({ props }) => ({
    color: props.color,
    marginLeft: props.marginLeft,
    marginTop: props.marginTop,
  })
);

const ValueSmall = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'ValueSmall'}|`}
      className="views-block"
    >
      <Text
        data-test-id={`ValueSmall.Text|`}
        props={props}
        className="views-block"
      >
        {props.value}
      </Text>
      {props.children}
    </div>
  );
};

ValueSmall.defaultProps = {
  color: '#323232',
  value: 'Data',
  marginLeft: 10,
  marginTop: 5,
};
export default ValueSmall;
