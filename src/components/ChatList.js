import { Chat } from './Chat'
import { List } from '@material-ui/core'

export const ChatList = ({ list }) => {
  return (
    <List>
      {list.map(i => (
        <Chat key={i.id} {...i} />
      ))}
      <Chat id='1' name='fake' />
    </List>
  )
}
