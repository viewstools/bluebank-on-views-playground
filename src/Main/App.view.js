/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Profile from './Profile.view.logic';
import ValueLarge from '../Data/ValueLarge.view.js';

import { css } from 'react-emotion';

const Vertical_h15g6w93 = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  backgroundColor: '#ffaa00',
});

const App = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'App'}|`}
      className="views-block"
    >
      <div
        data-test-id={`App.Vertical|`}
        className={`views-block ${Vertical_h15g6w93}`}
      >
        <ValueLarge
          data-test-id={`App.ValueLarge|`}
          value={props.givenName}
          marginLeft={0}
          className="views-block"
        />
      </div>
      <Profile data-test-id={`App.Profile|`} className="views-block" />
      {props.children}
    </div>
  );
};

App.defaultProps = { givenName: 'Summer' };
export default App;
