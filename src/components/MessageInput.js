import { useRef, useState } from 'react'
import { GeneratorId } from './GeneratorId'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router'
import { Message } from './Message'
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
  bottom: {
    color: 'white',
  },
}))

export const MessageInput = ({ messageList, setMessagelist }) => {
  const [autor, setAutor] = useState('')
  const [text, setText] = useState('')

  const classes = useStyles()

  const autorInput = useRef(null)

  const addItem = () => {
    const newList = [
      ...messageList,
      { autor: autor, text: text, id: GeneratorId() },
    ]
    setMessagelist(newList)
    setAutor('')
    setText('')
    autorInput.current.focus()
  }

  const Robot = () => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].autor !== 'Bot'
    ) {
      const newList = [
        ...messageList,
        {
          autor: 'Bot',
          text: 'Ваше cообщение отправлено',
          id: GeneratorId(),
        },
      ]
      setMessagelist(newList)
    }
  }

  useEffect(() => {
    setTimeout(Robot, 1000)
  }, [messageList])

  return (
    <>
      <TextField
        className={classes.paper}
        id='outlined-basic'
        label='Autor'
        variant='outlined'
        maxLength='30'
        autoFocus
        placeholder='Autor'
        type='text'
        onChange={e => setAutor(e.target.value)}
        inputRef={autorInput}
        value={autor}
      />

      <TextField
        className={classes.paper}
        id='outlined-basic'
        label='Text'
        variant='outlined'
        maxLength='130'
        placeholder='Text'
        type='text'
        onChange={e => setText(e.target.value)}
        value={text}
      />

      <Button
        className={classes.bottom}
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={addItem}
      >
        ОТПРАВИТЬ
      </Button>
    </>
  )
}
