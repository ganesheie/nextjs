"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/ValidationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;
const IssuesPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  console.log(errors);
  const router = useRouter();
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.post("/api/issues", data);
      if (response.status === 201) {
        router.push("/issues");
      } else {
        setFormError("Form Submit failed");
      }
    } catch (error) {
      setSubmitting(false);
      setFormError("Form Submit failed");
    }
  });

  return (
    <div className="max-w-xl">
      {formError && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>
            <b>{formError}</b>
          </Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root
          placeholder="Issue Title"
          {...register("title")}
        ></TextField.Root>
        {errors.title && <ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description about the issue" {...field} />
          )}
        />
        {errors.description && (
          <ErrorMessage> {errors.description?.message} </ErrorMessage>
        )}
        <Button type="submit" disabled={submitting}>
          Submit New issue {submitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssuesPage;
