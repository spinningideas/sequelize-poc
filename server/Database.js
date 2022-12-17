"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const config = {
  username: "postgres",
  password: "P0stGr3s",
  database: "sequelize_orm_poc",
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
};
const db = {};

const modelsPath = "./models";

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(modelsPath)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    console.log(`Importing file: ${file}`);
    const modelFilePath = path.join(__dirname, modelsPath, file)
    console.log(`Importing model from: ${modelFilePath}`);
    const model = require(modelFilePath)(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
