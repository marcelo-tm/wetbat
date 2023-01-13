import { Router } from "express";

import { CreateQuoteController } from "./controllers/CreateQuoteController";

const router = Router();

const createQuote = new CreateQuoteController();

router.post("/quote", createQuote.handle);

export { router };
