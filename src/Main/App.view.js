/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Profile from './Profile.view.logic';

import { css } from 'react-emotion';

const App_hr07urm = css({
  overflowY: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '',
  paddingBottom: 30,
});

const App = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'App'}|`}
      className={`views-block ${App_hr07urm}`}
    >
      <Profile data-test-id={`App.Profile|`} className="views-block" />
      {props.children}
    </div>
  );
};

export default App;
