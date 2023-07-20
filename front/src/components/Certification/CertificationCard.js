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

  const handleDeleteCertificate = () => {
    Api.delete(`certificates/${certification.userId}/${certification.id}`)
      .then(async (response) => {
        // 1. 여기서 정보를 조회하는 Api를 호출한다.
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정해준다.
        Api.get(`certificates/${certification.userId}`).then((res) =>
          setCertifications(res.data)
        );
      })
      .catch((error) => {});
  };

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{certification.title}</span>
          <br />
          <span className="text-muted">{certification.description}</span>
          <br />
          <span className="text-muted">{certification.date}</span>
          <br />
          <span className="text-muted">{certification.institute}</span>
        </Col>
        {isEditable && (
          <>
            <Col xs lg="1">
              <CommonButton
                handleDelete={() => setIsEditing((prev) => !prev)}
                buttonText="✏️"
              />
            </Col>
            <Col xs lg="1">
              <CommonButton
                handleDelete={handleDeleteCertificate}
                buttonText="🗑️"
              />
            </Col>
          </>
        )}
      </Row>
    </Card.Text>
  );
}

export default CertificationCard;
