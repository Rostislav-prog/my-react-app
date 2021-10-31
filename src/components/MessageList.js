import { useRef, useState } from 'react'
import './../style/MessageList.css'
import { GeneratorId } from './GeneratorId'
import PropTypes from 'prop-types'
import { Paper, IconButton, InputBase } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { ChatList } from './ChatList'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
  // bottom: {
  //   color: 'white',
  // },
}))

export const MessageList = props => {
  const [autor, setAutor] = useState('')
  const [text, setText] = useState('')

  const listChats = [
    {
      name: 'Chat',
      id: '555',
    },
  ]

  const classes = useStyles()

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
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ChatList list={listChats} />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )

  MessageList.propTypes = {
    placeholder: PropTypes.string,
  }
}
