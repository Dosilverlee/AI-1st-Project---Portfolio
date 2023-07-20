// 등록된 자격증내역 카드형태로 보여줌. 필요시 자격증내역 삭제 & 편집 기능
import { Card, Button, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function CertificationCard({
  certification,
  isEditable,
  setIsEditing,
  setCertifications,
}) {
  const { id, title, description, date, institute } = certification;
  // 해당 자격증내역 삭제 호출 함수
  const handleDeleteCertificate = () => {
    Api.delete(`certificates/${certification.userId}/${certification.id}`)
      .then(async (response) => {
        // 1. 정보를 조회하는 Api를 호출
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 자격증내역을 다시 설정
        Api.get(`certificates/${certification.userId}`).then((res) =>
          setCertifications(res.data)
        );
      })
      .catch((error) => {});
  };

  return (
    <Card.Text>
      <div style={{ display: "inline-block" }}>
        <span>{certification.title}</span>
        <br />
        <span className="text-muted">{certification.description}</span>
        <br />
        <span className="text-muted">{certification.date}</span>
        <br />
        <span className="text-muted">{certification.institute}</span>
      </div>
      {isEditable && (
        <div style={{ display: "inline-block", float: "right" }}>
          <CommonButton
            handleDelete={handleDeleteCertificate}
            buttonText="🗑️"
          />
          <CommonButton
            handleDelete={() => setIsEditing((prev) => !prev)}
            buttonText="✏️"
          />
        </div>
      )}
    </Card.Text>
  );
}

export default CertificationCard;
