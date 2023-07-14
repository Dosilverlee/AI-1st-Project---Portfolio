import { Award } from "../db/models/Award"; 

class awardService {
  // 수상 이력 추가
  static async addAward({ userId, title, description }) {
    const awardData = await Award.findByUserId(userId);
    if (awardData.length > 1) {
      const errorMessage =
        "이미 등록된 수상이력입니다.";
      return { errorMessage };
    }

    const newAward = { userId, title, description };

    // db에 저장
    const createdNewAward = await Award.create(newAward);

    return createdNewAward;
  }

  // 수상 이력 가져오기
  static async getAwardByUserId({ userId }) {
    // userID로 수상이력 가져오기
    const awardData = await Award.findByUserId(userId);
    if (awardData.length === 0) {
      return [];
    }

    // 모든 수상 이력을 배열로 변환
    const awardDataResult = awardData.map(award => ({
      id: award._id,
      userId: award.userId,
      title: award.title,
      description: award.description,
    }));

    return awardDataResult;
  }

  // 수상 이력 수정하기
  static async setAward({ id, toUpdate }) {
    let awardData = await Award.findById(id);

    if (awardData === 0) {
      const errorMessage = "프로젝트 이력이 없습니다. 다시 한 번 확인해 주세요.";
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
    const deletedAward = await Award.findByIdAndRemove(id);
    return deletedAward;
  }
}

export { awardService };