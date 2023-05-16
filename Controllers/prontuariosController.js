import { Op } from "sequelize";
import { Prontuario } from "../Models/Prontuario.js";



export const prontuarioIndex = async (req, res) => {
    try {
      const prontuario = await Alergia.findAll();
      res.status(200).json(prontuario);
    } catch (error) {
      res.status(500).json(error);
    }
  };