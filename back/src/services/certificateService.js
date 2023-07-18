import { Certificate } from "../db/models/Certificate"; 

class certificateService {
  // 수상 이력 추가
  static async addCertificate({ userId, title, description }) {
    const certificateData = await Certificate.findByUserId(userId);
    if (certificateData.length > 1) {
      const errorMessage =
        "이미 등록된 자격이력입니다.";
      return { errorMessage };
    }

    const newCertificate = { userId, title, description };

    // db에 저장
    const createdNewCertificate = await Certificate.create(newCertificate);

    return createdNewCertificate;
  }

  // 수상 이력 가져오기
  static async getCertificateByUserId({ userId }) {
    // userID로 수상이력 가져오기
    const certificateData = await Certificate.findByUserId(userId);
    if (certificateData.length === 0) {
      return [];
    }

    // 모든 수상 이력을 배열로 변환
    const certificateDataResult = certificateData.map(certificate => ({
      id: certificate._id,
      userId: certificate.userId,
      title: certificate.title,
      description: certificate.description,
    }));

    return certificateDataResult;
  }

  // 수상 이력 수정하기
  static async setCertificate({ id, toUpdate }) {
    let certificateData = await Certificate.findById(id);

    if (certificateData === 0) {
      const errorMessage = "자격 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const updatedCertificate = await Certificate.update(id, toUpdate);
    return updatedCertificate;
  }

  // 수상 이력 삭제하기
  static async deleteCertificate({ id }) {
    let certificateData = await Certificate.findById(id);
  
    if (certificateData === 0) {
      throw new Error("삭제할 이력이 없습니다.");
    }
    const deletedCertificate = await Certificate.findByIdAndRemove(id);
    return deletedCertificate;
  }
}

export { certificateService };
