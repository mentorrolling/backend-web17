import { Router } from "express";
import Task from "../models/task.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las tareas",
    });
  }
});

export default router;
