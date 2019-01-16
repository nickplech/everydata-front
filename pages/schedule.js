import React from 'react'
import PleaseSignIn from '../components/PleaseSignIn'
import Schedule from '../components/Schedule'

const Scheduler = props => (
  <PleaseSignIn>
    <Schedule id={props.query.id} />
  </PleaseSignIn>
)
export default Scheduler
