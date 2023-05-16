import { sequelize } from "../Databases/dbconection"
import { DataTypes } from "sequelize"
import { Residente } from "./Residente.js"


export const Exames = sequelize.define("Exames",{
 id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
 allowNull:false
 },
end_arquivo: {
 type: DataTypes.BLOB,
},
})

Exames.belongsTo(Residente, {
    foreignKey: {
      name: 'residente_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
  
Residente.hasMany(Exames, {
    foreignKey: 'residente_id'
})
  