import modelo_producto from "../models/modelo_producto.js";
const ctrl = {};

ctrl.nuevoProducto = (req, res ) =>{
    try {
        modelo_producto.create({
            nombre_producto: req.body.producto,
            descripcion:req.body.descripcion,
            precio:req.body.precio,
        },{
            where: {
                id:req.params.id
            }
        });
        return res.json(modelo_producto);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al crear un nuevo producto",
          });
    }
};

ctrl.todosProductos = async (req, res)=>{
   try {
    let productos = await modelo_producto.findAll();
    if (!productos || productos.length === 0) {
        throw{
            status: 404,
            message: "No hay productos registrados aún"
        };
    }else{
        return res.json(productos)
    }
   } catch (error) {
    return res.status(error.status || 500).json({
        message: error.message || "Error interno del servidor al obtener todos los productos",
      });
   }};


ctrl.unProducto = async (req, res)=>{
    try {
        let producto = await modelo_producto.findByPk(req.params.id);
        if(!producto || producto.length === 0){
            throw{
                status: 404,
                message: "No se ha encontrado el producto"
            };
        }else{
            return res.json(producto)
        }
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al obtener un producto",
        });
    }};

ctrl.editarProducto = async (req, res ) =>{
    try {
        modelo_producto.update({
            nombre_producto: req.body.producto,
            descripcion:req.body.descripcion,
            precio:req.body.precio,
                },{
            where: {
                id:req.params.id
            }
        });
        return res.json(modelo_producto);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al editar un producto",
          });
    }};

ctrl.borrarProducto = async (req, res)=>{
    try {
        let producto = await modelo_producto.findByPk(req.params.id);
        await producto.update({ estado: false });
        return res.json({ message: 'El producto se eliminó correctamente' })
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al borrar un producto",
          });
    }
}

export default ctrl