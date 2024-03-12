const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const dbConnect = require("./config/db");
const router = require("./route/route");
const morgan = require("morgan");

dbConnect();
const cors = require("cors");
app.use(cors())

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/music/", router);

app.listen(process.env.PORT, () => {
  console.log(`app running on 4000`);
});
