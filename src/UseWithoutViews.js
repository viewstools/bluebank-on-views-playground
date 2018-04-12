import {
  Accounts,
  AccountTransactions,
  CustomerAccounts,
  Customer,
  Customers,
  Provider,
} from './BlueBank.js'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Data = props => (
  <div>
    {props.type}:
    <pre>{JSON.stringify(props.data)}</pre>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider
        apiKey="e105d510bc824bfcad7fd1ba55595675"
        userToken="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MjM1MjU2MzQsIm5iZiI6MTUyMzUyMjAzNCwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6IjdhMjA0YjMxLTY2MmQtNDIxOS04OWYyLWI2YjZkNjQ1NjJjMSIsImF1ZCI6IjQwOTU3YjljLTYzYmMtNGFiNC05ZWNiLTY3YjU0M2M4ZTRjYSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNTIzNTIyMDM0LCJhdXRoX3RpbWUiOjE1MjM1MjIwMzQsIm9pZCI6IjdhMjA0YjMxLTY2MmQtNDIxOS04OWYyLWI2YjZkNjQ1NjJjMSIsIm5hbWUiOiJEYXJpbyIsImZhbWlseV9uYW1lIjoiQ3JhdmVybyIsImdpdmVuX25hbWUiOiJEYXJpbyIsImVtYWlscyI6WyJkYXJpb0B2aWV3cy50b29scyJdLCJ0ZnAiOiJCMkNfMV9CbHVlQmFua1NVU0kifQ.jJhKd1utJlNVh_rbY_W4V6fkM5w2hXIIc0iE9SztRsZ8LtgNMynTvKE71cb9iT44IfLpEAp1sMd2XUXE3ObOlEf_CHs1DLFyX91esbkVDcsxuqo1GpKtXsbrFIg6tR324ObiQntHmRo7REYj2ZXH8XWbzEeCZq_ezLgEv6hwJzKfugyR864QCPJndI2fAaqKUnJ0EKwLr4XxxLQzrhftdVVwPdqaZOPQmA5gLmR9MsEux2B1D16X6MkAJPXYjmrn-wGwH09Q-vRQep7XHycFu9QtZeKGpaY6kIlu9C-MslCau3bLzlZWB_XWpw9Er5AADHQY7ok73oRXKp9EUNoYPw"
      >
        <Profile />

        <div className="App">
          <Customers>
            {({ data, error }) => (
              <div>
                <h1>Customers</h1>

                {error ? error : null}
                {data &&
                  data.results.map(customer => (
                    <div>
                      <div>Name: {customer.givenName}</div>
                      {JSON.stringify(data)}

                      <h2>Accounts</h2>
                      <CustomerAccounts id={customer.id}>
                        {({ data, error }) => (
                          <div>
                            <h2>Accounts</h2>

                            {error ? error : null}
                            {data &&
                              data.results.map(account => (
                                <div>
                                  <div>{account.accountFriendlyName}</div>
                                  <div>Number: {account.accountNumber}</div>
                                  <div>{JSON.stringify(account)}</div>

                                  <AccountTransactions id={account.id}>
                                    {({ data, error }) => (
                                      <div>
                                        <h3>Transactions</h3>

                                        {error ? error : null}
                                        {data &&
                                          data.results.map(transaction => (
                                            <div>
                                              <div>
                                                {
                                                  transaction.transactionFriendlyName
                                                }
                                              </div>
                                              <div>
                                                Number:{' '}
                                                {transaction.transactionNumber}
                                              </div>
                                              <div>
                                                {JSON.stringify(transaction)}
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    )}
                                  </AccountTransactions>
                                </div>
                              ))}
                          </div>
                        )}
                      </CustomerAccounts>
                    </div>
                  ))}
              </div>
            )}
          </Customers>
        </div>
      </Provider>
    )
  }
}

export default App
