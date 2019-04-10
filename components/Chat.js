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
          username: 'Perfect Day Reminders',
          content: (
            <p>
              Welcome to Perfect Day Reminders, if you have any questions please
              feel free to ask.
            </p>
          ),
          img: './static/img/perfectdayreminders.png',
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
  // addText = () => {
  //   this.setState({ inputText: e.target.value })
  // }
  submitMessage(e) {
    e.preventDefault()

    this.setState(
      {
        chats: this.state.chats.concat([
          {
            username: 'Username',
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            img: './static/img/perfectdayreminders.png',
          },
        ]),
      },
      () => {
        ReactDOM.findDOMNode(this.refs.msg).value = ''
      },
    )
  }

  render() {
    const username = 'Username'
    const { chats } = this.state
    const { isOpen } = this.state
    const tooShort = chats.length < 1
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
          <button disabled={tooShort} type="submit">
            Submit
          </button>
        </TextInput>
      </StyledChat>
    )
  }
}

export default Chatroom
