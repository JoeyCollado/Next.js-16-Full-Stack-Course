import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";

// Create a new post with the given body and title
export const createPost = mutation({
  args: { title: v.string(), body: v.string()}, //get title and body from client side with the typoe of string
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
    })

    return blogArticle;
  },
});

//fetch query server action
export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query('posts').order("desc").collect(); //post

    return posts;
  }
})