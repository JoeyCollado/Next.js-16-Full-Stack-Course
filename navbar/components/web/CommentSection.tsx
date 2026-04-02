"use client";
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { MessageSquare } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema } from '@/app/schemas/comment'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const CommentSection = () => {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
        body: "",
        postId: "",
    },
  });

  return (
    <div>
      <Card>
        <CardHeader className='flex flex-row items-center gap-2 border-b'>
            <MessageSquare className='size-5'/>
            <h2 className='text-xl font-bold'>5 Comments</h2>
        </CardHeader>

        <CardContent>
            <form className='space-y-4'>
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

            <Button>Submit</Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommentSection
