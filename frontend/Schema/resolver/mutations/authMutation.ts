import { user } from "../../../database/schema/user";
import { checkUser } from "../../../Middlewares/auth/registerValidation";
import { gql, UserInputError } from "apollo-server-micro";
import * as bcrypt from "bcrypt";
import { generateAccessToken } from "../../../Middlewares/token/generateTokens";

export const authenticationMutation = {
  Mutation: {
    async login(_, { loginInput: { email, password } }) {
      const olduser = await user.findOne({ email: email });
      if (!user)
        return new UserInputError(
          "there is no user with this email , check your email and try again"
        );
      const match = await bcrypt.compare(password, olduser?.password);
      if (!match) return new UserInputError("Password Incorrect , try again");
      const accessToken = generateAccessToken(olduser);
      return {
        ...olduser,
        token: accessToken,
      };
    },
    async register(
      _,
      { registerInput: { name, password, confirmPassword, email } }
    ) {
      const { msg, success } = await checkUser({
        name,
        password,
        confirmPassword,
        email,
      });
      if (!success) {
        return new UserInputError(String(msg));
      }
      password = await bcrypt.hash(password, 12);
      const newUser = {
        email: email,
        password: password,
        name: name,
      };
      await user.create(newUser);

      const accessToken = generateAccessToken(newUser);
      return {
        ...newUser,
        token: accessToken,
      };
    },
  },
};
