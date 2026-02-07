import Link from "next/link";

export default function AnotherNestedPageRoute(){ //it's good practice to use an export default function structure for nested routes
    return (
      <div>
        <h1>Another Nested Page Route</h1>
        <Link href="/">Go back to home page route</Link>
      </div>
    )
}