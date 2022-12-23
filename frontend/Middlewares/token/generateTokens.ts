import * as jwt from "jsonwebtoken";

export const generateAccessToken = ({ name, email, password }) => {
  const user = { password, name, email };
  const token = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "4h",
  });
  return token;
};
