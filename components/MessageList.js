import React from 'react'
import styled from 'styled-components'

const Lister = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/2;
  .message-list {
    box-sizing: border-box;
    padding-left: 6px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: white;
  }

  .message {
    margin: 0px 10px;
    padding: 20px 0;
    border-bottom: 1.5px solid rgba(220, 220, 220, 0.4);
  }

  .message .message-username {
    font-size: 11px;
    color: #3e5869;
    opacity: 0.9;
    margin-bottom: 6px;
  }
  .message .message-text {
    background: rgba(220, 220, 220, 0.8);
    font-family: 'Montserrat', sans-serif;
    color: black;
    display: block;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    max-width: 50%;
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
