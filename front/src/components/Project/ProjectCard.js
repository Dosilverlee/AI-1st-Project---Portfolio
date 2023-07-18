import { Card, Button, Row, Col } from "react-bootstrap";

function ProjectCard({ project, isEditable, setIsEditing }) {
  const { title, description } = project;
  const handleIsEditingToggle = () => setIsEditing((prev)=>!prev);

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{title}</span>
          <br />
          <span className="text-muted">{description}</span>
        </Col>
        {isEditable && (
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm"
              onClick={handleIsEditingToggle}
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

export default ProjectCard;