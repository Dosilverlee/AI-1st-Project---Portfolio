// isEditing 상태에 따라서 편집화면, 등록된 정보화면으로 전환하는 역할을 수행함.
import React, { useState } from "react";
import CertificationCard from "./CertificationCard";
import CertificationEditForm from "./CertificationEditForm";

function Certification({ certification, setCertifications, isEditable }) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <CertificationEditForm
          currentCertification={certification}
          setCertifications={setCertifications}
          setIsEditing={setIsEditing}
        />
      ) : (
        <CertificationCard
          certification={certification}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
          setCertifications={setCertifications}
        />
      )}
    </>
  );
}

export default Certification;
