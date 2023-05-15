import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
export const Prontuario = sequelize.define("Prontuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  historico: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  vacinas: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});
