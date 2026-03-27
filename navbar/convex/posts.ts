import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";

// Create a new post with the given body and title
export const createPost = mutation({
  args: { title: v.string(), body: v.string(), imageStorageId: v.id("_storage")}, //get title and body from client side with the typoe of string
  handler: async (ctx, args) => { //get business logic
    //only authenticated users can create blogs
    const user = await authComponent.safeGetAuthUser(ctx);

    if(!user){
        throw new ConvexError("Not Authenticated");
    }
     
    const blogArticle = await ctx.db.insert("posts", {
        body: args.body,
        title: args.title,
        authorId: user._id,
        imageStorageId: args.imageStorageId
    })

    return blogArticle;
  },
});

//fetch query server action
export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query('posts').order("desc").collect(); //post

    return await Promise.all( //fetch data
      posts.map(async(post) => {
        const resolvedImageUrl = post.imageStorageId !== undefined
        ? await ctx.storage.getUrl(post.imageStorageId) 
        : null;

        return { //return data
          ...post,
          imageUrl: resolvedImageUrl,
        }
      })
    )
  }
})

export const generateImageUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);

    if(!user){ //check if user is authenticated
      throw new ConvexError("Not Authenticated");
  }

  //upload image generate
  return await ctx.storage.generateUploadUrl();
  }
})

//server function to render image with blog dynamic routes
export const getPostById = query({
  args: {
    postId: v.id("posts")
  },
  handler: async (ctx,args) => {
    const post = await ctx.db.get(args.postId);

    //generate image url
    const resolvedImageUrl = post?.imageStorageId !== undefined ? await ctx.storage.getUrl(post.imageStorageId) : null;

    //return data
    return {
      ...post,
      imageUrl: resolvedImageUrl,
    };
  },
})