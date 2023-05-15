import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";

export const Residente = sequelize.define("Residente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  numero_registro: {
    type: DataTypes.NUMBER(6),
    unique: true,
    validate:{
        len: [6,6]
    }
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cep: {
    type: DataTypes.NUMBER(8),
    allowNull: false,
    validate: {
         len: [8,8]   
    },
  },
  id_responsavel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: false,
    validate:{
        isIn:[['M','F']]
    }
  },
  estado_civil: {
    type: DataTypes.STRING(8),
    allowNull: false,
    validate:{
        isIn:[['SOLTEIRO','CASADO','DIVORCIADO','VIÚVO']]
    }
  },
  estrato:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{  
        min: 1,
        max:10
    }},
    grau_dependencia:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min: 1,
            max:3
        }
    },
    ingresso:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{isDate: true},
        set(value){
            this.setDataValue('ingresso', new Date(value))
        },
    },
},
{paranoid: true});
