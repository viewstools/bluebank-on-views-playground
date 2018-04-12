/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Profile from './Profile.view.logic';

import { css } from 'react-emotion';

const Horizontal_h18eko8d = css({
  flexDirection: 'row',
  alignItems: 'center',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: 'center',
  height: 60,
  backgroundColor: '#ffaa00',
});

const App = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'App'}|`}
      className="views-block"
    >
      <div
        data-test-id={`App.Horizontal|`}
        className={`views-block ${Horizontal_h18eko8d}`}
      />
      <Profile data-test-id={`App.Profile|`} className="views-block" />
      {props.children}
    </div>
  );
};

export default App;
