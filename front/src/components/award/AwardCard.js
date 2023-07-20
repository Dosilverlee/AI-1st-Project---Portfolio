// 등록된 수상내역 카드형태로 보여줌. 필요시 수상내역 삭제 & 편집 기능
import { Card, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function AwardCard({ award, isEditable, setIsEditing, setAwards }) {
  const { title, description } = award;
  // 해당 수상내역 삭제 호출 함수
  const handleDeleteAward = () => {
    Api.delete(`awards/${award.userId}/${award.id}`)
      .then(async (response) => {
        // 1. 정보를 조회하는 Api를 호출
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 수상내역을 다시 설정
        await Api.get(`awards/${award.userId}`).then((res) =>
          setAwards(res.data)
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
              handleDelete={handleDeleteAward}
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
        <span className="text-muted">{award.date}</span>
        <br />
        <span className="text-muted">{award.institute}</span>
      </div>
    </Card.Text>
  );
}

export default AwardCard;
