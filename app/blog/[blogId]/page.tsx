interface BlogIdPageProps{
    params : Promise<{blogId: string}>;
}


export default async function BlogId({params}: BlogIdPageProps){

    const {blogId} = await params;
    return (
        <div>
            Hello, from dynamic blog page
            <p>Blog id: {blogId}</p>
        </div>
    )
}

//dynamic name route should be spelled correctly
//for example here [blogId] = {blogId}