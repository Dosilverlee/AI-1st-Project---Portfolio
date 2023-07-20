import { Card, Button, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";
import * as Api from "../../api";

function ProjectCard({ project, isEditable, setIsEditing, setProjects }) {
  const { title, description } = project;

  const handleDeleteProject = () => {
    Api.delete(`projects/${project.userId}/${project.id}`)
      .then(async (response) => {
        // 1. 여기서 정보를 조회하는 Api를 호출한다.
        // 2. 정보를 조회하는 Api가 성공하면, 그 응답값으로 학력정보를 다시 설정해준다.
        Api.get(`projects/${project.userId}`).then((res) =>
          setProjects(res.data)
        );
      })
      .catch((error) => {});
  };

  return (
    <Card.Text>
      <div style={{display:"inline-block"}}>
        <span>{title}</span>
        <br />
        <span className="text-muted">{description}</span>
      </div>
      {isEditable && (
        <div style={{display:"inline-block", float:"right"}}>
          <CommonButton
            handleDelete={handleDeleteProject}
            buttonText="🗑️"
          />
          <CommonButton
            handleDelete={() => setIsEditing((prev) => !prev)}
            buttonText="✏️"
          />
        </div>
      )}
    </Card.Text>
  );
}

export default ProjectCard;
