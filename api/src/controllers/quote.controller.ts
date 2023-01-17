import { Request, Response } from "express";
import { QuoteService } from "../services/quote.service";
import { FindQuoteRequestType } from "../types/quote.types";

export class QuoteController {
  private quoteService: QuoteService;

  constructor(quoteService: QuoteService) {
    this.quoteService = quoteService;
  }

  public createQuote = async (req: Request, res: Response) => {
    try {
      const quote = await this.quoteService.create(req.body);
      res.status(200).json(quote);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  public updateQuote = async (req: Request, res: Response) => {
    try {
      const quote = await this.quoteService.update(req.body);
      res.status(200).json(quote);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  public deleteQuote = async (req: Request, res: Response) => {
    try {
      const quote = await this.quoteService.delete(
        req.query as FindQuoteRequestType
      );
      res.status(200).json(quote);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  public fetchQuotes = async (req: Request, res: Response) => {
    try {
      const quotes = await this.quoteService.fetch();
      res.status(200).json(quotes);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  public findQuoteById = async (req: Request, res: Response) => {
    try {
      const quote = await this.quoteService.findById(
        req.query as FindQuoteRequestType
      );
      res.status(200).json(quote);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };
}
