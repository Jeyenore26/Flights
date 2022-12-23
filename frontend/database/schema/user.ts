import mongoose, { model, mongo } from "mongoose";

enum ROLES {
  GUEST = "guest",
  ADMIN = "admin",
  OWNER = "owner",
  DONATOR = "donator",
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 4,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: ROLES.GUEST,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    query: {
      byName(name) {
        return Object(this.where({ name: new RegExp(name, "i") }));
      },
      byEmail(email) {
        return Object(this.where({ email: new RegExp(email, "i") }));
      },
    },
  }
);
export const user = mongoose.models.User || mongoose.model('User', userSchema);
