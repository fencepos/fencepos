# FencePOS

Open-source Point of Sale software.

## Features

| Feature              | Status  |
|:---------------------|:--------|
| Inventory management | Planned |
| Cashier interface    | Planned |

## Tech stack

| Part     | Tech        |
|:---------|:------------|
| Backend  | Express.js  |
|          | SQLite      |
| Frontend | React.js    |
|          | TailwindCSS |

## Maintained by

[jxpsert](https://github.com/jxpsert)
[nerdylive123](https://github.com/nerdylive123)

## Project Structure
* Server:
````
Server-Root/
   node_modules/
   config/
      db.js                //Database connection and configuration
      credentials.js       //Passwords/API keys for external services used by your app
   models/                 //For mongoose schemas
      users.js
      things.js
   routes/                 //All routes for different entities in different files 
      users.js
      things.js
   app.js
   routes.js               //Require all routes in this and then require this file in 
   package.json
````
* Client :

[//]: # (TODO: add project structure for  client)