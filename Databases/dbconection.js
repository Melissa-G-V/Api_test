import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './databases/quintaurbana.db3'
});


//FUTURA CONEXÂO AO BANCO DE DADOS 

//export const sequelize = new Sequelize({
//  dialect:'mysql',
//  host:'aws.connect.psdb.cloud',
//  username:'tuib70h01a2c6381gbez',
// password:'pscale_pw_KJOhbf6xgoFoUj9QisGD5Ss40gM5DWk0RkImcjPrrsh',
//  database:'quinta_urbana',
//  dialectOptions: {
//      ssl: {
//          rejectUnauthorized: false,        
//      }
//    }
//})

//export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
//  host: process.env.DATABASE_HOST,
//  dialect: 'mysql',
//  username: process.env.DATABASE_USERNAME,
//  password: process.env.DATABASE_PASSWORD,
//  dialectOptions: {
//      ssl: {
//          rejectUnauthorized: false,        
//      }
//  }
//});

//sequelize.authenticate();