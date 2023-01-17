import { Request, Response } from "express";

import { AirportService } from "../services/airport.service";
import { AirportRequestType } from "../types/airport.types";

export class AirportController {
  private airportService: AirportService;

  constructor(airportService: AirportService) {
    this.airportService = airportService;
  }

  public fetchAirports = async (req: Request, res: Response) => {
    try {
      const airports = await this.airportService.fetch(
        req.query as AirportRequestType
      );
      res.status(200).json(airports);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };
}
