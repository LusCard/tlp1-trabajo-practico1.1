import {Router} from "express";
const router = Router();
import ctrl from "../controllers/comentario.controllers.js";


//CRUD
//CREATE
router.post("/comentario",ctrl.nuevoComentario );

router.get("/comentario/:id", ctrl.unComentario)

export default router