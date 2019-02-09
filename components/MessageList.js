import React from 'react'
import styled from 'styled-components'

const Lister = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding-left: 6px;

  overflow-y: scroll;
  background: white;

  .message {
    display: flex;
    align-content: center;
    margin: 0px 30px;
    padding: 0px;
    border-bottom: 1.5px solid rgba(220, 220, 220, 0.4);
  }

  .message-text {
    align-self: center;
    background: rgba(220, 220, 220, 0.8);
    font-family: 'Montserrat', sans-serif;
    color: black;
    display: block;
    font-size: 12px;
    padding: 10px 14px;
    margin: 12px 0;
    border-radius: 8px;
    width: 50%;
    height: 80%;
    max-width: 600px;
    min-width: 300px;
  }
`

const DUMMY_DATA = [
  {
    senderId: 'perborgen',
    text:
      'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373',
  },
  {
    senderId: 'janedoe',
    text:
      'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373',
  },
  {
    senderId: 'janedoe',
    text:
      'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373',
  },
  {
    senderId: 'janedoe',
    text:
      'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373',
  },
  {
    senderId: 'janedoe',
    text:
      'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373',
  },
  {
    senderId: 'janedoe',
    text:
      'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373',
  },
]

class MessageList extends React.Component {
  render() {
    return (
      <Lister className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-text">{message.text}</div>
            </div>
          )
        })}
      </Lister>
    )
  }
}

export default MessageList
