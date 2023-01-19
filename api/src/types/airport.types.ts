import { z } from "zod";

export const AirportRequestSchema = z.object({
  term: z.string().min(3),
});

export type AirportRequestType = z.infer<typeof AirportRequestSchema>;

export interface AirportResponseType {
  iata: string;
  name: string;
  city: string;
  country: string;
}

export interface AirportApiResultType {
  icao: string;
  iata: string;
  name: string;
  city: string;
  region: string;
  country: string;
  elevation_ft: string;
  latitude: string;
  longitude: string;
  timezone: string;
}
