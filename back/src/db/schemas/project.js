import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
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
  }
);

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };
