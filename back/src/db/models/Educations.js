import { EducationModel } from "../schemas/education";

class Education {
  /**
   * @params filter: object임 
   * @return 리스트
   * js-doc
   */
  static async find(filter) {
    const educations = await EducationModel.find(filter);
    return educations;
  }

  /**
   * @params newEducation: Object
   */
  static async create(newEducation) {
    const createdEducation = await EducationModel.create(newEducation);
    return createdEducation;
  }

  static async findEducationsByUserId({ userId }) {
    const educations = await EducationModel.find({ userId })
    return educations;
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
