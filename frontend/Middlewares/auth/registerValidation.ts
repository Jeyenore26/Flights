import { user } from "../../database/schema/user";
import { z } from "zod";

const emailValidator =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const userValidate = z.object({
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  email: z.string().regex(emailValidator),
  name: z.string().min(5),
});

export const checkUser = async ({ password, confirmPassword, email, name }) => {
  const newUser = {
    password,
    confirmPassword,
    email,
    name,
  };
  console.log(await user.find());
  if (await user.findOne({ name: name }))
    return { success: false, msg: "Name is taken already" };
  if (await user.findOne({ email: email }))
    return { success: false, msg: "Email is taken already" };
  if (password !== confirmPassword)
    return {
      success: false,
      msg: "password and confirm password must be the same",
    };
  const results = userValidate.safeParse(newUser);
  if (!results.success)
    return { msg: results.error.format(), success: !results.success };
  return { msg: "User is created successfully", success: results.success };
};
