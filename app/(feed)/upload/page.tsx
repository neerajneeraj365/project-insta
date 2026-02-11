"use client";
import { cn } from "@/lib/utils";
import {
  FileUploadSchemaType,
  fileUploadSchema,
} from "@/schemas/file-upload-schema";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UploadPage = () => {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const form = useForm<FileUploadSchemaType>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: {
      file: undefined,
      title: "",
      description: "",
    },
  });
  return (
    <div className="space-y-8 w-full h-full flex flex-col justify-center">
      <div className="flex items-center gap-2 justify-center w-full">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors",
                step >= s
                  ? "bg-linear-to-r from-primary/90 via-primary/80 to-primary/70 text-primary-foreground"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 2 && (
              <div
                className={cn(
                  "w-20 h-1 rounded-full transition-colors",
                  step > s ? "bg-primary" : "bg-muted",
                )}
              />
            )}
          </div>
        ))}
      </div>
      <Form {...form}>
        <form className="space-y-8">
          {step === 1 && (
            <div className="space-y-8">
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="picture">Upload File</FieldLabel>
                    <Input
                      id="picture"
                      type="file"
                      className="cursor-pointer p-4 border-dashed border-2 border-gray-300 rounded-md h-16"
                    />
                    <FieldDescription>
                      Select a file to upload.
                    </FieldDescription>
                  </Field>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  onClick={handleNextStep}
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="">
              <h1>Step 2</h1>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default UploadPage;
