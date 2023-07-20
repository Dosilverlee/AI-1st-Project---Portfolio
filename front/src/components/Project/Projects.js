import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";
import Project from "./Project";
import ProjectAddForm from "./ProjectAddForm";

function Projects({ portfolioOwnerId, isEditable }) {
  //useState로 awards 상태를 생성함.
  const [projects, setProjects] = useState([]);
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);

  const user_id = portfolioOwnerId;

  useEffect(() => {
    // "awardlist/유저id"로 GET 요청하고, response의 data로 awards를 세팅함.
    Api.get("projects", user_id).then((res) => setProjects(res.data));
    setIsAdding(false);
  }, [portfolioOwnerId]);

  return (
    <Card className="m-2" style={{borderRadius:"0.5em"}}>
      <Card.Body>
        <div>
          <Card.Title style={{display:"inline-block", fontWeight: "bold"}}>프로젝트</Card.Title>
          {isEditable && (
            <button style={{display:"inline-block", float:"right", background:"white", border:"none"}} onClick={() => setIsAdding(true)}>➕</button>
          )}
        </div>
        {projects.map((project) => (
          <Project
            key={Project.id}
            project={project}
            setProjects={setProjects}
            isEditable={isEditable}
          />
        ))}
        {isAdding && (
          <ProjectAddForm
            portfolioOwnerId={portfolioOwnerId}
            setProjects={setProjects}
            setIsAdding={setIsAdding}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default Projects;