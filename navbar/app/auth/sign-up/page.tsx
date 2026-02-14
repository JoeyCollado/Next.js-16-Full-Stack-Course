"use client";
import { signUpSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function SignUpPage(){

    const form = useForm({ //setting up react hook form
      resolver: zodResolver(signUpSchema), //this will validate our data against the zod schema
      defaultValues: {
        name: "",
        email: "",
        password: "",
      }, 
    });  

    return (
        <Card> {/* container */}
            <CardHeader> {/* header */}
                <CardTitle> {/* title */}
                   Sign up
                </CardTitle>
                <CardDescription> {/* description */}
                   Create an account to get started
                </CardDescription>
            </CardHeader>
            <CardContent> {/* content */}
               <form>
                <FieldGroup>
                  {/* name */}
                  <Controller name="name" control={form.control} render={({field, fieldState}) => (
                    <Field>
                      <FieldLabel>Full Name</FieldLabel>
                      <Input placeholder="John Doe" {...field}/>
                      {fieldState.invalid && ( //if there's an error render
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                  {/* email */}
                  <Controller name="email" control={form.control} render={({field, fieldState}) => (
                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <Input placeholder="john@doe.com" type="password" {...field}/>
                      {fieldState.invalid && ( //if there's an error render
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                  {/* password */}
                  <Controller name="password" control={form.control} render={({field, fieldState}) => (
                    <Field>
                      <FieldLabel>Password</FieldLabel>
                      <Input placeholder="johnDoePassword" type="email" {...field}/>
                      {fieldState.invalid && ( //if there's an error render
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                  
                <Button>
                  Sign up
                </Button>
                </FieldGroup>
               </form>
            </CardContent> 
        </Card>
    )
}