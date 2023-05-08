import bcrypt from "bcrypt";
import { Usuario } from "../Models/usuario.js";
import { Op } from "sequelize";

export const usuarioIndex = async (req, res) => {
  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const usuarioCreate = async (req, res) => {
  const { nome, telefone, email, cpf, senha } = req.body;
  if (!nome || !telefone || !email || !cpf || !senha) {
    res
      .status(401)
      .json({ id: 0, msg: "Erro .... complete os dados solicitados" });
    return;
  }
  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(senha, salt);
  try {
    const usuario = await Usuario.create({
      nome,
      telefone,
      email,
      cpf,
      senha: hash,
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const usuarioDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.destroy({
      where: { id },
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const usuarioUpdate = async (req, res) => {
  const { pesq } = req.params;
  const { nome, telefone, cpf } = req.body;
  if (!nome || !telefone || !cpf ) {
    res
      .status(401)
      .json({ id: 0, msg: "Erro .... complete os dados solicitados" });
  }
  try {
    const usuario = await Usuario.update(
      {
        nome,
        telefone,
        cpf,
      },
      {
        where: {
          nome: { [Op.substring]: pesq },
        },
      }
    );
    res.status(200).json(usuario);
  } catch (error) {
    res.status(200).json(error);
  }
};






export const admin_CreateAdm = async (req, res) => {
    const { nome, senha, email, telefone, cpf, isAdmin } = req.body
  
    if (!nome || !senha || !email || !telefone || !cpf || !isAdmin) {
      res.status(400).json({ id: 0, msg: "Error... forgot to input some value" })
      return
    }
    try {
      const admin = await  Usuario.create({
        nome, senha, email, telefone, cpf, isAdmin
      });
      res.status(201).json(admin)
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  