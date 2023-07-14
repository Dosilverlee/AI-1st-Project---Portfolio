import { Schema, model } from "mongoose";

const EducationSchema = new Schema(
  {
    userId: {
      type: String,
      //required: true,
    },
    title: {
      type: String,
      //required: true,
    },
    description: {
      type: String,
      required: false,
      default: "설명이 아직 없습니다. 추가해 주세요.",
    },
  },
  {
    timestamps: true,
  }
);

const EducationModel = model("Education", EducationSchema);

export { EducationModel };