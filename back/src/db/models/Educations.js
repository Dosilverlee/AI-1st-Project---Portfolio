import { EducationModel } from "../schemas/education";
import { Types } from "mongoose";
const { ObjectId } = Types;

class Education {
  static async create(newEducation) {
    const createdNewEducation = await EducationModel.create(newEducation);
    return createdNewEducation;
  }

  static async findByUserId(userId) {
    const educations = await EducationModel.find({ userId: userId });
    return educations;
  }

  static async findById(id) {
    const education = await EducationModel.findOne(ObjectId(id));
    return education;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectId(id) };
    const update = { $set: updateField };
    const option = { returnOriginal: false };

    const updatedEducation = await EducationModel.findOneAndUpdate(
        filter,
        update,
        option
    );
    return updatedEducation;
  }

  static async findByIdAndRemove(id) {
    const filter = { _id: ObjectId(id) };
    const deletedEducation = await EducationModel.findOneAndDelete(filter);
    return deletedEducation;
  }
}

export { Education };
