import { Router } from "express";

import { AirportController } from "./controllers/airport.controller";
import { AirportService } from "./services/airport.service";
import { AirportRespository } from "./repositories/airport.repository";
import { QuoteController } from "./controllers/quote.controller";
import { QuoteService } from "./services/quote.service";
import { QuoteRespository } from "./repositories/quote.repository";

const router = Router();

const quoteController = new QuoteController(
  new QuoteService(new QuoteRespository())
);
const airportController = new AirportController(
  new AirportService(new AirportRespository())
);

router.post("/quote", quoteController.createQuote);
router.put("/quote", quoteController.updateQuote);
router.delete("/quote", quoteController.deleteQuote);
router.get("/quote", quoteController.fetchQuotes);
router.get("/quote/:id", quoteController.findQuoteById);
router.get("/airport", airportController.fetchAirports);

export { router };
