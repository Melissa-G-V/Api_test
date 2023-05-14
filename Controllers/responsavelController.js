import { Responsavel } from "../Models/Responsavel.js";
import { Op } from "sequelize";

export const responsavelndex =  async (req , res )=>{
    try {
        const responsavel =  await Responsavel.findAll()
        res.status(200).json(responsavel)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const responsavelCreate =  async (req, res) =>{
    const {nome, grauDeParentesco, contato}= req.body
    if(!nome|| !grauDeParentesco|| ! contato){
        req.status(401).json({id: 0, msg: "Por favor.. complete todos os dados requsitados"})
        try {
            const responsavel =  await Responsavel.create({
                nome,
                grauDeParentesco,
                contato
            })
            res.status(200).json(responsavel)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

export const responsavelUpdate = async (req , res) =>{
    const {pesq} = req.params
    const {grauDeParentesco, contato}= req.body
    if( !grauDeParentesco|| ! contato){
        req.status(402).json({id: 0, msg: "Por favor.. complete todos os dados requsitados"})
    }
    try {
        const responsavel = await Responsavel.update({
            grauDeParentesco, //o grau de responsavel deve ser feito update?
            contato
        },{
            where:{
                nome:{[Op.substring]: pesq},
            }
        })
        res.status(200).json(responsavel)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const responsavelPesq = async (req , res) => {
    const {pesq} = req.params
    const{nome, grauDeParentesco,contato}= req.body
    if(!nome || !grauDeParentesco || !contato){
        res.status(400).json({id:0 , msg: "Responsavel n encontrado"})
    }
    try {
        const responsavel = await Responsavel.findAll({
            nome,
            grauDeParentesco,
            contato
        },{
            where:{
                nome:{[Op.substring]: pesq},
            }
        })
        res.status(200).json(responsavel)
    } catch (error) {
    res.status(403).json(error)  
    }
}