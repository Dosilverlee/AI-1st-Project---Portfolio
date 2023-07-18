import { EducationModel } from "../schemas/education";
import { ObjectTypeHandler } from "../typeHandler";

class Education {
  //학력 생성
  static async create(newEducation) {
    const createdNewEducation = await EducationModel.create(newEducation);
    return createdNewEducation;
  }

  //userId로 학력 정보 모두 찾기
  static async findEducationsByUserId(userId) {
    const educations = await EducationModel.find({ userId });
    return educations;
  }

  //educationId로 햑력 정보 하나 찾기
  static async findEducationByEducationId(id) {
    const education = await EducationModel.findOne(ObjectTypeHandler(id));
    return education;
  }

  static async findEducationByTitleAndDescription(userId, title, descirption){
    const education = await EducationModel.findOne({ userId, title, descirption});
    return education;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectTypeHandler(id) };
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
    const filter = { _id: ObjectTypeHandler(id) };
    const deletedEducation = await EducationModel.findOneAndDelete(filter);
    return deletedEducation;
  }
}

export { Education };
