"use client"
import { postSchema } from "@/app/schemas/blog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const CreateRoute = () => {
  const form = useForm({
    //setting up react hook form
    resolver: zodResolver(postSchema), //this will validate our data against the zod schema
    defaultValues: {
      content: "",
      title: "",
    },
  });

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        {" "}
        {/* header wrapper */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Create Post
        </h1>
        <p className="text-xl text-muted-foreground pt-4">
          Start sharing your thoughts
        </p>
      </div>

      <Card className="w-full max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Create Blog Article</CardTitle>
          <CardDescription>Create a new blog article</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup className="gap-y-4">
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel>Title</FieldLabel>
                    <Input placeholder="Blog Title" {...field} />
                    {fieldState.invalid && ( //if there's an error render
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="content"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel>Content</FieldLabel>
                    <Textarea placeholder="Blog Content" {...field} />
                    {fieldState.invalid && ( //if there's an error render
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button>Create Post</Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateRoute;
