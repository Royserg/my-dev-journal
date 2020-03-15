import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Converter } from 'react-showdown'
import ReactMarkdown from 'react-markdown'

import { makeStyles } from '@material-ui/core/styles'

import { getPost } from 'repositories/posts'

import Page from 'components/Page/Page'

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
      setPostData(data)
    }
    fetchPost()
  }, [])

  const markdownToHTML = (data) => {
    const converter = new Converter()
    return converter.convert(data)
  }

  const post = postData.attributes ?
  (
    <Page pageTitle={postData.attributes.title}>
        <ReactMarkdown className={classes.markdown} source={postData.body} />
    </Page>
  )
  :
  (
    <Page pageTitle='Loading..' />
  )

  return <>{post}</>
}

export default Post
