import { Provider } from '../BlueBank.js'
import App from './App.view.js'
import React from 'react'

export default class AppLogic extends React.Component {
  render() {
    return (
      <Provider
        apiKey="e105d510bc824bfcad7fd1ba55595675"
        userToken="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MjM1MjkzMTYsIm5iZiI6MTUyMzUyNTcxNiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6IjdhMjA0YjMxLTY2MmQtNDIxOS04OWYyLWI2YjZkNjQ1NjJjMSIsImF1ZCI6IjQwOTU3YjljLTYzYmMtNGFiNC05ZWNiLTY3YjU0M2M4ZTRjYSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNTIzNTI1NzE2LCJhdXRoX3RpbWUiOjE1MjM1MjU3MTYsIm9pZCI6IjdhMjA0YjMxLTY2MmQtNDIxOS04OWYyLWI2YjZkNjQ1NjJjMSIsIm5hbWUiOiJEYXJpbyIsImZhbWlseV9uYW1lIjoiQ3JhdmVybyIsImdpdmVuX25hbWUiOiJEYXJpbyIsImVtYWlscyI6WyJkYXJpb0B2aWV3cy50b29scyJdLCJ0ZnAiOiJCMkNfMV9CbHVlQmFua1NVU0kifQ.KMn2oRgsO8cYYS6UwXJHRxa_bBdkl1YgkRSdWiU5mw71QjFq-NugQL06KSKPOA41QJC6qKkDBojZav-E94KdSKNumAj3vFWi4Z54anYVKqaERLVMslGfISJe6KNsWThIL3rrXR5sAmYTANgf6rZVTO44vgT2PgQCQ4u_lQf9Dta00S3iMPbtiZDo8k_1A9NdLkvCV5PdHrQyKzqZqKjXXVvuodLsQa3uopTU8TfphTqJYNk3MhDDZoX70IlJpjgHMNPEa4qKePPkQ_bCgmAtR1HoKSSOM1-xOQt4Rixhku2d9-QiRtbjb5gTEnj_H82wLJ61kW4hf44WFv0emSvJ6w"
      >
        <App {...this.props} />
      </Provider>
    )
  }
}
