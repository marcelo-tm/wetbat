import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateQuoteController {
  async handle(request: Request, response: Response) {
    const {
      origin,
      destination,
      depart_date,
      return_date,
      people,
      transportation,
      name,
      price,
    } = request.body;

    const quote = await prismaClient.quote.create({
      data: {
        origin,
        destination,
        depart_date,
        return_date,
        people,
        transportation,
        name,
        price,
      },
    });

    return response.json(quote);
  }
}
