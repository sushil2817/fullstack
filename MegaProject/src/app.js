import express from "express"

const app = express();

// router imports
import { healthChekc } from "./controllers/healthcheck.controllers.js";

app.use("/api/v1/healthcheck",healthChekc)

export default app;