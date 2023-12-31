import { CertificateModel } from "../schemas/certificate";

class Certificate {
  static async create({ newCertificate }) {
    const createdNewCertificate = await CertificateModel.create(newCertificate);
    return createdNewCertificate;
  }

  static async findByUserId({ userId }) {
    const certificate = await CertificateModel.findOne({ userId });
    return certificate;
  }

  static async update({ userId, updateField }) {
    const filter = { userId: userId };
    const update = { $set: updateField };
    const option = { returnOriginal: false };
  
    const updatedCertificate = await CertificateModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedCertificate;
  }  
}

export { Certificate };
