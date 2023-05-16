import { Router } from "express";
import {
  usuarioCreate,
  usuarioIndex,
  usuarioDelete,
  usuarioUpdate,
} from "./Controllers/usuarioController.js";

import {
  medicamentoCreate,
  medicamentoIndex,
  medicamentoUpdate,
  medicamentoDelete,
  pesqNomeMedicamento,
} from "./Controllers/medicamentoController.js";
import {
  responsavelCreate,
  responsavelndex,
} from "./Controllers/responsavelController.js";
import {
  pesqResidenteNome,
  residenteCreate,
  residenteDelete,
  residenteIndex,
  residenteUpdate,
} from "./Controllers/residenteController.js";
import { cuidadosIndex } from "./Controllers/cuidadosController.js";
import { alergiaIndex } from "./Controllers/alergiaController.js";
import { anotacaoIndex } from "./Controllers/anotacoesController.js";
import { prontuarioIndex } from "./Controllers/prontuariosController.js";

const router = Router();
//usuario
router
  .get("/usuarios", usuarioIndex)
  .post("/usuario/create", usuarioCreate)
  .put("/usuario/update/:pesq", usuarioUpdate)
  .delete("/usuario/delete/:id", usuarioDelete);

// rota admin
// router.post("/usuario/cria/admin", admin_CreateAdm);
//medicamento
router
  .get("/med", medicamentoIndex)
  .post("/med/create", medicamentoCreate)
  .put("/med/update/:pesq", medicamentoUpdate)
  .delete("/med/delete/:id", medicamentoDelete)
  .get("/med/pesq/:pesq%", pesqNomeMedicamento);

//residente
router
  .get("/residente", residenteIndex)
  .post("/residente", residenteCreate)
  .delete("/residente", residenteDelete)
  .put("/residente", residenteUpdate)
  .get("/residente/:nome", pesqResidenteNome);

//responsavel
router
.get("/resp", responsavelndex)
.post("/resp/create", responsavelCreate);

router
.get("/cuidados",cuidadosIndex);

router
.get("/alergias",alergiaIndex)

router
.get("/anotacoes",anotacaoIndex)

router
.get("/prontuarios",prontuarioIndex)

export default router;
