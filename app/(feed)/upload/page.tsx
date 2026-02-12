"use client";

import Wrapper from "@/components/globals/Wrapper";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Upload,
  Settings2,
  Sparkles,
  Eye,
  Check,
  File,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fileUploadSchema,
  FileUploadSchemaType,
} from "@/schemas/file-upload-schema";
import { ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Step = 1 | 2 | 3 | 4;

const steps = [
  { id: 1 as Step, label: "Upload", icon: Upload },
  { id: 2 as Step, label: "Configure", icon: Settings2 },
  { id: 3 as Step, label: "Generate", icon: Sparkles },
  { id: 4 as Step, label: "Preview", icon: Eye },
];

const UploadPage = () => {
  const [step, setStep] = useState<Step>(2);
  const handleNextStep = () => {
    setStep((step + 1) as Step);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      console.log(acceptedFiles);
    },
  });

  const form = useForm<FileUploadSchemaType>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: {
      file: undefined,
      subject: "",
      questionCount: 15,
      questionType: ["multiple-choice"],
      difficulty: "medium",
      visibility: "public",
      aiprompt: "",
    },
  });

  const onSubmit = (data: FileUploadSchemaType) => {
    const { success, data: validatedData } = fileUploadSchema.safeParse(data);

    if (!success) {
      toast.error("Invalid file", {
        description: "Please upload a valid PDF file",
      });
      return;
    }

    console.log("Validated data:", validatedData);
  };

  return (
    <Wrapper className="min-h-screen bg-background">
      <div className="flex items-center gap-4 my-8">
        <Link
          href="/feed"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </Link>
        <div className="flex-1">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Create Quiz
          </h1>
          <p className="text-sm text-muted-foreground">
            Upload a PDF and let AI generate questions for you
          </p>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                    step > s.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : step === s.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground",
                  )}
                >
                  {step > s.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <s.icon className="h-4 w-4" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium",
                    step >= s.id ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "mb-6 h-0.5 flex-1 rounded-full transition-all",
                    step > s.id ? "bg-primary" : "bg-border",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <div
                      {...getRootProps()}
                      className={cn(
                        "relative flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 transition-colors",
                        false && "border-primary bg-primary/5",
                        false && "border-border bg-muted/30 hover:bg-muted/50",
                        false && "pointer-events-none",
                      )}
                    >
                      <Input
                        {...getInputProps()}
                        type="file"
                        className="hidden"
                        disabled={false}
                        accept="application/pdf"
                        required
                      />
                      {false ? (
                        <>
                          <File className="h-12 w-12 text-primary" />
                          <p className="text-sm font-medium">Uploading…</p>
                          <div className="w-full max-w-xs rounded-full bg-secondary h-2 overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all duration-300"
                              style={{ width: `${80.88}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {Math.round(80.88)}%
                          </span>
                        </>
                      ) : field.value ? (
                        <>
                          <Check className="h-12 w-12 text-primary" />
                          <p className="text-sm font-medium truncate max-w-full">
                            {field.value.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {(field.value.size / 1024).toFixed(1)} KB · Ready to
                            send
                          </p>
                        </>
                      ) : (
                        <>
                          <File className="h-12 w-12 text-muted-foreground" />
                          <p className="text-sm font-medium">
                            Drop a PDF here or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground">
                            One file, max 5MB
                          </p>
                        </>
                      )}
                    </div>
                    {false && (
                      <p className="text-sm text-destructive">Reject Error</p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end mt-8">
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  onClick={handleNextStep}
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {form.getValues("file")?.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(form.getValues("file")?.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  <Check className="h-3 w-3" />
                  Uploaded
                </span>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Input
                        {...field}
                        placeholder="e.g. Organic Chemistry, Machine Learning, History..."
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="questionCount"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          Number of Questions{" "}
                          {field.value && (
                            <span className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-sm font-bold text-primary">
                              {field.value}
                            </span>
                          )}
                        </FormLabel>

                        <Slider
                          min={1}
                          max={50}
                          step={1}
                          value={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                          className="w-full my-2"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="questionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Question Type</FormLabel>
                        <Popover>
                          <PopoverTrigger
                            asChild
                            className="w-full overflow-hidden"
                          >
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between font-normal",
                                !field.value?.length && "text-muted-foreground",
                              )}
                            >
                              {field.value?.length
                                ? field.value
                                    .map((v) =>
                                      v === "multiple-choice"
                                        ? "(MCQ)"
                                        : v === "fill-in-the-blank"
                                          ? "(FITB)"
                                          : v === "true-false"
                                            ? "(TF)"
                                            : "(TF)",
                                    )
                                    .join(", ")
                                : "Select question types"}
                              <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <div className="flex flex-col p-2">
                              {[
                                {
                                  value: "multiple-choice",
                                  label: "Multiple Choice (MCQ)",
                                },
                                {
                                  value: "fill-in-the-blank",
                                  label: "Fill in the Blank",
                                },

                                { value: "true-false", label: "True/False" },
                              ].map((opt) => (
                                <label
                                  key={opt.value}
                                  className="flex cursor-pointer items-center gap-2 rounded-sm py-2 px-2 hover:bg-accent"
                                >
                                  <Checkbox
                                    checked={field.value?.includes(
                                      opt.value as
                                        | "multiple-choice"
                                        | "fill-in-the-blank"
                                        | "true-false",
                                    )}
                                    onCheckedChange={(checked) => {
                                      const next = checked
                                        ? [...(field.value ?? []), opt.value]
                                        : (field.value ?? []).filter(
                                            (v) => v !== opt.value,
                                          );
                                      field.onChange(next);
                                    }}
                                  />
                                  <span className="text-sm">{opt.label}</span>
                                </label>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Difficulty</FormLabel>
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value?.toString() || undefined}
                          defaultValue={field.value?.toString() || undefined}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="visibility"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Visibility</FormLabel>
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value?.toString() || undefined}
                          defaultValue={field.value?.toString() || undefined}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="aiprompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>AI Prompt (Optional)</FormLabel>
                      <Textarea
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="e.g. Generate 10 multiple choice questions for the given PDF..."
                        rows={4}
                        className="resize-none w-full"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  onClick={handleNextStep}
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </Wrapper>
  );
};

export default UploadPage;
