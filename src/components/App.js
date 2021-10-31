import './../style/App.css'
import { Message } from './Message'
import { MessageList } from './MessageList'
import { useState } from 'react'
import { useEffect } from 'react'
import { GeneratorId } from './GeneratorId'

export const App = () => {
  const [list, setList] = useState([])

  const Robot = () => {
    if (list.length > 0 && list[list.length - 1].autor !== 'Bot') {
      const newList = [
        ...list,
        {
          autor: 'Bot',
          text: 'Ваше cообщение отправлено',
          id: GeneratorId(),
        },
      ]
      setList(newList)
    }
  }

  useEffect(() => {
    setTimeout(Robot, 1000)
  }, [list])

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <p>My react app</p>
        </header>
      </div>
      <div className='Message'>
        <div>
          <Message list={list} />
          <MessageList list={list} setList={setList} />
        </div>
      </div>
    </>
  )
}
