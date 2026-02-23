"use client";
import { loginSchema } from "@/app/schemas/auth";
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
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const LoginPage = () => {
  const form = useForm({
    //setting up react hook form
    resolver: zodResolver(loginSchema), //this will validate our data against the zod schema
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>){
    await authClient.signIn.email({
      email: data.email,
      password: data.password
    })
  }

  return (
    <div>
      <Card>
        {" "}
        {/* container */}
        <CardHeader>
          {" "}
          {/* header */}
          <CardTitle>
            {" "}
            {/* title */}
            Login
          </CardTitle>
          <CardDescription>
            {" "}
            {/* description */}
            Login to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          {" "}
          {/* content */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-y-4">
            
              {/* email */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel>Email</FieldLabel>
                    <Input placeholder="john@doe.com" type="email" {...field} />
                    {fieldState.invalid && ( //if there's an error render
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* password */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      placeholder="johnDoePassword"
                      type="password"
                      {...field}
                    />
                    {fieldState.invalid && ( //if there's an error render
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button>Log in</Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
