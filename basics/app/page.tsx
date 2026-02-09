import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Hello index page here from children route</h1>

      <Link href="/another">go to another page route</Link>
    </div>
  )
}

export default page
