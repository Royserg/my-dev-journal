import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown/with-html'
import { makeStyles } from '@material-ui/core/styles'
import { getPost } from 'repositories/posts'
import Page from 'components/Page/Page'
import BackButton from 'components/Buttons/BackButton/BackButton'

import styles from './postStyles'

const useStyles = makeStyles(styles)

const Post = props => {
  // styles
  const classes = useStyles()

  const { category, filename } = useParams()
  const [postData, setPostData] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(category, filename)
      const { data } = response
      console.log(data)
      setPostData(data)
    }
    fetchPost()
  }, [])

  const post = postData.attributes ? (
    <Page pageTitle={postData.attributes.title}>
      <ReactMarkdown
        className={classes.markdown}
        source={postData.body}
        escapeHtml={false}
      />
    </Page>
  ) : (
    <Page pageTitle='Loading..' />
  )

  return (
    <>
      <BackButton />
      {post}
    </>
  )
}

export default Post
