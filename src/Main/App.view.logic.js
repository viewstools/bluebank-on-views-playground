import { Provider } from '../BlueBank.js'
import App from './App.view.js'
import React from 'react'

export default class AppLogic extends React.Component {
  render() {
    return (
      <Provider
        apiKey="e105d510bc824bfcad7fd1ba55595675"
        userToken="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MjM1NzY1MTYsIm5iZiI6MTUyMzU3MjkxNiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6IjdhMjA0YjMxLTY2MmQtNDIxOS04OWYyLWI2YjZkNjQ1NjJjMSIsImF1ZCI6IjQwOTU3YjljLTYzYmMtNGFiNC05ZWNiLTY3YjU0M2M4ZTRjYSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNTIzNTcyOTE2LCJhdXRoX3RpbWUiOjE1MjM1NzI5MTYsIm9pZCI6IjdhMjA0YjMxLTY2MmQtNDIxOS04OWYyLWI2YjZkNjQ1NjJjMSIsIm5hbWUiOiJEYXJpbyIsImZhbWlseV9uYW1lIjoiQ3JhdmVybyIsImdpdmVuX25hbWUiOiJEYXJpbyIsImVtYWlscyI6WyJkYXJpb0B2aWV3cy50b29scyJdLCJ0ZnAiOiJCMkNfMV9CbHVlQmFua1NVU0kifQ.oYWncXWfQo35hlny7gxqnQWpgfaGcc2MIwOTZdYZM1_Wgd0XD-WJEPC05ZK6nMocx6qm0xihwRVy5LCseTkZ2oc8JVqPGiyYJfuTIVEQvve6b3Zm_FaMlr9-OXrKzDbNdlrOtWG7OuCZ2B0Wp2kRxL8sJmF7YJdjyREYXh2QkNLddXNFbTvWUv4hkvFym1B5RpO3kggq4FdSGIYEwgmCJG4R52IGkfVOVSJjVksVMH93drPpoDFurG416AkiNt4yg0tRnFowSJ1O2m24avqoHsHFPreWTAchgRDupVOZ0jHHdapJO_zBuajn0IUTl70EwNYVpW3_o2UFVvAZwO-LbQ"
      >
        <App {...this.props} />
      </Provider>
    )
  }
}
