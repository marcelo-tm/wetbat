import { fromZodError } from "zod-validation-error";

import { AirportRespository } from "../repositories/airport.repository";
import {
  AirportApiResultType,
  AirportRequestSchema,
  AirportRequestType,
  AirportResponseType,
} from "../types/airport.types";

export class AirportService {
  private airportRespository: AirportRespository;

  constructor(airportRespository: AirportRespository) {
    this.airportRespository = airportRespository;
  }

  public async fetch(data: AirportRequestType) {
    const validData = AirportRequestSchema.safeParse(data);
    if (!validData.success) {
      const zodError = fromZodError(validData.error);

      const errorsArray = zodError.details.map((err) => {
        return {
          path: err.path[0],
          message: err.message,
        };
      });

      throw errorsArray;
    }

    const airports = await this.airportRespository.fetch(data);

    if (airports.length === 0) return [];

    const aiportsList: AirportResponseType[] = airports.map(
      (item: AirportApiResultType) => {
        return {
          iata: item.iata,
          name: item.name,
          city: item.city,
          country: item.country,
        } as AirportResponseType;
      }
    );

    return aiportsList;
  }
}
