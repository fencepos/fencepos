# FencePOS

FencePOS is a Open-source Point of Sale software to keep track of retail transactions with support of Tracking Sales, Inventory Management, and Cashier interface.
<br/> Founded in November, 2022

# Table of contents
Main:
   1. [Features](#Features)
   2. [Tech Stack](#tech-stack)
   3. [Installation](#install-guide)

Others:
   * [Maintainers](#maintainers)
   * [Project Structure](#proj-structure)

---

### Our Features <a name="Features"></a>

| Feature              | Status  |
|:---------------------|:--------|
| Inventory management | Planned |
| Cashier interface    | Planned |

### Our Tech stack <a name="tech-stack"></a>

| Part     | Tech        |
|:---------|:------------|
| Backend  | Express.js  |
|          | SQLite      |
| Frontend | React.js    |
|          | TailwindCSS |

### How to install? <a name="install-guide"></a>
[//]: # (TODO: add installation guide)
 ---
 
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
### Maintained by <a name="maintainers"></a>

[jxpsert](https://github.com/jxpsert)
[nerdylive123](https://github.com/nerdylive123)

### Project Structure <a name="proj-structure"></a>
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

[//]: # (TODO: add project structure for react)
