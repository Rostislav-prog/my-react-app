import { ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Chat = ({ name, id }) => {
  return (
    <ListItem component={Link} to={`/chats/${id}`}>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  )
}
