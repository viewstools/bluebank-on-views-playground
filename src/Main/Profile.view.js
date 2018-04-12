/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Account from './Account.view.logic';
import ValueLarge from '../Data/ValueLarge.view.js';
import ValueSmall from '../Data/ValueSmall.view.js';

import { css } from 'react-emotion';

const Vertical_h1kvxg5x = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  backgroundColor: '#ffaa00',
  paddingTop: 100,
  paddingLeft: 30,
  paddingBottom: 30,
});
const Vertical_h17rqncu = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  paddingTop: 15,
});

const Profile = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Profile'}|`}
      className="views-block"
    >
      <div
        data-test-id={`Profile.Vertical|`}
        className={`views-block ${Vertical_h1kvxg5x}`}
      >
        <ValueLarge
          data-test-id={`Profile.ValueLarge|`}
          value={props.givenName}
          marginLeft={0}
          color="#ffffff"
          className="views-block"
        />
        <ValueLarge
          data-test-id={`Profile.ValueLarge:1|`}
          value={props.familyName}
          marginTop={0}
          color="#ffffff"
          className="views-block"
        />
        <div
          data-test-id={`Profile.Vertical:1|`}
          className={`views-block ${Vertical_h17rqncu}`}
        >
          <ValueSmall
            data-test-id={`Profile.ValueSmall|`}
            value={props.mobilePhone}
            color="white"
            marginTop={20}
            className="views-block"
          />
          <ValueSmall
            data-test-id={`Profile.ValueSmall:1|`}
            value={props.address1}
            marginTop={20}
            color="white"
            className="views-block"
          />
          <ValueSmall
            data-test-id={`Profile.ValueSmall:2|`}
            value={props.town}
            color="white"
            className="views-block"
          />
          <ValueSmall
            data-test-id={`Profile.ValueSmall:3|`}
            value={props.county}
            color="white"
            className="views-block"
          />
          <ValueSmall
            data-test-id={`Profile.ValueSmall:4|`}
            value={props.postCode}
            color="white"
            className="views-block"
          />
          <ValueSmall
            data-test-id={`Profile.ValueSmall:5|`}
            value={props.country}
            color="white"
            className="views-block"
          />
        </div>
      </div>
      <Account
        data-test-id={`Profile.Account|`}
        customerId={props.id}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

Profile.defaultProps = {
  givenName: 'Summer',
  familyName: 'Winters',
  mobilePhone: '+353 555 000 555',
  address1: '1 Views Tools Rd',
  town: 'Dublin',
  county: 'Co. Dublin',
  postCode: 'VT101',
  country: 'Ireland',
  id: 'id',
};
export default Profile;
