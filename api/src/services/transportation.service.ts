import { TransportationRespository } from "../repositories/transportation.repository";

export class TransportationService {
  private transportationRespository: TransportationRespository;

  constructor(transportationRespository: TransportationRespository) {
    this.transportationRespository = transportationRespository;
  }

  public async fetch() {
    const quote = await this.transportationRespository.fetch();

    return quote;
  }
}
