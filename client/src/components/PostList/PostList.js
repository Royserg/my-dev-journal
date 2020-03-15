import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import styles from './postsListStyles'

const useStyles = makeStyles(styles)

const PostList = ({ items }) => {
  // styles
  const classes = useStyles()

  /* TODO: Make post Item as a Card with top/right corner box for date */
  const posts = (
    <List className={classes.list}>
      {items.map((item, key) => (
          <Link key={key} to={item.path} className={classes.item}>
            <ListItem button>
              <ListItemText disableTypography className={classes.itemText}>
                {item.title}
              </ListItemText>
            </ListItem>
          </Link>
        ))}
    </List>
  )

  // const postRoute = (
  //   <Route path={'/:category/:item'} component={Post} />
  // )

  return (
    <div className={classes.container}>
      {posts}
    </div>
  )
}

export default PostList