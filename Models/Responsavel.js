import {  DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";

export const Responsavel =  sequelize.define("Responsavel",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING(60),
        allowNull:false
    },
    grauDeParentesco:{
        type: DataTypes.STRING(10),
        allowNull:false,
    },
contato:{
    type: DataTypes.NUMBER(10),
    allowNull: false,
    validate: {
      isNumeric: {
        args: [10, 10],
        msg: "Telefone inválido",
      },
    },
}
})