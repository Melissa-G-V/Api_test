import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
import { Usuario } from "./Usuario.js"

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

Anotacao.belongsTo(Usuario, {
    foreignKey: {
      name: 'usuario_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
Usuario.hasMany(Anotacao, {
    foreignKey: 'usuario_id'
})
  