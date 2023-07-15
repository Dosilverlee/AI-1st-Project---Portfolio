import { Education } from "../db/models/Educations"; 

class EducationService {
  //학력 이력 추가
  static async addEducation({ userId, title, description }) {
    const EducationData = await Education.findByUserId(userId);
    if (EducationData.length > 1) {
      const errorMessage =
        "이미 등록된 수상이력입니다.";
      return { errorMessage };
    }

    const newEducation = { userId, title, description };

    // db에 저장
    const createdNewEducation = await Education.create(newEducation);

    return createdNewEducation;
  }

  // 학력 이력 가져오기
  static async getEducationByUserId({ userId }) {
    // userID로 학력 이력 가져오기
    const educationData = await Education.findByUserId(userId);
    if (educationData.length === 0) {
      return [];
    }

    // 모든 학력 이력을 배열로 변환
    const educationDataResult = educationData.map(education => ({
      id: education._id,
      userId: education.userId,
      title: education.title,
      description: education.description,
    }));

    return educationDataResult;
  }

  // 학력 이력 수정하기
  static async setAward({ id, toUpdate }) {
    let educationData = await Education.findById(id);

    if (educationData === 0) {
      const errorMessage = "학력 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const updatedAward = await Award.update(id, toUpdate);
    return updatedAward;
  }

  // 수상 이력 삭제하기
  static async deleteAward({ id }) {
    let awardData = await Award.findById(id);
  
    if (awardData === 0) {
      throw new Error("삭제할 이력이 없습니다.");
    }
    const deletedEducation = await Education.findByIdAndRemove(id);
    return deletedEducation;
  }
}

export { EducationService };
