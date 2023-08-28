import modelo_comentario from "../models/modelo_comentario.js"
const ctrl = {};

ctrl.nuevoComentario = (req, res) => {
    try {
            modelo_comentario.create({
                titulo: req.body.titulo,
                contenido: req.body.contenido,
                calificacion: req.body.calificacion,
            },{
                where: {
                    id:req.params.id
                }
            });
       return res.json(modelo_producto);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al crear un nuevo comentario",
          });
    }};

export default ctrl
