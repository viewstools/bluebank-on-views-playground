/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Profile from './Profile.view.logic';

const App = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'App'}|`}
      className="views-block"
    >
      <Profile data-test-id={`App.Profile|`} className="views-block" />
      {props.children}
    </div>
  );
};

export default App;
