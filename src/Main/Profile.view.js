/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import LocationSvg from '../Svgs/LocationSvg.view.js';
import ValueLarge from '../Data/ValueLarge.view.js';
import ValueSmall from '../Data/ValueSmall.view.js';

import '../Fonts/Montserrat-400.js';
import { css } from 'react-emotion';

const Profile_h627ekv = css({
  paddingTop: 30,
  paddingLeft: 30,
  paddingRight: 30,
});
const Vertical_hswucep = css({
  alignItems: 'center',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: 'center',
});
const NameSurname_h13jcepm = css({
  flexDirection: 'row',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
});
const Text_hxu9730 = css({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 10,
  color: '#c5c5c5',
});
const CustomerDetails_h1u70cya = css({
  flexDirection: 'row',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  marginTop: 30,
});
const AddressSection_h1225pw6 = css({
  flexDirection: 'row',
  width: 300,
});
const Address_hp97y5c = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  marginLeft: 10,
});
const Vertical_h16ffdam = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
});

const Profile = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Profile'}|`}
      className={`views-block ${Profile_h627ekv}`}
    >
      <div
        data-test-id={`Profile.Vertical|`}
        className={`views-block ${Vertical_hswucep}`}
      />
      <div
        data-test-id={`Profile.NameSurname|`}
        className={`views-block ${NameSurname_h13jcepm}`}
      >
        <ValueLarge
          data-test-id={`Profile.ValueLarge|`}
          value={props.givenName}
          className="views-block"
        />
        <ValueLarge
          data-test-id={`Profile.ValueLarge:1|`}
          value={props.familyName}
          marginLeft={10}
          className="views-block"
        />
      </div>
      <span
        data-test-id={`Profile.Text|`}
        className={`views-block ${Text_hxu9730}`}
      >
        {props.id}
      </span>
      <div
        data-test-id={`Profile.CustomerDetails|`}
        className={`views-block ${CustomerDetails_h1u70cya}`}
      >
        <div
          data-test-id={`Profile.AddressSection|`}
          className={`views-block ${AddressSection_h1225pw6}`}
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
            <ValueSmall
              data-test-id={`Profile.ValueSmall|`}
              value={props.address1}
              marginLeft={0}
              marginTop={15}
              className="views-block"
            />
            <ValueSmall
              data-test-id={`Profile.ValueSmall:1|`}
              value={props.town}
              marginLeft={0}
              className="views-block"
            />
            <ValueSmall
              data-test-id={`Profile.ValueSmall:2|`}
              value={props.postCode}
              marginLeft={0}
              className="views-block"
            />
            <ValueSmall
              data-test-id={`Profile.ValueSmall:3|`}
              value={props.county}
              marginLeft={0}
              className="views-block"
            />
            <ValueSmall
              data-test-id={`Profile.ValueSmall:4|`}
              value={props.country}
              marginLeft={0}
              className="views-block"
            />
          </div>
        </div>
        <div
          data-test-id={`Profile.Vertical:1|`}
          className={`views-block ${Vertical_h16ffdam}`}
        >
          <ValueSmall
            data-test-id={`Profile.ValueSmall:5|`}
            value={props.mobilePhone}
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
  id: 100000000001,
  address1: '1 Views Tools Rd',
  town: 'Dublin',
  postCode: 'VT101',
  county: 'Co. Dublin',
  country: 'Ireland',
  mobilePhone: '+353 555 000 555',
};
export default Profile;
