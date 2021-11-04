import { ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

export const Chat = ({ name, id }) => {
  return (
    <ListItem component={Link} to={`/chats/${id}`}>
      <ListItem>{name}</ListItem>
    </ListItem>
  )
}

Chat.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}
