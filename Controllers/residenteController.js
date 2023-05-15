
import { Residente } from "../Models/Residente.js";
import { sequelize } from "../Databases/dbconection.js";
import { Responsavel } from "../Models/Responsavel.js";
import { Op } from "sequelize";

export const residenteIndex = async (req, res) => {
    try {
        const residente = await Residente.findAll();
        res.status(200).json(residente);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
export const pesqResidenteNome = async (req, res) => {
    const {nome} = req.params;
    try {
        const residente = await Residente.findAll({where: {nome:{ [Op.substring]: nome}}});
        res.status(200).json(residente);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const residenteCreate = async (req, res) => {
    const {residente, responsavel } = req.body
    const {nome, numero_registro, idade, cep, sexo, estado_civil, estrato, grau_dependencia} = residente;
    
    if(!nome || !numero_registro || !idade || !cep || !sexo || !estado_civil || !estrato || !grau_dependencia|| responsavel
        || !responsavel.cpf || !responsavel.nome || !responsavel.telefone){
        res.status(400).json({message: "Campos obrigatórios não preenchidos!"});
    }

    try {
        const result = await sequelize.transaction(async (t) => {

            const responsavelresidente = await Responsavel.findOrCreate({where: {cpf: responsavel.cpf}},
                 {defaults: {cpf: responsavel.cpf, nome: responsavel.nome, telefone: responsavel.telefone}});

            const novoresidente  = await Residente.create({nome,
              numero_registro, idade, cep,
              id_responsavel: responsavelresidente.id, 
              sexo, estado_civil,
              estrato, grau_dependencia}, { transaction: t })
        
            res.status(201).json(novoresidente)
        
          });
    } catch (error) {
        res.status(400).json(error.message);
    }

}

export const residenteDelete = async (req, res) => {
    const {id} = req.params;
    try {
        const residente = await Residente.destroy({where: {id}});
        res.status(200).json({residente, message: "residente deletado com sucesso!"})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const residenteUpdate = async (req, res) => {
    const {residente, responsavel } = req.body
    const {nome, numero_registro, idade, cep, sexo, estado_civil, estrato, grau_dependencia} = residente;
    
    if(!nome || !numero_registro || !idade || !cep || !sexo || !estado_civil || !estrato || !grau_dependencia|| responsavel
        || !responsavel.cpf ){
        res.status(400).json({message: "Campos obrigatórios não preenchidos!"});
    }

    try {
        const responsavelresidente = await Responsavel.findOne({where: {cpf: responsavel.cpf}});
        if(!responsavelresidente){
            res.status(400).json({message: "Responsável não encontrado!"});
        }
        const residente = await residente.update({nome, numero_registro, idade, cep, sexo, estado_civil, estrato,
             grau_dependencia, id_responsavel: responsavelresidente.id}, {where: {id}});

        res.status(200).json({residente, message: "residente atualizado com sucesso!"})
    } catch (error) {
        res.status(400).json(error.message);
    }
}