import React from 'react'
import ReactDOM from 'react-dom'
import TextInput from './styles/TextInput'
import StyledChat from './styles/ChatStyles'
import Message from './Message.js'

class Chatroom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chats: [
        {
          username: 'James Saif',
          content: (
            <p>
              Welcome to Universal Dialers, if you have any questions please
              feel free to ask.
            </p>
          ),
          img: './favicon.png',
        },
      ],
      isOpen: false,
    }

    this.submitMessage = this.submitMessage.bind(this)
  }

  componentDidMount() {
    this.scrollToBot()
  }

  componentDidUpdate() {
    this.scrollToBot()
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(
      this.refs.chats,
    ).scrollHeight
  }
  slideChat = () => {
    const toggleChat = this.state.isOpen ? false : true
    this.setState({ isOpen: toggleChat })
  }

  submitMessage(e) {
    e.preventDefault()

    this.setState(
      {
        chats: this.state.chats.concat([
          {
            username: 'Nathan',
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            img: './favicon.png',
          },
        ]),
      },
      () => {
        ReactDOM.findDOMNode(this.refs.msg).value = ''
      },
    )
  }

  render() {
    const username = 'Nathan'
    const { chats } = this.state
    const { isOpen } = this.state

    return (
      <StyledChat open={isOpen}>
        <h3 onClick={this.slideChat}>
          Click Here{isOpen ? ' to Minimize' : ' for Support'}
        </h3>
        <ul className="chats" ref="chats">
          {chats.map(chat => (
            <Message chat={chat} user={username} />
          ))}
        </ul>
        <TextInput onSubmit={e => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <button type="submit">Submit</button>
        </TextInput>
      </StyledChat>
    )
  }
}

export default Chatroom
