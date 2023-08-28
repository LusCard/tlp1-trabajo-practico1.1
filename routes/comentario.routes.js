import {Router} from "express";
const router = Router();
import ctrl from "../controllers/comentario.controllers.js";


//CRUD
//CREATE
router.post("/",ctrl.nuevoComentario );

export default router