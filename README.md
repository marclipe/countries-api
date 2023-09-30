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


()[https://blog.openreplay.com/creating-a-nodejs-api-with-knex-and-mysql/]