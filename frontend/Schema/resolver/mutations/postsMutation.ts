import { checkAuth } from "../../../Middlewares/auth/checkAuth";
import { AuthenticationError, UserInputError } from "apollo-server-micro";
import { posts } from "../../../database/schema/posts";
import { group } from "../../../database/schema/group";

export const postMutation = {
  Mutation: {
    async createPost(_, { createPostInput: { body, groupName } }, context) {
      const user = await checkAuth(context);
      if ("Error" in user) throw user;
      if (body.trim() == "") throw new Error("Post body must not be empty");
      const oldgroup = await group.findOne({ name: groupName });
      const newPost = await posts.create({
        body: body,
        user: user.id,
        username: user.name,
        group: oldgroup?.id,
        groupName: oldgroup?.name,
      });
      const returnedPost = await posts
        .findOne({ _id: newPost.id })
        .populate("group");
      console.log(oldgroup);
      return returnedPost;
    },
    async deletePost(_, { postId }, context) {
      const user = await checkAuth(context);
      try {
        const post = await posts.findById(postId);
        if (
          user.username == post?.username ||
          user.role == "owner" ||
          user.role == "admin"
        ) {
          await post?.delete();
          return "Post deleted successFully";
        }
        throw new AuthenticationError("Action is denied");
      } catch (e: string | any) {
        throw new Error(e);
      }
    },
    async likePost(_, { postId }, context) {
      const { name } = await checkAuth(context);
      const post = await posts.findById(postId);

      if (!post) throw new UserInputError("Post not found");
      if (post.likes.find((like) => like.username === name)) {
        post.likes = post.likes.filter((like) => like.username !== name);
      } else {
        post.likes.push({
          username: name,
          createdAt: new Date(),
        });
      }
      await post.save();
      return post;
    },
  },
};
