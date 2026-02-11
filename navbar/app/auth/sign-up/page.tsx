import { signUpSchema } from "@/app/schemas/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
                
               </form>
            </CardContent> 
        </Card>
    )
}