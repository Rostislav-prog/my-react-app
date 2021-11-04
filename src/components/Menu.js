import { Link } from 'react-router-dom'
import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menu: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}))

export const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const classes = useStyles()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid container spacing={2}>
      <Grid className={classes.menu} item xs={12}>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link className={classes.link} to='/profile'>
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className={classes.link} to='/chats'>
              Chats
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className={classes.link} to='/'>
              Home
            </Link>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  )
}
