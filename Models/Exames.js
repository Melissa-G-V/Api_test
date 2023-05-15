import { sequelize } from "../Databases/dbconection"
import { DataTypes } from "sequelize"

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