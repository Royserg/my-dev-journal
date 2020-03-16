---
date: "12.03.2020"
title: "Package: classnames"
path: "/node/package-classnames"
---

## Conditional joining classNames together

### installation: `npm i classnames`

usage (copied from documentation):
```javascript
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
```

Simplified example from the project
```javascript
const isActive = routePath => {
  return location.pathname === routePath
}

const listItemClass = classNames(
  classes.itemLink,  // <= This one is always kept
  {
    [classes.purple]: isActive(route.path)
  }   // <= dynamically added
)
```

<a href="https://www.npmjs.com/package/classnames" target="_blank">classNames docs</a>