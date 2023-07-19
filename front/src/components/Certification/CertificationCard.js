import { Card, Button, Row, Col } from "react-bootstrap";

function CertificationCard({ certification, isEditable, setIsEditing }) {
  console.log(certification.id);
    return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{certification.title}</span>
          <br />
          <span className="text-muted">{certification.description}</span>
          {/* <br />
          <span className="text-muted">{certification.date}</span>
          <br />
          <span className="text-muted">{certification.institution}</span> */}
        </Col>
        {isEditable && (
          <Col xs lg="1">
            <div className="mb-3">
            <span>
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3"
            >
              편집
            </Button>
            </span>
            </div>
            
            <div>
            <span>
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => prev)}
              className="mr-3"
            >
              삭제
            </Button>
            </span>
            </div>

            

            
          </Col>
        )}
      </Row>
    </Card.Text>
  );
}

export default CertificationCard;