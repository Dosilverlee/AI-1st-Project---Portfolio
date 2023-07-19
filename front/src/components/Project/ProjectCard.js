import { Card, Button, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function ProjectCard({ project, isEditable, setIsEditing, setProjects }) {
  const { id, title, description } = project;
  const handleIsEditingToggle = () => setIsEditing((prev) => !prev);

  const handleDeleteProject = () => {
    Api.delete(`projects/${project.userId}/${project.id}`, id)
      .then(async (response) => {
        // 1. 여기서 정보를 조회하는 Api를 호출한다.
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정해준다.
        Api.get(`projects/${project.userId}}`).then((res) =>
          setProjects(res.data)
        );
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
                handleDelete={handleDeleteProject}
                buttonText="삭제"
              />
            </Col>
          </>
        )}
      </Row>
    </Card.Text>
  );
}

export default ProjectCard;
