import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Another child page route</h1>
      <Link href="/another/nestedanother">Go to nested another page route</Link>
    </div>
  )
}

export default page
