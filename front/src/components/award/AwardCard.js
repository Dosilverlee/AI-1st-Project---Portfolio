import { Card, Button, Row, Col } from "react-bootstrap";

function AwardCard({ award, isEditable, setIsEditing }) {
    return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{award.title}</span>
          <br />
          <span className="text-muted">{award.description}</span>
          {/* <br />
          <span className="text-muted">{award.date}</span>
          <br />
          <span className="text-muted">{award.institution}</span> */}
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
              ✏️
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
              🗑️
            </Button>
            </span>
            </div>

            

            
          </Col>
        )}
      </Row>
    </Card.Text>
  );
}

export default AwardCard;