/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import AccountBalance from '../Data/AccountBalance.view.js';
import AccountCurrency from '../Data/AccountCurrency.view.js';
import AccountFriendlyName from '../Data/AccountFriendlyName.view.js';
import AccountNumber from '../Data/AccountNumber.view.js';
import AccountType from '../Data/AccountType.view.js';
import BBan from '../Data/BBan.view.js';
import CustomerID from '../Data/CustomerID.view.js';
import IBan from '../Data/IBan.view.js';
import Id from '../Data/Id.view.js';
import SortCode from '../Data/SortCode.view.js';
import Transactions from './Transactions.view.logic';

import styled, { css } from 'react-emotion';

const Account1 = styled('div')(({ props }) => ({
  marginTop: props.marginTop,
}));
const Vertical_h16ffdam = css({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
});

const Account = props => {
  return (
    <Account1
      data-test-id={`${props['data-test-id'] || 'Account'}|`}
      props={props}
      className="views-block"
    >
      <div
        data-test-id={`Account.Vertical|`}
        className={`views-block ${Vertical_h16ffdam}`}
      >
        <CustomerID
          data-test-id={`Account.CustomerID|`}
          className="views-block"
        />
        <BBan data-test-id={`Account.BBan|`} className="views-block" />
        <IBan data-test-id={`Account.IBan|`} className="views-block" />
        <AccountBalance
          data-test-id={`Account.AccountBalance|`}
          className="views-block"
        />
        <AccountCurrency
          data-test-id={`Account.AccountCurrency|`}
          className="views-block"
        />
      </div>
      <div
        data-test-id={`Account.Vertical:1|`}
        className={`views-block ${Vertical_h16ffdam}`}
      >
        <AccountFriendlyName
          data-test-id={`Account.AccountFriendlyName|`}
          className="views-block"
        />
        <AccountNumber
          data-test-id={`Account.AccountNumber|`}
          className="views-block"
        />
        <SortCode data-test-id={`Account.SortCode|`} className="views-block" />
        <AccountType
          data-test-id={`Account.AccountType|`}
          className="views-block"
        />
        <Id data-test-id={`Account.Id|`} className="views-block" />
      </div>
      <Transactions
        data-test-id={`Account.Transactions|`}
        accountId={props.id}
        className="views-block"
      />
      {props.children}
    </Account1>
  );
};

Account.defaultProps = { marginTop: 0 };
export default Account;
