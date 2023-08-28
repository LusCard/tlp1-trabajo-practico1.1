import {Router} from "express";
const router = Router();
import ctrl from "../controllers/producto.controllers.js"

//CRUD
//CREATE
router.post("/producto", ctrl.nuevoProducto);

//READALL
router.get("/producto",ctrl.todosProductos);

//READONE
router.get("/producto/:id",ctrl.unProducto);

//UPDATE
router.put("/producto/:id",ctrl.editarProducto);

//DEELETE
router.delete("/producto/:id",ctrl.borrarProducto );

export default router