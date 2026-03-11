"use client";
import { Card } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const BlogPage = () => {
  const data = useQuery(api.posts.getPosts);
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
          <Card key={post._id}>
            <div></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
