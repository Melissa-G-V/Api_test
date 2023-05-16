//import { Sequelize } from 'sequelize';
//import mysql from 'mysql2'

import { Sequelize } from 'sequelize-cockroachdb';
import dotenv from 'dotenv'
dotenv.config();

//export const sequelize = new Sequelize({
//  dialect: 'sqlite',
//  storage: './databases/quintaurbana.db3'
//});

export const sequelize = new Sequelize(process.env.DATABASE_URL,{
  dialectOptions: {
    application_name: "docs_simplecrud_node-sequelize"
}})

sequelize.authenticate();