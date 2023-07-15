import { CertificateModel } from "../schemas/certificate";
import { ObjectTypeHandler } from "../typeHandler";

class Certificate {
  static async create(newCertificate) {
    const createdNewCertificate = await CertificateModel.create(newCertificate);
    return createdNewCertificate;
  }

  static async findByUserId(userId) {
    const Certificates = await CertificateModel.find({ userId: userId });
    return Certificates;
  }

  static async findById(id) {
    const Certificate = await CertificateModel.findOne(ObjectTypeHandler(id));
    return Certificate;
  }

  static async findByTitleDescription(title, description) {
    const Certificate = await CertificateModel.findOne({ title, description});
    return Certificate;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectId(id) };
    const update = { $set: updateField };
    const option = { returnOriginal: false };

    const updatedCertificate = await CertificateModel.findOneAndUpdate(
        filter,
        update,
        option
    );
    return updatedCertificate;
  }

  static async findByIdAndRemove(id) {
    const filter = { _id: ObjectId(id) };
    const deletedCertificate = await CertificateModel.findOneAndDelete(filter);
    return deletedCertificate;
  }
}

export { Certificate };
