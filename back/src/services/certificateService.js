import { Certificate } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class certificateService {
  // 자격 이력 추가
  static async addCertificate({ userId, title, description }) {
    const certificateData = await Certificate.findOne({ userId });
    if (certificateData) {
      const errorMessage =
        "이미 등록된 자격 사항입니다.";
      return { errorMessage };
    }

    const newCertificate = { userId, title, description };

    // db에 저장
    const createdNewCertificate = await Certificate.create(newCertificate);

    return createdNewCertificate;
  }

  // 자격 이력 가져오기
  static async getCertificateByUserId({ userId }) {
    // userID로 수상이력 가져오기
    const certificateData = await Certificate.findOne({ userId });
    if (!certificateData) {
      const errorMessage =
        "자격 사항 없음";
      return { errorMessage };
    }

    // 반환할 loginuser 객체를 위한 변수 설정
    const id = certificateData._id;
    const title = certificateData.title;
    const description = certificateData.description;

    const certificateDataResult = {
      id,
      title,
      description,
      errorMessage: null,
    };

    return certificateDataResult;
  }

  // 자격 이력 수정하기
  static async setCertificate({ id, toUpdate }) {
    id = mongoose.Types.ObjectId(id); // 문자열 형태의 id를 ObjectId로 변환
    let certificateData = await Certificate.findOne({ _id: id });
  
    if (!certificateData) {
      const errorMessage = "자격 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
  
    // 모든 변경사항을 한번에 적용하기 위해 필드를 한번에 업데이트
    const certificateResult = await Certificate.updateOne({ _id: id }, toUpdate);
  
    return certificateResult;
  }

  static async deleteCertificate({ userId }) {
    const certificateData = await Certificate.findOne({ userId });

    if (!certificateData) {
      const errorMessage =
      "해당 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage }
    }

    await certificateData.remove();
    return true;
  }
}

export { certificateService };
