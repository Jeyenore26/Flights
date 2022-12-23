import { user } from "../../../database/schema/user";

export const userQuery = {
  Query: {
    async getAllUsers() {
      return await user.find();
    },
    async getUser(_, args) {
      const olduser = await user.findOne({ name: args.name });
      console.log(olduser);
      return olduser;
    },
  },
};
