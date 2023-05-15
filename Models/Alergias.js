import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";

export const Alergia = sequelize.define("Alergia",{
 id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  allowNull: false,
  primaryKey: true
 },
 alergia:{
  type: DataTypes.STRING(100),
  allowNull: false
 },
})