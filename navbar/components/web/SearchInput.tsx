"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

export function SearchInput() {
  // connect input to server function
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false); //for dropdown

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
      {open && term.length >= 2 && (
        <div className="absolute top-full mt-2 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95"> {/* render absolute relative to the main container */}

        </div>
      )}
    </div>
  );
}
