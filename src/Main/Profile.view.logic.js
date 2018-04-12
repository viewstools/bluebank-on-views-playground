import { Customers } from '../BlueBank.js'
import React from 'react'
import Profile from './Profile.view.js'

const ProfileLogic = props => (
  <Customers>
    {({ data, error, fetching }) => {
      const customer = data && data.results && data.results[0]
      return <Profile {...customer} fetching={fetching} error={error} />
    }}
  </Customers>
)
export default ProfileLogic
