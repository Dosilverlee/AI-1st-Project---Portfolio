// isEditing 상태에 따라서 편집화면, 등록된 정보화면으로 전환하는 역할을 수행함.
import React, { useState, Fragment } from "react";
import ProjectCard from "./ProjectCard";
import ProjectEditForm from "./ProjectEditForm";

function Project({ project, setProjects, isEditable }) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Fragment>
      {isEditing ? (
        <ProjectEditForm
          currentProject={project}
          setProjects={setProjects}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ProjectCard
          project={project}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
          setProjects={setProjects}
        />
      )}
    </Fragment>
  );
}

export default Project;
