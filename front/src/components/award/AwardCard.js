import { Card, Button, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function AwardCard({ award, isEditable, setIsEditing, setAwards }) {

  const { id, title, description } = award;

  console.log(award.id);

  const handleDeleteAward = () => {
    
    Api.delete(`awards/${award.userId}/${award.id}`, id)
    .then(async (response) => {
      // 1. 여기서 정보를 조회하는 Api를 호출한다.
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정해준다.
      Api.get(`awards/${award.userId}}`)
        .then((res) => setAwards(res.data));
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
          {/* <br />
          <span className="text-muted">{award.date}</span>
          <br />
          <span className="text-muted">{award.institution}</span> */}
        </Col>
        {isEditable && (
          <>
          <Col xs lg="1">
          <CommonButton
              handleDelete={()=> setIsEditing((prev) => !prev)}
              buttonText="편집"
          />
          </Col>
          <Col xs lg="1">
            <CommonButton
              handleDelete={handleDeleteAward}
              buttonText="삭제"
          />
          </Col>
          </>
        )}
      </Row>
    </Card.Text>
  );
}

export default AwardCard;