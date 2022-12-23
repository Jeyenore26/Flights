import { posts } from "../../../database/schema/posts";

export const postsQuery = {
  Query: {
    async getAllPosts() {
      return await posts.find().sort({ createdAt: -1 }).populate("group");
    },
    async getPost(_, { postId }) {
      const post = await posts.findById(postId).populate("group");
      if (!post) throw new Error("Post not found");
      return post;
    },
    async getPostsInGroup(_, { groupName }) {
      const returnedPosts = await posts
        .find({ groupName: groupName })
        .sort({ createdAt: -1 })
        .populate("user")
        .populate("group");
      console.log(returnedPosts);
      return returnedPosts;
    },
  },
};
