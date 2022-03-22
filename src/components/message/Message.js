import React from 'react'
import PropTypes from 'prop-types'
import { useMessage } from '../../hooks'
import './Message.scss'

const Message = ({ messageCode }) => {
  const { messageContent } = useMessage(messageCode)

  return (
    <div className='message-container'>
      <h1 className='message-title'>{messageContent.title}</h1>
      <div className='message-content-container'>
        <img className='message-image' src={`../../../assets/images/${messageContent.imageName}`} alt={messageContent.title} />
        <p className='no-task-text'>{messageContent.text}</p>
      </div>
    </div>
  )
}

Message.propTypes = {
  messageCode: PropTypes.number.isRequired
}
Message.defaultProps = {
  messageCode: 0
}

export default Message
