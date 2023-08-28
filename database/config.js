import {Sequelize, DataTypes, Model} from "sequelize"

//INSTANCIA DE CONEXIÓN A BASE DE DATOS

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
    }
);

export{DataTypes, sequelize, Model}