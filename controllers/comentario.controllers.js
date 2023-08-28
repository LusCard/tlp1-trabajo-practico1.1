import modelo_comentario from "../models/modelo_comentario.js"
const ctrl = {};

ctrl.nuevoComentario = (req, res) => {
    try {
            modelo_comentario.create({
                titulo: req.body.titulo,
                contenido: req.body.contenido,
                calificacion: req.body.calificacion,
                id_producto: req.body.id_producto,
            },{
                where: {
                    id:req.params.id
                }
            });
       return res.json(modelo_comentario);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al crear un nuevo comentario",
          });
    }};

ctrl.unComentario = async (req, res) =>{
    try {
        let comentario = await modelo_comentario.findByPk(req.params.id);
        if(!comentario || comentario.length === 0){
            throw{
                status: 404,
                message: "No se ha encontrado el comentario"
        };
    }else{
        return res.json(comentario)
    }
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al obtener un comentario",
        });
    }

}

export default ctrl
