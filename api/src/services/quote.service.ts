import { fromZodError } from "zod-validation-error";

import { QuoteRespository } from "../repositories/quote.repository";
import {
  CreateQuoteRequestSchema,
  CreateQuoteRequestType,
  FindQuoteRequestSchema,
  FindQuoteRequestType,
  UpdateQuoteRequestSchema,
  UpdateQuoteRequestType,
} from "../types/quote.types";
import { Prisma } from "@prisma/client";

export class QuoteService {
  private quoteRespository: QuoteRespository;

  constructor(quoteRespository: QuoteRespository) {
    this.quoteRespository = quoteRespository;
  }

  public async create(data: CreateQuoteRequestType) {
    const validData = CreateQuoteRequestSchema.safeParse(data);
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

    const quote = await this.quoteRespository.create(data);

    return quote;
  }

  public async update(data: UpdateQuoteRequestType) {
    const validData = UpdateQuoteRequestSchema.safeParse(data);
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

    const quote = await this.quoteRespository.update(data);

    return quote;
  }

  public async delete(data: FindQuoteRequestType) {
    const validData = FindQuoteRequestSchema.safeParse(data);
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

    try {
      const quote = await this.quoteRespository.delete(data);

      return quote;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2025") {
          throw e.meta;
        }
      }
      throw e;
    }
  }

  public async fetch() {
    const quote = await this.quoteRespository.fetch();

    return quote;
  }

  public async findById(data: FindQuoteRequestType) {
    const validData = FindQuoteRequestSchema.safeParse(data);
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

    const quote = await this.quoteRespository.findById(data);

    return quote;
  }
}
