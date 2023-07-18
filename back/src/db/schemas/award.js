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
      required: false,
    },
    institute: {
      type: String,
      required: false,
    },
  }
);

const AwardModel = model("Award", AwardSchema);

export { AwardModel };