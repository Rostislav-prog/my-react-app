import { Chat } from './Chat'
import { List } from '@material-ui/core'
import { PropTypes } from 'prop-types'

export const ChatList = ({ list }) => {
  return (
    <List>
      {list.map(i => (
        <Chat key={i.id} {...i} />
      ))}
    </List>
  )
}

ChatList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  ),
  name: PropTypes.string,
}
