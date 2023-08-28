import modelo_usuario from "../models/modelo_usuario.js";
const ctrl = {};

ctrl.nuevoUsuario = (req, res ) =>{
    try {
        modelo_usuario.create({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            nombre_usuario:req.body.usuario,
            email:req.body.email,
            contrasenia:req.body.contrasenia
        },{
            where: {
                id:req.params.id
            }
        });
        return res.json(modelo_usuario);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || "Error interno del servidor al crear un nuevo usuario",
          });
    }
};



// ctrl.unUsuario = async (req, res)=>{
//     try {
//         let usuarios = await modelo_usuario.findByPk(req.params.id);
//         if(!usuarios || usuarios.length === 0){
//             throw{
//                 status: 404,
//                 message: "No se ha encontrado el usuario"
//             };
//         }else{
//             return res.json(usuarios)
//         }
//     } catch (error) {
//         return res.status(error.status || 500).json({
//             message: error.message || "Error interno del servidor al obtener un usuario",
//         });
//     }};


export default ctrl