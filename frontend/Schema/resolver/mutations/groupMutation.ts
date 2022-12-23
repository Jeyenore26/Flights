import { checkAuth } from "../../../Middlewares/auth/checkAuth";
import { AuthenticationError, UserInputError } from "apollo-server-micro";
import { group } from "../../../database/schema/group";
import { CreateGroupValidation } from "../../../Middlewares/create/groupValidate";
import { user } from "../../../database/schema/user";

enum ROLES {
  GUEST = "guest",
  ADMIN = "admin",
  OWNER = "owner",
  DONATOR = "donator",
}

export const groupMutation = {
  Mutation: {
    async createGroup(
      _,
      { createGroupInput: { name, description, type } },
      context
    ) {
      const usercheck = await checkAuth(context);
      if ("Error" in usercheck) throw usercheck;
      const groupcheck = await CreateGroupValidation({ name, description });
      if (!groupcheck.success) throw new UserInputError(String(groupcheck.msg));

      if (usercheck.role == "owner") {
        throw new AuthenticationError("this user is owner of a group already");
      }

      const newGroup = {
        name: name,
        description: description,
        type: type,
        owner: usercheck.id,
        admins: [],
      };
      await user.findOneAndUpdate(
        { name: usercheck.name },
        {
          role: ROLES.OWNER,
        }
      );
      console.log("//");
      await group.create(newGroup);
      const theGroup = await group
        .findOne({ name: name })
        .populate("owner")
        .populate("admins");
      const owner = theGroup?.owner;
      const admins = theGroup?.admins;
      return {
        ...newGroup,
        owner: owner,
        admins: admins,
      };
    },
    async addAdmins(_, args, context) {
      const check = await checkAuth(context);
      const groupOwnedByUser = await group.findOne({ owner: check.id });
      const adminsId = groupOwnedByUser?.admins;
      if (!groupOwnedByUser) return "there is no group owned by this user";
      for (let i = 0; i < args.adminNames.length; i++) {
        const element = args.adminNames[i];
        const IsAdmin = await user.findOne({ name: element });
        if (IsAdmin.role == "admin") return "this user is already admin";
        const newAdmin = await user.findOneAndUpdate(
          { name: element },
          {
            role: ROLES.ADMIN,
          }
        );
        await group.findOneAndUpdate(
          { name: groupOwnedByUser.name },
          {
            admins: [...(adminsId as []), newAdmin?._id],
          }
        );
      }
      const newGroup = await group
        .findOne({ name: groupOwnedByUser.name })
        .populate("owner")
        .populate("admins");
      const admins = newGroup?.admins;
      const owner = newGroup?.owner;
      return {
        ...newGroup,
        admins: admins,
        owner: owner,
      };
    },
  },
};
