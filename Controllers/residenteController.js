
import { Paciente } from "../Models/Residente.js";
import { sequelize } from "../Databases/dbconection.js";
import { Responsavel } from "../Models/Responsavel.js";
import { Op } from "sequelize";

export const pacienteIndex = async (req, res) => {
    try {
        const paciente = await Paciente.findAll();
        res.status(200).json(paciente);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
export const pesqPacienteNome = async (req, res) => {
    const {nome} = req.params;
    try {
        const paciente = await Paciente.findAll({where: {nome:{ [Op.substring]: nome}}});
        res.status(200).json(paciente);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const pacienteCreate = async (req, res) => {
    const {paciente, responsavel } = req.body
    const {nome, numero_registro, idade, cep, sexo, estado_civil, estrato, grau_dependencia} = paciente;
    
    if(!nome || !numero_registro || !idade || !cep || !sexo || !estado_civil || !estrato || !grau_dependencia|| responsavel
        || !responsavel.cpf || !responsavel.nome || !responsavel.telefone){
        res.status(400).json({message: "Campos obrigatórios não preenchidos!"});
    }

    try {
        const result = await sequelize.transaction(async (t) => {

            const responsavelPaciente = await Responsavel.findOrCreate({where: {cpf: responsavel.cpf}},
                 {defaults: {cpf: responsavel.cpf, nome: responsavel.nome, telefone: responsavel.telefone}});

            const novoPaciente  = await Paciente.create({nome,
              numero_registro, idade, cep,
              id_responsavel: responsavelPaciente.id, 
              sexo, estado_civil,
              estrato, grau_dependencia}, { transaction: t })
        
            res.status(201).json(novoPaciente)
        
          });
    } catch (error) {
        res.status(400).json(error.message);
    }

}

export const pacienteDelete = async (req, res) => {
    const {id} = req.params;
    try {
        const paciente = await Paciente.destroy({where: {id}});
        res.status(200).json({paciente, message: "Paciente deletado com sucesso!"})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const pacienteUpdate = async (req, res) => {
    const {paciente, responsavel } = req.body
    const {nome, numero_registro, idade, cep, sexo, estado_civil, estrato, grau_dependencia} = paciente;
    
    if(!nome || !numero_registro || !idade || !cep || !sexo || !estado_civil || !estrato || !grau_dependencia|| responsavel
        || !responsavel.cpf ){
        res.status(400).json({message: "Campos obrigatórios não preenchidos!"});
    }

    try {
        const responsavelPaciente = await Responsavel.findOne({where: {cpf: responsavel.cpf}});
        if(!responsavelPaciente){
            res.status(400).json({message: "Responsável não encontrado!"});
        }
        const paciente = await Paciente.update({nome, numero_registro, idade, cep, sexo, estado_civil, estrato,
             grau_dependencia, id_responsavel: responsavelPaciente.id}, {where: {id}});

        res.status(200).json({paciente, message: "Paciente atualizado com sucesso!"})
    } catch (error) {
        res.status(400).json(error.message);
    }
}