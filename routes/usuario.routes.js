import {Router} from "express";
const router = Router();
import ctrl from "../controllers/usuario.controllers.js"


//CRUD
//CREATE
router.post("/usuario",ctrl.nuevoUsuario);

router.get("/usuario/:id", ctrl.unUsuario);

export default router