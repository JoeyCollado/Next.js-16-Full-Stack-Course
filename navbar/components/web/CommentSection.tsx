"use client";
import React, { useTransition } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Loader2, MessageSquare } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/app/schemas/comment";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import z from "zod";
import { toast } from "sonner";

const CommentSection = () => {
  const params = useParams<{ postId: Id<"posts"> }>();
  const data = useQuery(api.comments.getCommentsByPostId, {postId: params.postId})
  const [isPending, startTransition] = useTransition();
  const createComment = useMutation(api.comments.createComment);
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      body: "",
      postId: params.postId,
    },
  });

  async function onSubmit(data: z.infer<typeof commentSchema>) {
    startTransition(async () => {
      try {
        await createComment(data);
        form.reset();
        toast.success("Comment posted successfully");
      } catch {
        toast.error("Failed to create post");
      }
    })
  }

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 border-b">
          <MessageSquare className="size-5" />
          <h2 className="text-xl font-bold">5 Comments</h2>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="body"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-invalid={fieldState.invalid}>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input placeholder="Comment your thoughts" {...field} />
                  {fieldState.invalid && ( //if there's an error render
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>Comments</span>
              )}
            </Button>
          </form>

        </CardContent>
      </Card>
    </div>
  );
};

export default CommentSection;
