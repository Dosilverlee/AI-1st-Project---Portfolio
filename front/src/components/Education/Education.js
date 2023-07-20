// isEditing 상태에 따라서 편집화면, 등록된 정보화면으로 전환하는 역할을 수행함.
import React, { useState } from "react";
import EducationCard from "./EducationCard";
import EducationEditForm from "./EducationEditForm";

function Education({ education, setEducations, isEditable }) {
  // useState 훅을 통해 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <EducationEditForm
          currentEducation={education}
          setEducations={setEducations}
          setIsEditing={setIsEditing}
        />
      ) : (
        <EducationCard
          education={education}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
          setEducations={setEducations}
        />
      )}
    </>
  );
}

export default Education;
