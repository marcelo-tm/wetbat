import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
