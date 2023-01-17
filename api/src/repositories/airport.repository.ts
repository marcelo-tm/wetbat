import axios from "axios";
import { AirportRequestType } from "../types/airport.types";

export class AirportRespository {
  public async fetch(props: AirportRequestType) {
    if (props.term.length === 3) {
      const result = await axios.get(
        `${process.env.AIRPORT_API}?iata=${props.term}`,
        { headers: { "X-Api-Key": process.env.AIRPORT_API_KEY } }
      );

      if (result.data.length > 0) return result.data;
    }

    const result = await axios.get(
      `${process.env.AIRPORT_API}?name=${props.term}`,
      { headers: { "X-Api-Key": process.env.AIRPORT_API_KEY } }
    );

    return result.data;
  }
}
