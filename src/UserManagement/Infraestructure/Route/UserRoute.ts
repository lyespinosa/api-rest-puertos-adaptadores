import { registerUserController } from "../dependencies";

//TODO:RUTAS PARA CREAR UN USUARIO
router.post("/",registerUserController.run.bind(registerUserController));
router.put("/:token/activate");
export router;