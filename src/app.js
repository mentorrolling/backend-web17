import express from "express";
import { dbConnect } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();
const PORT = 4500;

//Rutas
app.use("/api/tasks", taskRoutes);

//Conexión Base de datos
await dbConnect();

app.listen(PORT, () => console.log("🚀 Servidor en línea en puerto: " + PORT));
