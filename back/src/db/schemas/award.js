import { Schema, model } from "mongoose";

const AwardSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    institute: {
      type: String,
    },
  }
);

const AwardModel = model("Award", AwardSchema);

export { AwardModel };