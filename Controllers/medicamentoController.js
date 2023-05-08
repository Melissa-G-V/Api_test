import { Op } from "sequelize";
import { Medicamento } from "../Models/Medicamento.js";

export const medicamentoIndex = async (req, res) => {
  try {
    const medicamento = await Medicamento.findAll();
    res.status(200).json(medicamento);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const medicamentoCreate = async (req, res) => {
  const { nome, dosagem, typo_dosagem, preco, isActive } = req.body;
  if (!nome || !dosagem || !typo_dosagem || !preco || !isActive) {
    res
      .status(401)
      .json({ id: 0, msg: "Erro... preecha com os dados corretamente" });
    return;
  }
  try {
    const medicamento = await Medicamento.create({
      nome,
      dosagem,
      typo_dosagem,
      preco,
      isActive,
    });
    res.status(200).json(medicamento);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const medicamentoUpdate = async (req, res) => {
  const { pesq } = req.params;
  const { nome, dosagem, preco, isActive } = req.body;
  if (!nome || !dosagem || !preco ||!isActive) {
    res
      .status(401)
      .json({ id: 0, msg: "Erro... preecha com os dados corretamente" });
  }
  try {
    const medicamento = await Medicamento.update(
      {
        nome,
        dosagem,
        preco,
        isActive,
      },
      {
        where: {
          nome: { [Op.substring]: pesq },
        },
      }
    );
    res.status(200).json(medicamento);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const medicamentoDelete = async (req, res ) => {
  const {id} = req.params
  const { isActive } = req.body
  if(isActive == false){
        res.status(401).json({id:0,msg:"Erro..Ao inativar"})
        return
      }
      try {
        
      const medicamento =  await Medicamento.update({
       isActive:false
      }, { where:{
        id
      }
    })
    res.status(200).json(medicamento)
  
      } catch (error) {
      res.status(500).json(error)
      }
}

export const pesqNomeMedicamento =  async (req, res) => {
  const {pesq} = req.params
  const {nome} = req.body
  if(!pesq){
  res.status(401).json({id: 0, msg: "Erro...pesq n encontrado "});
  return
  }
  try {
    const medicamento = await Medicamento.findAll({
     where: {
      nome:{
        [ Op.like] : nome + 'nome'
      },
     },
    })
    res.status(200).json(medicamento)
  } catch (error) {
  res.status(500).json(error)
  }
  
}