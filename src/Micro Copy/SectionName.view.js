/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import '../Fonts/Montserrat-300.js';
import styled from 'react-emotion';

const SectionName1 = styled('span')(
  {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    color: '#c5c5c5',
    fontWeight: 300,
    textTransform: 'uppercase',
  },
  ({ props }) => ({
    marginTop: props.marginTop,
  })
);

const SectionName = props => {
  return (
    <SectionName1
      data-test-id={`${props['data-test-id'] || 'SectionName'}|`}
      props={props}
      className="views-block"
    >
      Address
    </SectionName1>
  );
};

SectionName.defaultProps = { marginTop: 10 };
export default SectionName;
