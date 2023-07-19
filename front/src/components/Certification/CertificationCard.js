import { Card, Button, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from '../../api';

function CertificationCard({ certification, isEditable, setIsEditing }) {
  
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

export default CertificationCard;