import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PostIdRoute(){
    return (
        <div className="max-w-3xl mx-auto py-8 px-4  animate-in fade-in duration-500 relative">
            <Link className={buttonVariants({variant: "ghost"})} href="/blog">
            <ArrowLeft className="size-4"/>
            Back to blog
            </Link>

            <div className="relative w-full h-100 mb-8 rounded-xl overflow-hidden shadow-sm">
              <Image/>
            </div>
        </div>
    )
}