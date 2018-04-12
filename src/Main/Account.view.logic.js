import { CustomerAccounts } from '../BlueBank.js'
import React from 'react'
import Account from './Account.view.js'

const AccountLogic = props => (
  <CustomerAccounts id={props.customerId}>
    {({ data, error, fetching }) => {
      const account = data && data.results && data.results[0]
      return <Account {...props} {...account} fetching={fetching} error={error} />
    }}
  </CustomerAccounts>
)
export default AccountLogic
