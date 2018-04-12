/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Account from './Account.view.logic';
import LocationSvg from '../Svgs/LocationSvg.view.js';
import SectionName from '../Micro Copy/SectionName.view.js';
import ValueLarge from '../Data/ValueLarge.view.js';
import ValueSmall from '../Data/ValueSmall.view.js';

import '../Fonts/Montserrat-300.js';
import { css } from 'react-emotion';

const Vertical_h15g6w93 = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  backgroundColor: '#ffaa00',
});
const Vertical_h7moydy = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  paddingTop: 30,
  paddingLeft: 30,
  paddingRight: 30,
});
const Text_hhzzivs = css({
  color: '#c5c5c5',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 14,
  fontWeight: 300,
  marginTop: 10,
});
const Text_h5pvax8 = css({
  color: '#c5c5c5',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 14,
  fontWeight: 300,
  marginTop: 10,
  marginLeft: 10,
});
const AddressSection_h1r6yaen = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  marginTop: 40,
});
const Horizontal_h13jcepm = css({
  flexDirection: 'row',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
});
const Address_hp97y5c = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  marginLeft: 10,
});

const Profile = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Profile'}|`}
      className="views-block"
    >
      <div
        data-test-id={`Profile.Vertical|`}
        className={`views-block ${Vertical_h15g6w93}`}
      >
        <ValueLarge
          data-test-id={`Profile.ValueLarge|`}
          value={props.givenName}
          marginLeft={0}
          className="views-block"
        />
        <ValueLarge
          data-test-id={`Profile.ValueLarge:1|`}
          value={props.familyName}
          marginTop={0}
          className="views-block"
        />
      </div>
      <div
        data-test-id={`Profile.Vertical:1|`}
        className={`views-block ${Vertical_h7moydy}`}
      >
        <span
          data-test-id={`Profile.Text|`}
          className={`views-block ${Text_hhzzivs}`}
        >
          ID
        </span>
        <span
          data-test-id={`Profile.Text:1|`}
          className={`views-block ${Text_h5pvax8}`}
        >
          {props.id}
        </span>
        <div
          data-test-id={`Profile.AddressSection|`}
          className={`views-block ${AddressSection_h1r6yaen}`}
        >
          <div
            data-test-id={`Profile.Horizontal|`}
            className={`views-block ${Horizontal_h13jcepm}`}
          >
            <LocationSvg
              data-test-id={`Profile.LocationSvg|`}
              width={30}
              height={30}
              className="views-block"
            />
            <div
              data-test-id={`Profile.Address|`}
              className={`views-block ${Address_hp97y5c}`}
            >
              <SectionName
                data-test-id={`Profile.SectionName|`}
                marginTop={17}
                childrenProxyMap={{ ValueSmall: 0 }}
                className="views-block"
              >
                <ValueSmall
                  data-test-id={`Profile.ValueSmall|`}
                  value={props.county}
                  marginLeft={0}
                  className="views-block"
                />
              </SectionName>
              <ValueSmall
                data-test-id={`Profile.ValueSmall:1|`}
                value={props.address1}
                marginLeft={0}
                marginTop={15}
                className="views-block"
              />
              <ValueSmall
                data-test-id={`Profile.ValueSmall:2|`}
                value={props.town}
                marginLeft={0}
                className="views-block"
              />
              <ValueSmall
                data-test-id={`Profile.ValueSmall:3|`}
                value={props.postCode}
                marginLeft={0}
                className="views-block"
              />
              <ValueSmall
                data-test-id={`Profile.ValueSmall:4|`}
                value={props.mobilePhone}
                className="views-block"
              />
            </div>
          </div>
          <Account
            data-test-id={`Profile.Account|`}
            customerId={props.id}
            className="views-block"
          />
        </div>
      </div>
      {props.children}
    </div>
  );
};

Profile.defaultProps = {
  givenName: 'Summer',
  familyName: 'Winters',
  id: 10000000001,
  county: 'Co. Dublin',
  address1: '1 Views Tools Rd',
  town: 'Dublin',
  postCode: 'VT101',
  mobilePhone: '+353 555 000 555',
};
export default Profile;
