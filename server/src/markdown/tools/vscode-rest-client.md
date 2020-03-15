---
date: "20.02.2020"
title: "VS Code REST client"
path: "/tools/vscode-rest-client"
---

## VS Code extension providing possibility to send HTTP requests

You can create a directory for queries that can be versioned and shared.

GET request
```
// queries/getUsers.rest
GET http://localhost:3001/api/users

```

POST request
```
// queries/createUser.rest
POST http://localhost:3001/api/users
content-type: application/json

{
  "name": "Test name",
  "age": 43
}
```

<a href="https://github.com/Huachao/vscode-restclient" target="_blank">documentation</a>
