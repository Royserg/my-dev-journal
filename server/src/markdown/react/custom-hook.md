---
date: "14.03.2020"
title: "Custom hook"
path: "/react/custom-hook"
---

Applied custom hook

```js
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
        console.log(error)
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