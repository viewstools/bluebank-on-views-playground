/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import styled from 'react-emotion';

const LocationSvg1 = styled('svg')(({ props }) => ({
  alignSelf: props.alignSelf,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  width: props.width,
  height: props.height,
}));
const SvgPath = styled('path')(({ props }) => ({
  fill: props.fill,
}));

const LocationSvg = props => {
  return (
    <LocationSvg1
      data-test-id={`${props['data-test-id'] || 'LocationSvg'}|`}
      viewBox="0 0 78 113"
      props={props}
      className="views-block"
    >
      <SvgPath
        data-test-id={`LocationSvg.SvgPath|`}
        d="M39 112.484C13 77.854 0 53.36 0 39 0 17.46 17.46 0 39 0s39 17.46 39 39c0 14.36-13 38.854-39 73.484zM40 60c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
        fillRule="evenodd"
        props={props}
        className="views-block"
      />
      {props.children}
    </LocationSvg1>
  );
};

LocationSvg.defaultProps = {
  alignSelf: 'auto',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  width: 78,
  height: 113,
  fill: '#D8D8D8',
};
export default LocationSvg;
