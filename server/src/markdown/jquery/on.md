---
date: "28.02.2020"
title: "$('item').on( )"
path: "/jquery/on"
---

Today I learned that when you call `on( )` on a selector, you can specify mutliple events as a space-separated string (see below) that you want to listen to, instead of defining them separately.

```javascript
  $('.btn').on('click mouseover mouseout', () ⇒ {
    // Code
  })
```