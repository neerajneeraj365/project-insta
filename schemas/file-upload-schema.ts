import { z } from "zod";

export const fileUploadSchema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file." })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File must be less than 20MB.",
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF.",
    ),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(32, "Subject must be at most 32 characters."),
  questionCount: z
    .number()
    .min(1, "Question count must be at least 1.")
    .max(50, "Question count must be at most 50."),
  questionType: z
    .array(z.enum(["multiple-choice", "fill-in-the-blank", "true-false"]))
    .min(1, "Select at least one question type."),
  difficulty: z.enum(["easy", "medium", "hard"], {
    message: "Invalid difficulty.",
  }),
  visibility: z.enum(["public", "private"], { message: "Invalid visibility." }),
  aiprompt: z.string().optional(),
});

export type FileUploadSchemaType = z.infer<typeof fileUploadSchema>;
