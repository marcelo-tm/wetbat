import { Request, Response } from "express";
import { TransportationService } from "../services/transportation.service";

export class TransportationController {
  private transportationService: TransportationService;

  constructor(transportationService: TransportationService) {
    this.transportationService = transportationService;
  }

  public fetchTransportations = async (req: Request, res: Response) => {
    try {
      const transportations = await this.transportationService.fetch();
      res.status(200).json(transportations);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };
}
