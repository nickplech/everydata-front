import React from 'react'
import InboxComponent from '../components/InboxComponent'
import PleaseSignIn from '../components/PleaseSignIn'

const Inbox = props => {
  return (
    <PleaseSignIn>
      <InboxComponent
        id={props.query.id}
        page={parseFloat(props.query.page) || 1}
      />
    </PleaseSignIn>
  )
}

export default Inbox
