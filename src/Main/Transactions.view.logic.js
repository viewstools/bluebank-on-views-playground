import { AccountTransactions } from '../BlueBank.js'
import React from 'react'
import Transactions from './Transactions.view.js'

const TransactionsLogic = props => (
  <AccountTransactions id={props.accountId}>
    {({ data, error, fetching }) => {
      return <Transactions {...props} from={data && data.results} fetching={fetching} error={error} />
    }}
  </AccountTransactions>
)
export default TransactionsLogic
