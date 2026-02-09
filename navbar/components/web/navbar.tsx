import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function Navbar() {
  //components need no default keyword as this is not a full on routes and only a component
  return (
    <nav className="flex items-center w-full py-5 justify-between">
      {" "}
      {/* navbar container */}
      {/* Logo */}
      <div className="flex items-center gap-8">
        {" "}
        {/* left */}
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Next<span className="text-blue-500">Pro</span>
          </h1>
        </Link>
        {/* Links */}
        <div className="flex items-center gap-2">
          {" "}
          {/* right */}
          <Link href="/home">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/create">Create</Link>
        </div>
      </div>
      {/* Button */}
      <div className="flex items-center gap-2"> {/* further right */}
        <Link className={buttonVariants()} href="/auth/sign-up">Sign up</Link>
        <Link className={buttonVariants({variant: "secondary"})} href="/auth/login">Login</Link>
      </div> 
    </nav>
  );
}
