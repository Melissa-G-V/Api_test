import { Op } from "sequelize";
import { Alergia } from "../Models/Alergias.js";


export const alergiaIndex = async (req, res) => {
    try {
      const alergia = await Alergia.findAll();
      res.status(200).json(alergia);
    } catch (error) {
      res.status(500).json(error);
    }
  };