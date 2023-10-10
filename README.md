# Node.Js API With Knex And MySQL

### To init in Knex

- ` npx knex init`

### Creation Migration File

`knex migrate:make countries`

or 

`./node_modules/.bin/knex migrate:make countries`


To run the migrations, run the command below on your terminal: 

`knex migrate:latest`

To undo the migrations, run the command below:

`knex migrate:rollback`

- To show all database
`mysql -u username -p` and `SHOW DATABASES;`

### Seeding Databases with Data
- Run the command below to create a seed file for your author table:

`knex seed:make countries`

- You can execute a seed file by running the command below:
`knex seed:run --specific=<file_name>`


(Inspiration)[https://blog.openreplay.com/creating-a-nodejs-api-with-knex-and-mysql/]

### CORS
- `npm install cors`
- Add following lines to your server.js or index.js

```
  const cors = require('cors')

  app.use(cors()) // Use this after the variable declaration
```

### Cookies

`npm install cookie-parser`

```
  const cookieParser = require('cookie-parser')
  // let’s you use the cookieParser in your application
  app.use(cookieParser());
```
### uuid

`npm install uuid`