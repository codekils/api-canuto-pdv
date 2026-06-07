const express = require("express");
const app = express();
const router = require("./routes/routers");
require("dotenv").config();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na Porta: ${PORT}`);
});
