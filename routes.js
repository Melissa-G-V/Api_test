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
import { responsavelCreate, responsavelndex } from "./Controllers/responsavelController.js";

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

//paciente
router
  .get('/pacientes', pacienteIndex)
  .post('/pacientes', pacienteCreate)
  .delete('/pacientes', pacienteDelete)
  .put('/pacientes', pacienteUpdate)
  .get('/pacientes/:nome', pesqPacienteNome)

//responsavel
router
  .get("/resp", responsavelndex)
  .post("/resp/create", responsavelCreate)

export default router;
