import usuario from "../models/modelo_usuario.js";
import producto from "../models/modelo_producto.js";
import comentario from "../models/modelo_comentario.js";

//CARDINALIDAD UNO A MUCHOS
//USUARIO TIENE MUCHOS PRODUCTOS
usuario.hasMany(producto,{foreignKey:'id_usuario'});

producto.belongsTo(usuario, {foreignKey:'id_usuario'});
//PRODUCTO TIENE MUCHOS COMENTARIOS
producto.hasMany(comentario,{foreignKey:'id_producto'});

comentario.belongsTo(producto, {foreignKey:'id_producto'});

Promise.all([
     producto.sync({force:false}),
     usuario.sync ({force:false}),
   comentario.sync({force:false})
]).then(()=>{
    console.log("Tablas de usuario y producto relacionadas correctamente!")
}).catch(error=>{
    console.log("Se ha producido un error al relacionar las tablas usuario y producto", error)
});