import { useRef, useState } from 'react'
import './style/MessageList.css'
import { GeneratorId } from './GeneratorId'
import React from 'react'

export const MessageList = props => {
  const [autor, setAutor] = useState('')
  const [text, setText] = useState('')

  const autorInput = React.createRef()
  const textInput = React.createRef()

  const addItem = () => {
    const newList = [
      ...props.list,
      { autor: autor, text: text, id: GeneratorId() },
    ]
    props.setList(newList)
    autorInput.current.focus()
    autorInput.current.value = ''
    textInput.current.value = ''
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
        />

        <input
          className='MessageList-form'
          maxLength='130'
          placeholder='Text'
          type='text'
          onChange={e => setText(e.target.value)}
          ref={textInput}
        />

        <button className='MessageList-button' onClick={addItem}>
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  )
}
