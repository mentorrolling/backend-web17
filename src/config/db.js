import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://user:_tu_password@_tu_base_de_datos.mongodb.net";

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅Base de datos conectada");
  } catch (error) {
    console.error("❌Error de conexión", error);
  }
};
