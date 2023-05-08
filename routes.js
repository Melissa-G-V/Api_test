import { Router } from "express";
import { usuarioCreate, usuarioIndex, admin_CreateAdm, usuarioDelete, usuarioUpdate} from "./Controllers/usuarioController.js";
import { medicamentoCreate, medicamentoIndex, medicamentoUpdate, medicamentoDelete, pesqNomeMedicamento} from "./Controllers/medicamentoController.js"
import { pacienteCreate, pacienteDelete, pacienteIndex, pacienteUpdate, pesqPacienteNome } from "./Controllers/pacienteController.js";

const router = Router();

router
  .get("/usuarios", usuarioIndex)
  .post("/usuario/create", usuarioCreate)
  .put("/usuario/update/:pesq", usuarioUpdate)
  .delete("/usuario/delete/:id", usuarioDelete);

router.post("/usuario/create/admin", admin_CreateAdm);

router
  .get("/med", medicamentoIndex)
  .post("/med/create", medicamentoCreate)
  .put("/med/update/:pesq", medicamentoUpdate)
  .delete("/med/delete/:id", medicamentoDelete)
  .get('/med/pesq/:pesq%', pesqNomeMedicamento)

router
  .get('/pacientes', pacienteIndex)
  .post('/pacientes', pacienteCreate)
  .delete('/pacientes', pacienteDelete)
  .put('/pacientes', pacienteUpdate)
  .get('/pacientes/:nome', pesqPacienteNome)

export default router;
