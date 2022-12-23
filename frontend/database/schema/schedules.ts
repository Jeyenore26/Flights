import mongoose, { model } from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  body: String,
  chairmanname: String,
  groupName: String,
  selectedDate: String,
  attendees: [mongoose.SchemaTypes.ObjectId],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  group: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Group",
  },
  chairman: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

export const schedule = mongoose.models.Schedule || mongoose.model('Schedule', ScheduleSchema);
