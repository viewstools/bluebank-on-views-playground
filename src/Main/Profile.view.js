/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Account from './Account.view.logic';

const Profile = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Profile'}|`}
      className="views-block"
    >
      <span data-test-id={`Profile.Text|`} className="views-block">
        {props.id}
      </span>
      <span data-test-id={`Profile.Text:1|`} className="views-block">
        {props.givenName}
      </span>
      <span data-test-id={`Profile.Text:2|`} className="views-block">
        {props.familyName}
      </span>
      <span data-test-id={`Profile.Text:3|`} className="views-block">
        {props.mobilePhone}
      </span>
      <span data-test-id={`Profile.Text:4|`} className="views-block">
        {props.address1}
      </span>
      <span data-test-id={`Profile.Text:5|`} className="views-block">
        {props.town}
      </span>
      <span data-test-id={`Profile.Text:6|`} className="views-block">
        {props.postCode}
      </span>
      <span data-test-id={`Profile.Text:7|`} className="views-block">
        {props.county}
      </span>
      <span data-test-id={`Profile.Text:8|`} className="views-block">
        {props.country}
      </span>
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
  id: '',
  givenName: '',
  familyName: '',
  mobilePhone: '',
  address1: '',
  town: '',
  postCode: '',
  county: '',
  country: '',
};
export default Profile;
