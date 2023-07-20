import { Card, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function AwardCard({ award, isEditable, setIsEditing, setAwards }) {
  const { title, description } = award;

  const handleDeleteAward = () => {
    Api.delete(`awards/${award.userId}/${award.id}`)
      .then(async (response) => {
        // 1. 여기서 정보를 조회하는 Api를 호출한다.
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정해준다.
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
