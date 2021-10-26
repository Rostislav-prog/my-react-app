import { useRef, useState } from 'react'
import './style/MessageList.css'
import { GeneratorId } from './GeneratorId'

export const MessageList = props => {
  const [autor, setAutor] = useState('')
  const [text, setText] = useState('')

  const addItem = () => {
    const newList = [
      ...props.list,
      { autor: autor, text: text, id: GeneratorId() },
    ]
    props.setList(newList)
  }

  return (
    <div className='MessageList'>
      <div className='MessageList-header'>
        <input
          className='MessageList-form'
          maxLength='30'
          autoFocus
          placeholder='Autor'
          type='text'
          onChange={e => setAutor(e.target.value)}
        />

        <input
          className='MessageList-form'
          maxLength='130'
          placeholder='Text'
          type='text'
          onChange={e => setText(e.target.value)}
        />

        <button className='MessageList-button' onClick={addItem}>
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  )
}
