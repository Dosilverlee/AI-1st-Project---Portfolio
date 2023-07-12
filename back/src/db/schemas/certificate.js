import { Schema, model } from "mongoose";

const CertificateSchema = new Schema(
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

const CertificateModel = model("Certificate", CertificateSchema);

export { CertificateModel };