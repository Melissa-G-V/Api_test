import { Op } from "sequelize";
import { Anotacao } from "../Models/Anotações.js";


export const anotacaoIndex = async (req, res) => {
    try {
      const anotacao = await Alergia.findAll();
      res.status(200).json(anotacao);
    } catch (error) {
      res.status(500).json(error);
    }
  };