import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
export const Horarios = sequelize.define('Horarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    isActive:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    }

  });