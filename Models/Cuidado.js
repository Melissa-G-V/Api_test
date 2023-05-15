import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
export const Cuidado = sequelize.define('Cuidado', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vezes_dia:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    horario_1: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    horario_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    horario_3: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    horario_4: {
        type: DataTypes.REAL,
        allowNull: false,    
    },
    horario_5: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    horario_6: {
        type: DataTypes.REAL,
        allowNull: false,   
    },
    data_inicio:{
        type:DataTypes.DATE,
        allowNull: false,
        validate:{
            //criar validação de data 
        }
    },
    data_termino:{
        type:DataTypes.DATE,
        allowNull: true,
    },
  });