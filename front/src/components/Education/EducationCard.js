// 등록된 학력 카드형태로 보여줌. 필요시 학력 삭제 & 편집 기능
import { Card, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function EducationCard({ education, isEditable, setIsEditing, setEducations }) {
  const { title, description, graduation } = education;
  // 학위 종류에 따라 graduation 값에 따른 텍스트로 변환하는 역할 수행
  const convertGradeText = (graduation) => {
    if (graduation === 0) return "재학중";
    if (graduation === 1) return "학사 졸업";
    if (graduation === 2) return "석사 졸업";
    return "박사 졸업";
  };
  // 해당 학력 삭제 호출 함수
  const handleDeleteEducation = () => {
    Api.delete(`educations/${education.userId}/${education.id}`)
      .then(async (response) => {
        // 1. 정보를 조회하는 Api를 호출
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정
        Api.get(`educations/${education.userId}`).then((res) =>
          setEducations(res.data)
        );
      })
      .catch((error) => {});
  };

  return (
    <Card.Text>
      <div style={{display:"inline-block", width:"100%"}}>
        <span>{title}</span>
        {isEditable && (
          <div style={{display:"inline-block", float:"right"}}>
            <CommonButton
              handleDelete={handleDeleteEducation}
              buttonText="🗑️"
            />
            <CommonButton
              handleDelete={() => setIsEditing((prev) => !prev)}
              buttonText="✏️"
            />
          </div>
        )}
        <br />
        <span className="text-muted">{description}</span>
        <br />
        <span>{convertGradeText(graduation)}</span>
      </div>
    </Card.Text>
  );
}

export default EducationCard;
