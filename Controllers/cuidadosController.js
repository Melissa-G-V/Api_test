import { Op } from "sequelize";
import { Cuidado } from "../Models/Cuidado.js";

export const cuidadosIndex = async (req, res) => {
    try {
      const cuidado = await Cuidado.findAll();
      res.status(200).json(cuidado);
    } catch (error) {
      res.status(500).json(error);
    }
  };