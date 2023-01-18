import { z } from "zod";

export const CreateQuoteRequestSchema = z.object({
  origin: z.string().length(3),
  destination: z.string().length(3),
  depart_date: z.string().datetime({ offset: true }),
  return_date: z.string().datetime({ offset: true }),
  people: z.number(),
  transportations_id: z.number(),
  name: z.string(),
  price: z.number(),
});

export type CreateQuoteRequestType = z.infer<typeof CreateQuoteRequestSchema>;

export const UpdateQuoteRequestSchema = z.object({
  id: z.string().uuid(),
  origin: z.string().length(3),
  destination: z.string().length(3),
  depart_date: z.string().datetime({ offset: true }),
  return_date: z.string().datetime({ offset: true }),
  people: z.number(),
  transportations_id: z.number(),
  name: z.string(),
  price: z.number(),
});

export type UpdateQuoteRequestType = z.infer<typeof UpdateQuoteRequestSchema>;

export const FindQuoteRequestSchema = z.object({
  id: z.string().uuid(),
});

export type FindQuoteRequestType = z.infer<typeof FindQuoteRequestSchema>;
