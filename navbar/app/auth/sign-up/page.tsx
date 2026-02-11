"use client";
import { signUpSchema } from "@/app/schemas/auth";
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
                  <Controller name="name" control={form.control} render={({field, fieldState}) => (
                    <Field>
                      <FieldLabel>Full Name</FieldLabel>
                      <Input placeholder="John Doe" {...field}/>
                      {fieldState.invalid && ( //if there's an error render
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                </FieldGroup>
               </form>
            </CardContent> 
        </Card>
    )
}