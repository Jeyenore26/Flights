import { AuthenticationError } from "apollo-server-micro";
import * as jwt from "jsonwebtoken";
import { user } from "../../database/schema/user";

function removeNonValidateInToken(token): string {
  let validatedToken = "";
  for (let i = 0; i < token.length; i++) {
    const element = token[i];
    if (element != '"') {
      validatedToken = validatedToken + element;
    }
  }
  return validatedToken;
}

export const checkAuth = async (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const auth = authHeader.split("Bearer ")[1];
    const token = removeNonValidateInToken(auth);
    console.log(token);
    if (token) {
      try {
        const userverified = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
        const olduser = await user.findOne({ name: userverified.name });
        return olduser;
      } catch (e) {
        return new AuthenticationError(String(e));
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
