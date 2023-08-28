import {sequelize,DataTypes} from "../database/config.js";

const modelo_usuario = sequelize.define("usuario",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nombre_usuario:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contrasenia:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{
    sequelize,
    modelName:"usuario",
    tableName:"datos_usuario",
    underscored:true,
});

modelo_usuario.sync({force:false}).then(()=>{
    console.log("Se ha creado la tabla de usuarios")
}).catch((error)=>{
    console.log("Se ha producido un error al crear la tabla de usuario.", error)
});

export default modelo_usuario