import { z } from "zod";

export const CreateEventSchema = z.object({
  title: z.string().min(5, "Min 5 character"),
  price: z.preprocess((value) => (value ? Number(value) : null), z.number()),
  category: z.enum(["Music", "Sport", "Workshop"]),
  image: z.any(),
});

export type ICreateEventSchema = z.infer<typeof CreateEventSchema>;
