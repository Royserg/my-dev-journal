---
date: "14.03.2020"
title: "Custom hook"
path: "/react/custom-hook"
---

From what I got to know.
You can extract away repeating implementation (example: managing state) into
a custom hook.

Here, extracting fetching posts, because I repeat it for each category.

```js
// usePosts.js
import { useState, useEffect } from 'react'
import { getPosts } from 'repositories/posts'

const usePosts = (category) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts(category)
        const { data } = response
        setPosts(data)
      } catch (error) {
        // Error handling
      }
    }
    fetchPosts()
  }, [])

  return {
    posts
  }
}

export default usePosts
```

And use it in your component like below:
```js
// Node.js
import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

const Node = props => {
  const { posts } = usePosts('node')

  return (
    <Page pageTitle='Node.js'>
      <PostList items={posts} />
    </Page>
  )
}

export default Node
```