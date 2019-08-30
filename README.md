# [MERN Blogging Application](https://makemyblog.herokuapp.com)

![](blogApplication.gif)

Technologies Used:
- FrontEnd: [React.js](https://reactjs.org/), [React-Redux](https://react-redux.js.org/), ([Redux?](https://www.youtube.com/watch?v=3sjMRS1gJys)), React Hooks, React-Bootstrap, Redux-thunk, Axios
- Database: [MongoDB](https://www.mongodb.com/), mongoose, [MongoDB Atlas](https://cloud.mongodb.com)
- BackEnd: Node.js, Express.js, [Passport.js](http://www.passportjs.org/), JsonWebToken

# Configuration
For [configuring the environment variables](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786) there are two common approaches:
- Creating a .env file in your root directory with KEY=VALUE pairs assigned and fetching those keys in server.js file using dotenv()
```
# Sample .env file
MONGO_URI='mongodb://dbuser:dbpass@host:port/dbname'

# Server.js
require('dotenv').config();
const mongoURI = process.env.MONGO_URI
``` 
- Export a config file with {KEY:VALUE} pairs. Import the file and use the required variables.
```
# Sample config file
module.exports = {
  MONGO_URI: 'mongodb://dbuser:dbpass@host:port/dbname'
}

# Server.js
const mongoURI = require(pathToConfig).MONGO_URI;
```

# Quick Start
```
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev
```

[Install & Configure Redux Devtools](https://github.com/zalmoxisus/redux-devtools-extension)

[Learn & Build a MERN Blog Application in 100 hours](https://medium.com/@rajatdhoot/learn-build-a-mern-stack-application-in-100-hours-part-1-ee56e3f61979)

