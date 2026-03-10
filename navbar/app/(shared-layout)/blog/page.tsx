"use client";
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react'
import React from 'react'

const BlogPage = () => {

    const data = useQuery(api.posts.getPosts);
  return (
    <div>
        <h1>Hello World</h1>
      <h1>{data?.[0].title}</h1> {/* the "?." expression tells javascript that the data could be undefined to get past the errors */}
    </div>
  )
}

export default BlogPage
