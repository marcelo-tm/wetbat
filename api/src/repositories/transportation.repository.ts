import { prismaClient } from "../database/prismaClient";

export class TransportationRespository {
  public async fetch() {
    const transportations = await prismaClient.transportation.findMany();

    return transportations;
  }
}
