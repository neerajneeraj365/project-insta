import { z } from "zod";

export const fileUploadSchema = z.object({
    file: z.instanceof(File),
    title: z.string().min(5, "Title must be at least 5 characters.").max(32, "Title must be at most 32 characters."),
    description: z.string().min(20, "Description must be at least 20 characters.").max(100, "Description must be at most 100 characters."),
  })

export type FileUploadSchemaType = z.infer<typeof fileUploadSchema>;