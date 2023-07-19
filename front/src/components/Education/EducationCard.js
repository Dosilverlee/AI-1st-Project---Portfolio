import { Card, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from '../../api';

function EducationCard({ education, isEditable, setIsEditing, setEducations }) {
  const { id, title, description, grade } = education;

  // console.log(education);

  const convertGradeText = (grade) => {
    if (grade === 1) return "재학중"
    if (grade === 2) return "학사 졸업"
    if (grade === 3) return "석사 졸업"
    return "박사 졸업"
  }

  const handleDeleteEducation = () => {
    
    Api.delete(`educations/${education.userId}/${education.id}`, id)
    .then(async (response) => {
      // 1. 여기서 정보를 조회하는 Api를 호출한다.
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정해준다.
      Api.get(`educations/${education.userId}}`)
        .then((res) => setEducations(res.data));
    })
    .catch((error) => {});
  };

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{title}</span>
          <br />
          <span className="text-muted">{description}</span>
          <br />
          <span>{convertGradeText(grade)}</span>
        </Col>
        {isEditable && (
          <>
          <Col xs lg="1">
            <CommonButton
              handleDelete={()=> setIsEditing((prev) => !prev)}
              buttonText="✏️"
            />
          </Col>
          <Col xs lg="1">
            <CommonButton
              handleDelete={handleDeleteEducation}
              buttonText="🗑️"
            />
          </Col>
          </>
        )}
      </Row>
    </Card.Text>
  );
}

export default EducationCard;

