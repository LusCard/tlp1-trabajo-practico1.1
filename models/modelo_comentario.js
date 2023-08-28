
import {sequelize,DataTypes} from "../database/config.js";

const modelo_comentario = sequelize.define("comentario",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contenido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    calificacion:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_producto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

 },
 { sequelize,
    modelName:"comentario",
    tableName:"datos_comentario",
    underscored:true,
});

modelo_comentario.sync({force:false}).then(()=>{
    console.log("Se ha creado la tabla de comentarios.")
}).catch((error)=>{
    console.log("Se ha producido un error al crear la tabla de comentarios.", error)
});

export default modelo_comentario