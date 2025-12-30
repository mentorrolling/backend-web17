import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://<user>:<password>@_tu_base_de_datos";

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅Base de datos conectada");
  } catch (error) {
    console.error("❌Error de conexión", error);
  }
};
