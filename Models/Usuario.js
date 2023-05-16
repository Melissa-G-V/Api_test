import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
export const Usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      isNumeric: {
        args: [10, 10],
        msg: "Telefone inválido",
      },
    },
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    validate: {
      isEmail: {
        args: [80, 80],
        msg: "E-mail inválido",
      },
    },
  },
  cpf: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: {
        args: [11, 11],
        msg: "CPF inválido",
      },
    },
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
});
