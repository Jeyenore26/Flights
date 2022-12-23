import { z } from "zod";
import { group } from "../../database/schema/group";

const groupValidate = z.object({
  name: z.string().min(5),
  description: z.string().min(10).optional(),
});

export const CreateGroupValidation = async ({ name, description }) => {
  const newGroup = {
    name: name,
    description: description,
  };
  if (await group.findOne({ name: name }))
    return { msg: "Name is taken already", success: false };
  const results = groupValidate.safeParse(newGroup);
  if (!results.success)
    return { msg: results.error.format(), success: !results.success };
  return { msg: "Group is validated", success: results.success };
};
