// import { createServer } from "node:http";

// const hostName = "127.0.0.1";
// const port = 4500;

// const server = createServer((req, res) => {
//   //request - response
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/plain");
//   res.end("Hola Backend!!");
// });

// server.listen(port, hostName, () =>
//   console.log("Server online" + hostName + " port: " + port)
// );

import express from "express";

const app = express();
const PORT = 4500;
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Petición GET",
  });
});

app.post("/", (req, res) => {
  const { correo, nombre, mensaje } = req.body;
  res.json({
    msg: "Petición POST",
    correo,
    nombre,
    mensaje,
  });
});

app.put("/", (req, res) => {
  res.json({
    msg: "Petición PUT",
  });
});

app.delete("/", (req, res) => {
  res.json({
    msg: "Petición DELETE",
  });
});

app.listen(PORT, () => console.log(`Server online, port: ${PORT}`));
