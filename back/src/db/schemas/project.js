import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
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

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };
