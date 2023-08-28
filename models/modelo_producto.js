
import {sequelize,DataTypes} from "../database/config.js";

const modelo_producto = sequelize.define("producto",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre_producto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    }
    ,
    precio:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    id_usuario:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    modelName:"producto",
    tableName:"datos_producto",
    underscored:true,
});

modelo_producto.sync({force:false}).then(()=>{
    console.log("Se ha creado la tabla de productos.")
}).catch((error)=>{
    console.log("Se ha producido un error al crear la tabla de productos.", error)
});

export default modelo_producto
