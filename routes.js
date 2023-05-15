import { Router } from "express";
<<<<<<< HEAD
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
=======
import { usuarioCreate, usuarioIndex, admin_CreateAdm, usuarioDelete, usuarioUpdate} from "./Controllers/usuarioController.js";
import { medicamentoCreate, medicamentoIndex, medicamentoUpdate, medicamentoDelete, pesqNomeMedicamento} from "./Controllers/medicamentoController.js"
import { pacienteCreate, pacienteDelete, pacienteIndex, pacienteUpdate, pesqPacienteNome } from "./Controllers/pacienteController.js";
>>>>>>> 3c6a9657976c9ee0522576bd57e254070d3b6649

const router = Router();

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

<<<<<<< HEAD
  //responsavel
router
.get("/resp",responsavelndex )
.post("/resp/create" , responsavelCreate)
=======
router
  .get('/pacientes', pacienteIndex)
  .post('/pacientes', pacienteCreate)
  .delete('/pacientes', pacienteDelete)
  .put('/pacientes', pacienteUpdate)
  .get('/pacientes/:nome', pesqPacienteNome)
>>>>>>> 3c6a9657976c9ee0522576bd57e254070d3b6649

export default router;
