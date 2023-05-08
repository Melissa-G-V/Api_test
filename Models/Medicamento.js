import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
export const Medicamento = sequelize.define(
  "Medicamento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dosagem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typo_dosagem: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    preco: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,

  },
}, {paranoid: true}
);
