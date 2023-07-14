import { EducationModel } from "../schemas/education";

class Education {
  static async create({ newEducation }) {
    const createdEducation = await EducationModel.create(newEducation);
    return createdEducation;
  }

  static async findById({ userId }) {
    const education = await EducationModel.findOne({ userId });
    return education;
  }

  static async update({ userId, fieldToUpdate }) {
    const filter = { userId: userId };
    const update = { $set: fieldToUpdate };
    const option = { returnOriginal: false };

    const updatedEducation = await EducationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedEducation;
  }
}

export { Education };
