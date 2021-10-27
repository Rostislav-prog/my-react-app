import { useRef, useState } from 'react'
import './style/MessageList.css'
import { GeneratorId } from './GeneratorId'

export const MessageList = props => {
  const [autor, setAutor] = useState('')
  const [text, setText] = useState('')

  const autorInput = useRef(null)

  const addItem = () => {
    const newList = [
      ...props.list,
      { autor: autor, text: text, id: GeneratorId() },
    ]
    props.setList(newList)
    setAutor('')
    setText('')
    autorInput.current.focus()
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
          ref={autorInput}
          value={autor}
        />

        <input
          className='MessageList-form'
          maxLength='130'
          placeholder='Text'
          type='text'
          onChange={e => setText(e.target.value)}
          value={text}
        />

        <button className='MessageList-button' onClick={addItem}>
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  )
}
