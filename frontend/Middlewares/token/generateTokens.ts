import * as jwt from "jsonwebtoken";

export const generateAccessToken = ({ name, email, password }) => {
  console.log({ name, email, password });
  const user = { password, name, email };
  const token = jwt.sign(
    user,
    process.env.SECRET_ACCESS_TOKEN || "b4e102b7c65c89cfd84127a3",
    {
      expiresIn: "4h",
    }
  );
  console.log(token);
  return token;
};
