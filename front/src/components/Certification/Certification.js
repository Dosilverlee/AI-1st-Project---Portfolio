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
