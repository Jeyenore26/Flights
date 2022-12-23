import { checkAuth } from "../../../Middlewares/auth/checkAuth";
import { AuthenticationError, UserInputError } from "apollo-server-micro";
import { posts } from "../../../database/schema/posts";

export const commentMutation = {
  Mutation: {
    async createComment(_, { postId, body }, context) {
      const { name } = await checkAuth(context);
      if (body.trim() == "") throw new UserInputError("Body cant be empty");

      const post = await posts.findById(postId).populate("group");
      if (!post) throw new UserInputError("Post not found");
      post.comments.unshift({
        body: body,
        username: name,
        createdAt: new Date(),
      });
      await post.save();
      return post;
    },
    async deleteComment(_, { postId, commentId }, context) {
      const user = await checkAuth(context);

      const post = await posts.findById(postId).populate("group");
      if (!post) throw new UserInputError("Post not found");
      const commentIndex = post.comments.findIndex(
        (comment: any) => comment.id === commentId
      );
      if (
        !post.comments[commentIndex].username === user.name ||
        user.role !== "admin" ||
        user.role !== "owner"
      )
        throw new AuthenticationError("Action denied");
      post.comments.splice(commentIndex, 1);
      await post.save();
      return post;
    },
  },
};
