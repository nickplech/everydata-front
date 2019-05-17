import React from 'react'
import FeedAdmin from '../components/FeedAdmin'
import PleaseSignIn from '../components/PleaseSignIn'

const Feedupload = props => {
  return (
    <PleaseSignIn>
      <FeedAdmin />
    </PleaseSignIn>
  )
}

export default Feedupload
