import { ChatList } from './../../components/Chatlist'
import { MessageList } from './../../components/MessageList'
import Grid from '@material-ui/core/Grid'
import { CHATS } from './../../components/mocks/chats'
import { Switch, useParams } from 'react-router'
import { Route } from 'react-router'

export const Chats = () => {
  const chatId = useParams
  console.log(chatId)

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ChatList list={CHATS} />
        </Grid>
        <Grid item xs={6}>
          <Switch>
            <Route component={MessageList} puth='/chats/:chatId' />
          </Switch>
        </Grid>
      </Grid>
    </>
  )
}
