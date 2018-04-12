/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';
import Transactions from './Transactions.view.logic';

const Account = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'Account'}|`}
      className="views-block"
    >
      <span data-test-id={`Account.Text|`} className="views-block">
        {props.customerId}
      </span>
      <span data-test-id={`Account.Text:1|`} className="views-block">
        {props.Bban}
      </span>
      <span data-test-id={`Account.Text:2|`} className="views-block">
        {props.Iban}
      </span>
      <span data-test-id={`Account.Text:3|`} className="views-block">
        {props.accountBalance}
      </span>
      <span data-test-id={`Account.Text:4|`} className="views-block">
        {props.accountCurrency}
      </span>
      <span data-test-id={`Account.Text:5|`} className="views-block">
        {props.accountFriendlyName}
      </span>
      <span data-test-id={`Account.Text:6|`} className="views-block">
        {props.accountNumber}
      </span>
      <span data-test-id={`Account.Text:7|`} className="views-block">
        {props.accountType}
      </span>
      <span data-test-id={`Account.Text:8|`} className="views-block">
        {props.id}
      </span>
      <span data-test-id={`Account.Text:9|`} className="views-block">
        {props.sortCode}
      </span>
      <Transactions
        data-test-id={`Account.Transactions|`}
        accountId={props.id}
        className="views-block"
      />
      {props.children}
    </div>
  );
};

Account.defaultProps = {
  customerId: '',
  Bban: '',
  Iban: '',
  accountBalance: '',
  accountCurrency: '',
  accountFriendlyName: '',
  accountNumber: '',
  accountType: '',
  id: '',
  sortCode: '',
};
export default Account;
