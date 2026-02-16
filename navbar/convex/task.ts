import { query } from "./_generated/server";

//api
export const get = query({ //define query
  args: {}, //pass arguments
  handler: async (ctx) => { //define logic
    return await ctx.db.query("tasks").collect(); //access the db, get data from all the task table and collect it
  },
});