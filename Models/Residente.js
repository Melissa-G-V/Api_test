import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/dbconection.js";
import { Prescricao } from "./Prescricao.js";
import { Responsavel } from "./Responsavel.js";
import { Prontuario } from "./Prontuario.js";

export const Residente = sequelize.define("Residente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  numero_registro: {
    type: DataTypes.BIGINT(6),
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
    type: DataTypes.BIGINT(8),
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
});



Residente.belongsTo(Prescricao, {
  foreignKey: {
    name: 'prescricao_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Prescricao.hasMany(Residente, {
  foreignKey: 'prescricao_id'
})

Residente.belongsTo(Responsavel, {
  foreignKey: {
    name: 'responsavel_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Responsavel.hasMany(Residente, {
  foreignKey: 'responsavel_id'
})


Residente.belongsTo(Prontuario, {
  foreignKey: {
    name: 'prontuarios_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Prontuario.hasMany(Residente, {
  foreignKey: 'prontuarios_id'
})