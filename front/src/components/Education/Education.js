import React, { useState } from "react";
import EducationCard from "./EducationCard";
import EducationEditForm from "./EducationEditForm";

function Education ({ education, setEducations, isEditable }) {
  // useState 훅을 통해 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return(
    <>
      {isEditing ? (
        <EducationEditForm
          currentEducation = {education}
          setEducations = {setEducations}
          setIsEditing = {setIsEditing}
        />
      ) : (
        <EducationCard
          education = {education}
          setIsEditing = {setIsEditing}
          isEditable = {isEditable}
          setEducations={setEducations}
        />
      )}
    </>
  );
}

export default Education;
