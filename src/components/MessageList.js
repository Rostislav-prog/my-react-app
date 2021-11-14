import { Message } from './Message'
import { MessageInput } from './MessageInput'
import { useState } from 'react'

export const MessageList = () => {
  const [messageList, setMessagelist] = useState([])

  return (
    <>
      <MessageInput messageList={messageList} setMessagelist={setMessagelist} />
      <Message messageList={messageList} />
    </>
  )
}
