# Sequelize ORM POC

The code in this repo demonstrates use of sequelize as an ORM using two tables with geography data sets.

## Get Started

To get started perform the following steps:

### 1) npm install

```npm install```

### 2) install PostGres 

https://www.postgresql.org/download/

### 3) Create PostGres database to use in this POC

After installing locally you should have database server with credentials and you next need to create empty database named "orm_poc"

### 4) Create database schema using sequelize migrations

run the following command - see more: https://sequelize.org/master/manual/migrations.html

```npx sequelize-cli db:migrate```

### 5) Populate database with data using sequelize data seeding

```npx sequelize db:seed:all --debug```

### 6) run the application

```npm run start```

### 7) exercise the application via postman

Download and install https://www.getpostman.com and then import the collection in the "postman" folder and run the requests to see api data and responses