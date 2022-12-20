# Sequelize ORM POC

The code in this repo demonstrates use of [sequelize](https://sequelize.org/v6/) as an ORM using two tables with geography data sets (continents and countries).

This code uses the following libaries:

- [sequelize](https://sequelize.org/v6/)
- [express](https://expressjs.com/)
- [postgresql](https://www.postgresql.org/) - NOTE: could use any db sequelize supports
- [sequelize-cli](https://github.com/sequelize/cli) - database migrations and seeding


This proof of concept uses a repository to get data from database and via [express](https://expressjs.com/).

## Get Started

You will need to change directory into the "server" folder to install and run the application

To get started perform the following steps:

### 1) Install PostGre SQL

https://www.postgresql.org/download/

### 2) Create PostGre SQL database to use in this POC

After installing locally you should have database server and you need to enable credentials from Database.ts with access empty database named "sequelize_orm_poc"

### 3) Install npm packages

You will need to change directory into the server folder to install and run the application

Install the required packages after changing directory into the "server" folder

```npm install```

### 4) Create database schema using sequelize migrations

run the following command - see more: https://sequelize.org/master/manual/migrations.html

```npx sequelize-cli db:migrate```

### 5) Populate database with data using sequelize data seeding

```npx sequelize db:seed:all --debug```

### 6) run the application

The application is configured to use nodemon to monitor for file changes and you can run command to start the application using it. You will see console information with url and port.

```npm run start```

### 7) exercise the application via postman OR thunder client

#### 7.1 - Get a client

1) https://www.thunderclient.com/

2) https://www.getpostman.com - Download and install https://www.getpostman.com 

#### 7.2 - Import "postman" collection and run requests

Use the client of your choice to run the requests to see api data and responses after importing the collection in the "postman" folder