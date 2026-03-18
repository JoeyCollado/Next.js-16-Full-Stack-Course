import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const BlogPage = () => {
 
  return (
    <div>
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Where Insights, Thoughts, and Trends rest
        </p>
      </div>

<Suspense fallback={<p className="text-5xl text-center font-bold">Loading...</p>}>
      <LoadBlogList/>     
      </Suspense>
    </div>
  );
};

export default BlogPage;

async function LoadBlogList(){
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //fetching data on server side
  const data = await fetchQuery(api.posts.getPosts) //by using this we will lose all reactivity
  
  return(
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {data?.map((post) => (
      <Card key={post._id} className="pt-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1773176647951-d8f618dee942?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            alt="blog image"
            className="rounded-t-lg"
          />{" "}
          {/* it's mandatory to put relative in parent component classname for the fill property of image to work as intended */}
        </div>

        <CardContent>
          <Link href={`/blog${post._id}`}>
            <h1 className="text-2xl font-bold hover:text-primary">
              {post.title}
            </h1>
          </Link>
          <p className="text-muted-foreground line-clamp-3">{post.body}</p>
        </CardContent>

        <CardFooter>
          <Link
            className={buttonVariants({
              className: "w-full",
            })}
            href={`/blog${post._id}`}
          >
            Read more
          </Link>
        </CardFooter>
      </Card>
    ))}
  </div>
  )
}
