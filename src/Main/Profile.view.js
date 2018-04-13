/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Account from './Account.view.logic';
import Label from '../Micro Copy/Label.view.js';
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
const Horizontal_h1qq1i2q = css({ flexDirection: 'row' });
const Horizontal_hhmimpn = css({
  flexDirection: 'row',
  flexWrap: 'wrap',
  flexShrink: 1,
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
        {!props.fetching ? (
          <div
            data-test-id={`Profile.Horizontal|`}
            className={`views-block ${Horizontal_h1qq1i2q}`}
          >
            {props.error ? (
              <div
                data-test-id={`Profile.Horizontal:1|`}
                className={`views-block ${Horizontal_hhmimpn}`}
              >
                <Label
                  data-test-id={`Profile.Label|`}
                  color="#323232"
                  label="Your authorisation token isn't valid."
                  textTransform="none"
                  className="views-block"
                />
                <Label
                  data-test-id={`Profile.Label:1|`}
                  color="#323232"
                  marginLeft={4}
                  label="The profile details you're seeing below are not coming from the BlueBank API."
                  textTransform="none"
                  className="views-block"
                />
                <a
                  href="https://login.microsoftonline.com/bluebankb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_BlueBankSUSI&client_Id=40957b9c-63bc-4ab4-9ecb-67b543c8e4ca&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fbb-customers.azurewebsites.net%2Fhome%2Fjwt%2F&scope=openid&response_type=id_token&prompt=login"
                  rel="noopener noreferrer"
                  target="_blank"
                  data-test-id={`Profile.Horizontal:2|`}
                  className={`views-block ${Horizontal_h1qq1i2q}`}
                >
                  <Label
                    data-test-id={`Profile.Label:2|`}
                    color="#ffffff"
                    marginLeft={4}
                    label="Click here to get a new one"
                    textTransform="none"
                    className="views-block"
                  />
                </a>
                <Label
                  data-test-id={`Profile.Label:3|`}
                  color="#323232"
                  marginLeft={4}
                  label="and put it on src/Main/App.view.logic.js instead of userToken's original value."
                  textTransform="none"
                  className="views-block"
                />
              </div>
            ) : null}
          </div>
        ) : null}
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
      {props.id ? (
        <Account
          data-test-id={`Profile.Account|`}
          customerId={props.id}
          className="views-block"
        />
      ) : null}
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
};
export default Profile;
