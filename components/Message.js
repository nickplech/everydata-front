import React from 'react'
import TextStyles from './styles/TextStyles'

const Message = ({ chat, user }) => (
  <TextStyles>
    <li className={`chat ${user === chat.username ? 'right' : 'left'}`}>
      {user !== chat.username && (
        <img src={chat.img} alt={`${chat.username}'s profile pic`} />
      )}
      {chat.content}
    </li>
  </TextStyles>
)

export default Message
