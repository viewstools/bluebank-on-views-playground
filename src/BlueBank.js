import Fetch from 'holen'
import React from 'react'
import PropTypes from 'prop-types'

export const BlueBankContext = React.createContext('bluebank')

export const Provider = props => (
  <BlueBankContext.Provider
    value={{
      apiKey: props.apiKey,
      userToken: props.userToken,
    }}
  >
    {props.children}
  </BlueBankContext.Provider>
)
Provider.propTypes = {
  apiKey: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired,
}

const Api = props => (
  <BlueBankContext.Consumer>
    {bank => (
      <Fetch
        lazy={props.lazy}
        headers={{
          Authorization: bank.userToken,
          'OCP-Apim-Subscription-Key': bank.apiKey,
        }}
        method={props.method}
        url={`https://bluebank.azure-api.net/api/v0.7${props.path}`}
      >
        {res => {
          console.log(`BlueBank API: ${props.path}`, res)

          return props.children({
            ...res,
            data: res.data && res.data.errorMessage? null : res.data,
            error: (res.data && res.data.errorMessage) || res.error
          })
        }}
      </Fetch>
    )}
  </BlueBankContext.Consumer>
)

export const Customer = props => (
  <Api method="GET" path={`/customers/${props.id}`}>
    {props.children}
  </Api>
)

export const Customers = props => (
  <Api method="GET" path="/customers">
    {props.children}
  </Api>
)

export const CustomerAccounts = props => (
  <Api method="GET" path={`/customers/${props.id}/accounts`}>
    {props.children}
  </Api>
)

export const Accounts = props => (
  <Api method="GET" path={`/accounts/${props.id}`}>
    {props.children}
  </Api>
)

export const AccountTransactions = props => (
  <Api method="GET" path={`/accounts/${props.id}/transactions`}>
    {props.children}
  </Api>
)

export const Pay = props => (
  <Api method="POST" path={`/api/payments/${props.id}/transactions`}>
    {props.children}
  </Api>
)
