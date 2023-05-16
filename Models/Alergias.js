import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
import { Residente } from "./Residente.js"

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

Alergia.belongsTo(Residente, {
    foreignKey: {
      name: 'residente_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
   onUpdate: 'CASCADE'
  })
  
Residente.hasMany(Alergia, {
   foreignKey: 'residente_id'
})
  