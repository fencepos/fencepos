# FencePOS

FencePOS is a Open-source Point of Sale software to keep track of retail transactions with support of Tracking Sales, Inventory Management, and Cashier interface.
<br/> Founded in November, 2022

# Table of contents
   * [Features](#features)
   * [Tech stack](#tech-stack)
   * [Installation](#installation)
   * [Directory structure](#directory-structure)
   * [Maintainers](#maintainers)

### Features

| Feature              | Status  |
|:---------------------|:--------|
| Inventory management | Planned |
| Cashier interface    | Planned |

### Tech stack

| Part     | Tech        |
|:---------|:------------|
| Backend  | Express.js  |
|          | SQLite      |
|          | Passport.js |
|          | Sequelize   |
| Frontend | React.js    |
|          | TailwindCSS |

### Installation

[//]: # (TODO: add install guide)

### Directory structure

* Server:
````
server/
   node_modules/
   config/
      db.js                // Database connection and configuration
      credentials.js       // Passwords/API keys for external services used by your app
   models/                 // For mongoose schemas
      users.js
      things.js
   routes/                 // All routes for different entities in different files 
      users.js
      things.js
   app.js
   routes.js               // Require all routes in this and then require this file in 
   package.json
````
* Client:
````
client/
   node_modules/
    public/               // Static files
    src/                          
        components/       // React components
        login/            // Login page
        fonts/            // Fonts
````

### Maintainers

[jxpsert](https://github.com/jxpsert)
[nerdylive123](https://github.com/nerdylive123)
