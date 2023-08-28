import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import {sequelize} from "./database/config.js";
import {} from "./database/asociaciones.js"


import usuarioRutas from "./routes/usuario.routes.js"
import productoRutas from "./routes/producto.routes.js"
import comentarioRutas from "./routes/comentario.routes.js"

const app = express();


app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy:false,
    })
    );
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//RUTAS
app.use("/api/", usuarioRutas);
app.use("/api/", productoRutas);
app.use("/api/", comentarioRutas);

sequelize.authenticate().then(()=>{
        console.log('Conexión exitosa a la base de datos');
    }).catch((Error)=>console.log("Error al conectar a la base de datos", Error));


app.listen(process.env.PORT, () => {
    
    console.log(`Servidor funcionando http://localhost:${process.env.PORT}`)
});