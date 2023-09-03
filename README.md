# Short documentation about the project's structure.

## All posts page

Contains searchbar that redirects user to search posts screen and posts with infinity scroll.

### Requests:

* Get all posts with limit and skip
```js
fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId')
    .then(res => res.json())
    .then(console.log);
```
* Get a post writer information
```js
fetch('https://dummyjson.com/users/1')
    .then(res => res.json())
    .then(console.log);
```

## Search posts page

Contains a searchbar similar to all posts page and posts with infinity scrollbar

### Requests:

* Search posts
```js
fetch('https://dummyjson.com/posts/search?q=love')
  .then(res => res.json())
  .then(console.log);
```
* Get a post writer information
```js
fetch('https://dummyjson.com/users/1')
    .then(res => res.json())
    .then(console.log);
```

## Login page

Contains form to log in and get a token

### Requests:

* Login
```js
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
    .then(res => res.json())
    .then(console.log);
```

## Post page

Contains information about a single post, its user and comments

### Requests:

* Get a single post
```js
fetch('https://dummyjson.com/posts/1')
    .then(res => res.json())
    .then(console.log);
```
* Get the post writer information
```js
fetch('https://dummyjson.com/users/1')
    .then(res => res.json())
    .then(console.log);
```
* Get all comments by post id
```js
fetch('https://dummyjson.com/comments/post/5')
    .then(res => res.json())
    .then(console.log);
```

## User page

Contains information about a single user, such as first name, last name
maiden name, age, gender, email, username.

Also, the page contains user posts with infinity scroll

### Requests:

* Get a single user
```js
fetch('https://dummyjson.com/users/1')
    .then(res => res.json())
    .then(console.log);
```
* Get posts by user id
```js
fetch('https://dummyjson.com/posts/user/5')
    .then(res => res.json())
    .then(console.log);
```
