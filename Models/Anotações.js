import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";

export const Anotacao = sequelize.define("Anotacao",{
 id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
  allowNull: false
 },
 descricao:{
  type: DataTypes.STRING(200),
  allowNull: false
 },
 foto:{
  type: DataTypes.BLOB,
  allowNull: true
 },
})