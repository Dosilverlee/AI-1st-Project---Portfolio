import { Award } from "../db/models/Award"; 

class awardService {
  // 수상 이력 추가
  static async addAward({ userId, title, description }) {
    const awardData = await Award.findByUserId({ userId });
    if (awardData) {
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
    const awardData = await Award.findByUserId({ userId });
    if (!awardData) {
      const errorMessage =
        "수상 이력 없음";
      return { errorMessage };
    }

    // 반환할 loginuser 객체를 위한 변수 설정
    const id = awardData._id;
    const userIdFromData = awardData.id;
    const title = awardData.title;
    const description = awardData.description;

    const awardDataResult = {
      id,
      userId: userIdFromData,
      title,
      description,
      errorMessage: null,
    };

    return awardDataResult;
  }

  // 수상 이력 수정하기
  static async setAward({ id, toUpdate }) {
    let awardData = await Award.findByUserId({ _id: id });

    if (!awardData) {
      const errorMessage = "프로젝트 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    // 모든 변경사항을 한번에 적용하기 위해 필드를 한번에 업데이트
    const updatedAward = await Award.update({ userId: awardData.userId, updateField: toUpdate });

    return updatedAward;
  }

  static async deleteAward({ id }) {
    const awardData = await Award.findByUserId({ _id: id });

    if (!awardData) {
      const errorMessage =
      "해당 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage }
    }

    await awardData.remove();
    return true;
  }
}

export { awardService };