import {
  TransactionCategory,
  TransactionPaymentsMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentsMethod: z.nativeEnum(TransactionPaymentsMethod),
  date: z.date(),
});
