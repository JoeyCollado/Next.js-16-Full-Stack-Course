"use client";
import { Loader2, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export function SearchInput() {
  // connect input to server function
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false); //for dropdown

  const results = useQuery(
    api.posts.searchPosts,
    term.length >= 2 ? { limit: 5, term: term } : "skip"
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
    setOpen(true); //set to true when search input is open
  }

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Posts..."
          className="w-full pl-8 bg-background"
          value={term}
          onChange={handleInputChange}
        />
      </div>
      {open && term.length >= 2 && ( //when user types
        <div className="absolute top-full mt-2 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95"> {/* render absolute relative to the main container */}
          {/* showcase loading state */}
          {results === undefined ? ( //if results is undefined means data is still being fetched hence render a loading state
            <div>
               <Loader2/>
               Searching...
            </div>
          ) : results.length === 0 ? ( //if results is equal to 0 characters
            <p>
                No results found!
            </p>
          ): ( //if successful
            <div className="py-1">
               {results.map((post) => (
                <Link href={`/blog/${post._id}`} key={post._id}>
                    <p>{post.title}</p>
                </Link> 
               ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
