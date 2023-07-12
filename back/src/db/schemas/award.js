import { Schema, model } from "mongoose";

const AwardSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {

    },
  }
);

const AwardModel = model("Award", AwardSchema);

export { AwardModel };
