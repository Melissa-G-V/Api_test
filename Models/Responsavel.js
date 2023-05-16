import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";

export const Responsavel =  sequelize.define("Responsavel",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
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
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      isNumeric: {
        args: [9, 11],
        msg: "Telefone inválido",
      },
    },
}
})