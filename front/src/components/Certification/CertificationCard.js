import { Card, Button, Row, Col } from "react-bootstrap";

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
          <Col xs lg="1">
            
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3"
            >
              편집
            </Button>
            
          </Col>
        )}
      </Row>
    </Card.Text>
  );
}

export default CertificationCard;