import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const CreateRoute = () => {
  return (
    <div className='py-12'>
      <div className='text-center mb-12'> {/* header wrapper */}
        <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl'>Create Post</h1>
        <p className='text-xl text-muted-foreground pt-4'>Start sharing your thoughts</p>
      </div>

      <Card className='w-full max-w-xl mx-auto'>
        <CardHeader>
            <CardTitle>Create Blog Article</CardTitle>
            <CardDescription>Create a new blog article</CardDescription>
        </CardHeader>

        <CardContent>
            <form>
                
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateRoute
