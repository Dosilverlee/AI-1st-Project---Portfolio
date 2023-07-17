import { Education } from "../db/models/Educations"; 

class educationService {
  
  //학력 추가
  //title, description이 동시에 같지 않으면
  static async addEducation({ userId, title, description, educationState }) {
    const educationData = await Education.findEducationByTitleAndDescription(title, description);
    if (educationData) {
      const errorMessage =
        "이미 등록된 수상이력입니다.";
      return { errorMessage };
    }

    const newEducation = { userId, title, description, educationState};

    // db에 저장
    const createdNewEducation = await Education.create(newEducation);

    return createdNewEducation;
  }

  //userId로 해당 유저의 학력 내용 전부 가져오기
  static async getEducationsByUserId({ userId }) {
    const educationData = await Education.findEducationsByUserId(userId);
    if (educationData.length === 0) { //5개면 5개
      return [];
    }

    // 모든 학력 내용을 배열로 변환
    const educationDataResult = educationData.map(education => ({
      userId: education.userId,
      id: education._id,
      title: education.title,
      description: education.description,
      educationState : education.educationState
    }));

    return educationDataResult;
  }

  // 학력 내용 수정
  static async setEducation({ id, toUpdate }) {
    let educationData = await Education.findEducationByEducationId(id);

    if (educationData === 0) {
      const errorMessage = "학력 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const updatedEducation = await Education.update(educationData.id, toUpdate);

    return updatedEducation;
  }

  // 학력 삭제하기
  static async deleteEducation({ id }) {
    let educationData= await Education.findEducationByEducationId(id);
  
    if (educationData === 0) {
      throw new Error("삭제할 이력이 없습니다.");
    }
    const deletedEducation = await Education.findByIdAndRemove(educationData.id);
    return deletedEducation;
  }
}

export { educationService };