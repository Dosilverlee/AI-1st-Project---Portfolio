import { Schema, model } from "mongoose";

const CertificateSchema = new Schema(
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

const CertificateModel = model("Certificate", CertificateSchema);

export { CertificateModel };