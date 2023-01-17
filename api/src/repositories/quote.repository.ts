import { prismaClient } from "../database/prismaClient";

import {
  CreateQuoteRequestType,
  FindQuoteRequestType,
  UpdateQuoteRequestType,
} from "../types/quote.types";

export class QuoteRespository {
  public async create(props: CreateQuoteRequestType) {
    const {
      origin,
      destination,
      depart_date,
      return_date,
      people,
      transportation,
      name,
      price,
    } = props;

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

    return quote;
  }

  public async update(props: UpdateQuoteRequestType) {
    const {
      id,
      origin,
      destination,
      depart_date,
      return_date,
      people,
      transportation,
      name,
      price,
    } = props;

    const quote = await prismaClient.quote.update({
      where: {
        id: id,
      },
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

    return quote;
  }

  public async delete(props: FindQuoteRequestType) {
    const quote = await prismaClient.quote.delete({
      where: {
        id: props.id,
      },
    });

    return quote;
  }

  public async fetch() {
    const quotes = await prismaClient.quote.findMany();

    return quotes;
  }

  public async findById(props: FindQuoteRequestType) {
    const quotes = await prismaClient.quote.findUnique({
      where: {
        id: props.id,
      },
    });

    return quotes;
  }
}
